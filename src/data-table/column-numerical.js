/*
Copyright (c) 2018-2019 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
// @flow

import * as React from 'react';

import {Button, SIZE} from '../button/index.js';
import {ButtonGroup, MODE} from '../button-group/index.js';
import {Input, SIZE as INPUT_SIZE} from '../input/index.js';
import {useStyletron} from '../styles/index.js';
import {Paragraph4} from '../typography/index.js';

import CellShell from './cell-shell.js';
import {COLUMNS, NUMERICAL_FORMATS, NUMERICAL_OPERATIONS} from './constants.js';
import FilterShell from './filter-shell.js';
import type {ColumnT} from './types.js';

type NumericalFormats =
  | typeof NUMERICAL_FORMATS.DEFAULT
  | typeof NUMERICAL_FORMATS.ACCOUNTING
  | typeof NUMERICAL_FORMATS.PERCENTAGE;

type NumericalOperations =
  | typeof NUMERICAL_OPERATIONS.EQ
  | typeof NUMERICAL_OPERATIONS.GT
  | typeof NUMERICAL_OPERATIONS.GTE
  | typeof NUMERICAL_OPERATIONS.LT
  | typeof NUMERICAL_OPERATIONS.LTE;

type OptionsT = {|
  title: string,
  sortable?: boolean,
  filterable?: boolean,
  format?: NumericalFormats,
  highlight?: number => boolean,
  minWidth?: number,
  precision?: number,
|};

type FilterParametersT = {|
  comparisons: Array<{|
    value: number,
    operation: NumericalOperations,
  |}>,
  exclude: boolean,
|};

type NumericalColumnT = ColumnT<number, FilterParametersT>;

function roundToFixed(value: number, precision: number) {
  const k = Math.pow(10, precision);
  return Math.round(value * k) / k;
}

function format(value: number, options) {
  let formatted = value.toString();
  switch (options.format) {
    case NUMERICAL_FORMATS.ACCOUNTING: {
      const abs = Math.abs(value);
      if (value < 0) {
        formatted = `($${roundToFixed(abs, options.precision)})`;
        break;
      }
      formatted = `$${roundToFixed(abs, options.precision)}`;
      break;
    }
    case NUMERICAL_FORMATS.PERCENTAGE: {
      formatted = `${roundToFixed(value, options.precision)}%`;
      break;
    }
    case NUMERICAL_FORMATS.DEFAULT:
    default:
      formatted = roundToFixed(value, options.precision);
      break;
  }
  return formatted;
}

function validateInput(input) {
  return Boolean(parseFloat(input)) || input === '' || input === '-';
}

function NumericalFilter(props) {
  const [useCss, theme] = useStyletron();
  const [exclude, setExclude] = React.useState(false);
  const [comparatorIndex, setComparatorIndex] = React.useState(0);
  const [operatorIndex, setOperatorIndex] = React.useState(0);
  const [left, setLeft] = React.useState('');
  const [right, setRight] = React.useState('');

  const isRange = comparatorIndex === 0;
  const min = React.useMemo(() => Math.min(...props.data), [props.data]);
  const max = React.useMemo(() => Math.max(...props.data), [props.data]);

  React.useEffect(() => {
    setLeft(min.toString());
    setRight(max.toString());
  }, []);

  const [leftDisabled, rightDisabled] = React.useMemo(() => {
    if (!isRange) return [false, false];
    switch (operatorIndex) {
      case 4:
        return [false, false];
      case 0:
      case 2:
        return [true, false];
      case 1:
      case 3:
        return [false, true];
      default:
        return [true, true];
    }
  }, [operatorIndex, isRange]);

  const leftInputRef = React.useRef(null);
  const rightInputRef = React.useRef(null);
  React.useEffect(() => {
    if (!leftDisabled && leftInputRef.current) {
      leftInputRef.current.focus({preventScroll: true});
    } else if (!rightDisabled && rightInputRef.current) {
      rightInputRef.current.focus({preventScroll: true});
    }
  }, [leftDisabled, rightDisabled, comparatorIndex]);

  React.useEffect(() => {
    switch (operatorIndex) {
      case 4:
      default:
        break;
      case 1:
      case 3:
        setRight(max.toString());
        break;
      case 0:
      case 2:
        setLeft(min.toString());
        break;
    }
  }, [operatorIndex]);

  return (
    <FilterShell
      exclude={exclude}
      onExcludeChange={() => setExclude(!exclude)}
      onApply={() => {
        if (isRange) {
          switch (operatorIndex) {
            case 0: {
              const value = parseFloat(right);
              const operation = NUMERICAL_OPERATIONS.LT;
              props.setFilter(
                {
                  comparisons: [{value, operation}],
                  exclude,
                },
                `${operation} ${value}`,
              );
              break;
            }
            case 1: {
              const value = parseFloat(left);
              const operation = NUMERICAL_OPERATIONS.GT;
              props.setFilter(
                {
                  comparisons: [{value, operation}],
                  exclude,
                },
                `${operation} ${value}`,
              );
              break;
            }
            case 2: {
              const value = parseFloat(right);
              const operation = NUMERICAL_OPERATIONS.LTE;
              props.setFilter(
                {
                  comparisons: [{value, operation}],
                  exclude,
                },
                `${operation} ${value}`,
              );
              break;
            }
            case 3: {
              const value = parseFloat(left);
              const operation = NUMERICAL_OPERATIONS.GTE;
              props.setFilter(
                {
                  comparisons: [{value, operation}],
                  exclude,
                },
                `${operation} ${value}`,
              );
              break;
            }
            case 4: {
              // 'between' case is interesting since if we want less than 10 plus greater than 5
              // comparators, the filter will include _all_ numbers.
              const leftValue = parseFloat(left);
              const rightValue = parseFloat(right);
              props.setFilter(
                {
                  comparisons: [
                    {
                      value: leftValue,
                      operation: NUMERICAL_OPERATIONS.LT,
                    },
                    {
                      value: rightValue,
                      operation: NUMERICAL_OPERATIONS.GT,
                    },
                  ],
                  exclude: !exclude,
                },
                `${NUMERICAL_OPERATIONS.GTE} ${leftValue} & ${NUMERICAL_OPERATIONS.LTE} ${rightValue}`,
              );
              break;
            }
            default:
              break;
          }
        } else {
          const value = parseFloat(left);
          const operation = NUMERICAL_OPERATIONS.EQ;
          props.setFilter(
            {
              comparisons: [{value, operation}],
              exclude,
            },
            `${operation} ${value}`,
          );
        }

        props.close();
      }}
    >
      <ButtonGroup
        size={SIZE.compact}
        mode={MODE.radio}
        selected={comparatorIndex}
        onClick={(_, index) => setComparatorIndex(index)}
        overrides={{
          Root: {
            style: ({$theme}) => ({marginBottom: $theme.sizing.scale300}),
          },
        }}
      >
        <Button
          type="button"
          overrides={{BaseButton: {style: {width: '100%'}}}}
        >
          Range
        </Button>
        <Button
          type="button"
          overrides={{BaseButton: {style: {width: '100%'}}}}
        >
          Single Value
        </Button>
      </ButtonGroup>

      {isRange && (
        <ButtonGroup
          size={SIZE.compact}
          mode={MODE.radio}
          selected={operatorIndex}
          onClick={(_, index) => setOperatorIndex(index)}
          overrides={{
            Root: {
              style: ({$theme}) => ({marginBottom: $theme.sizing.scale500}),
            },
          }}
        >
          <Button
            type="button"
            overrides={{BaseButton: {style: {width: '100%'}}}}
          >
            &#60;
          </Button>
          <Button
            type="button"
            overrides={{BaseButton: {style: {width: '100%'}}}}
          >
            &#62;
          </Button>
          <Button
            type="button"
            overrides={{BaseButton: {style: {width: '100%'}}}}
          >
            &#8804;
          </Button>
          <Button
            type="button"
            overrides={{BaseButton: {style: {width: '100%'}}}}
          >
            &#8805;
          </Button>
          <Button
            type="button"
            overrides={{BaseButton: {style: {width: '100%'}}}}
          >
            &#61;
          </Button>
        </ButtonGroup>
      )}

      <div
        className={useCss({
          display: 'flex',
          justifyContent: 'space-between',
          marginLeft: theme.sizing.scale300,
          marginRight: theme.sizing.scale300,
        })}
      >
        <Paragraph4>{format(min, props.options)}</Paragraph4>{' '}
        <Paragraph4>{format(max, props.options)}</Paragraph4>
      </div>

      <div
        className={useCss({display: 'flex', justifyContent: 'space-between'})}
      >
        <Input
          size={INPUT_SIZE.compact}
          overrides={{Root: {style: {width: isRange ? '152px' : '100%'}}}}
          disabled={leftDisabled}
          inputRef={leftInputRef}
          value={left}
          onChange={event => {
            if (validateInput(event.target.value)) {
              setLeft(event.target.value);
            }
          }}
        />

        {isRange && (
          <Input
            size={INPUT_SIZE.compact}
            overrides={{Root: {style: {width: '152px'}}}}
            disabled={rightDisabled}
            inputRef={rightInputRef}
            value={right}
            onChange={event => {
              if (validateInput(event.target.value)) {
                setRight(event.target.value);
              }
            }}
          />
        )}
      </div>
    </FilterShell>
  );
}

const NumericalCell = React.forwardRef<_, HTMLDivElement>((props, ref) => {
  const [useCss, theme] = useStyletron();

  return (
    <CellShell
      ref={ref}
      isMeasured={props.isMeasured}
      isSelected={props.isSelected}
      onSelect={props.onSelect}
    >
      <div
        className={useCss({
          display: 'flex',
          justifyContent: 'flex-end',
          color: props.highlight(props.value) ? theme.colors.negative : null,
          fontFamily: `"Lucida Console", Monaco, monospace`,
          width: '100%',
        })}
      >
        {format(props.value, {
          format: props.format,
          precision: props.precision,
        })}
      </div>
    </CellShell>
  );
});
NumericalCell.displayName = 'NumericalCell';

const defaultOptions = {
  title: '',
  sortable: true,
  filterable: true,
  format: NUMERICAL_FORMATS.DEFAULT,
  highlight: (n: number) => false,
  precision: 0,
};

function NumericalColumn(options: OptionsT): NumericalColumnT {
  const normalizedOptions = {
    ...defaultOptions,
    ...options,
  };

  if (
    normalizedOptions.format !== NUMERICAL_FORMATS.DEFAULT &&
    (options.precision === null || options.precision === undefined)
  ) {
    normalizedOptions.precision = 2;
  }

  if (
    normalizedOptions.format === NUMERICAL_FORMATS.ACCOUNTING &&
    (options.highlight === null || options.highlight === undefined)
  ) {
    normalizedOptions.highlight = n => n < 0;
  }

  return {
    kind: COLUMNS.NUMERICAL,
    title: normalizedOptions.title,
    sortable: normalizedOptions.sortable,
    filterable: normalizedOptions.filterable,
    renderCell: React.forwardRef((props, ref) => {
      return (
        <NumericalCell
          ref={ref}
          isMeasured={props.isMeasured}
          isSelected={props.isSelected}
          onSelect={props.onSelect}
          value={props.value}
          format={normalizedOptions.format}
          highlight={normalizedOptions.highlight}
          precision={normalizedOptions.precision}
        />
      );
    }),
    renderFilter: function RenderNumericalFilter(props) {
      return <NumericalFilter {...props} options={normalizedOptions} />;
    },
    buildFilter: function(params) {
      return function(data) {
        const included = params.comparisons.some(c => {
          const left = roundToFixed(data, normalizedOptions.precision);
          const right = roundToFixed(c.value, normalizedOptions.precision);
          switch (c.operation) {
            case NUMERICAL_OPERATIONS.EQ:
              return left === right;
            case NUMERICAL_OPERATIONS.GT:
              return left > right;
            case NUMERICAL_OPERATIONS.GTE:
              return left >= right;
            case NUMERICAL_OPERATIONS.LT:
              return left < right;
            case NUMERICAL_OPERATIONS.LTE:
              return left <= right;
            default:
              return true;
          }
        });

        return params.exclude ? !included : included;
      };
    },
    // initial sort should display largest values first
    sortFn: function(a, b) {
      return b - a;
    },
    minWidth: options.minWidth,
  };
}

export default NumericalColumn;
