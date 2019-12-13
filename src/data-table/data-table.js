/*
Copyright (c) 2018-2019 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
// @flow

import * as React from 'react';
import {VariableSizeGrid} from 'react-window';
import AutoSizer from 'react-virtualized-auto-sizer';

import {
  Button,
  SHAPE as BUTTON_SHAPES,
  SIZE as BUTTON_SIZES,
  KIND as BUTTON_KINDS,
} from '../button/index.js';
import {useStyletron} from '../styles/index.js';
import {Tooltip, PLACEMENT} from '../tooltip/index.js';

import {COLUMNS, SORT_DIRECTIONS} from './constants.js';
import HeaderCell from './header-cell.js';
import MeasureColumnWidths from './measure-column-widths.js';
import type {
  ColumnT,
  DataTablePropsT,
  RowT,
  SortDirectionsT,
  RowActionT,
} from './types.js';

// consider pulling this out to a prop if useful.
const HEADER_ROW_HEIGHT = 48;

type InnerTableElementProps = {|
  children: React.Node,
  style: {[string]: mixed},
|};

type HeaderContextT = {|
  columns: ColumnT<>[],
  columnHoverIndex: number,
  filters: $PropertyType<DataTablePropsT, 'filters'>,
  isScrollingX: boolean,
  isSelectable: boolean,
  isSelectedAll: boolean,
  isSelectedIndeterminate: boolean,
  onMouseEnter: number => void,
  onMouseLeave: () => void,
  onSelectMany: () => void,
  onSelectNone: () => void,
  onSort: number => void,
  rowActions: RowActionT[],
  rowHeight: number,
  rowHoverIndex: number,
  rows: RowT[],
  scrollLeft: number,
  sortIndex: number,
  sortDirection: SortDirectionsT,
  widths: number[],
|};

type CellPlacementPropsT = {
  columnIndex: number,
  rowIndex: number,
  style: {
    position: string,
    height: number,
    width: number,
    top: number,
    left: number,
  },
  data: {
    columns: ColumnT<>[],
    columnHoverIndex: number,
    isSelectable: boolean,
    isRowSelected: (string | number) => boolean,
    onHoverRow: number => void,
    onSelectOne: RowT => void,
    rowHoverIndex: number,
    rows: RowT[],
    textQuery: string,
  },
};

function CellPlacement({columnIndex, rowIndex, data, style}) {
  const [css, theme] = useStyletron();

  // ignores the table header row
  if (rowIndex === 0) {
    return null;
  }

  let backgroundColor = theme.colors.mono100;
  if (
    (rowIndex % 2 && columnIndex === data.columnHoverIndex) ||
    rowIndex === data.rowHoverIndex
  ) {
    backgroundColor = theme.colors.mono300;
  } else if (rowIndex % 2 || columnIndex === data.columnHoverIndex) {
    backgroundColor = theme.colors.mono200;
  }

  const Cell = data.columns[columnIndex].renderCell;
  const value = data.columns[columnIndex].mapDataToValue(
    data.rows[rowIndex - 1].data,
  );

  return (
    <div
      className={css({
        ...theme.borders.border200,
        backgroundColor,
        borderTop: 'none',
        borderBottom: 'none',
        borderLeft: 'none',
        boxSizing: 'border-box',
      })}
      style={style}
      onMouseEnter={() => data.onHoverRow(rowIndex)}
    >
      <Cell
        value={value}
        onSelect={
          data.isSelectable && columnIndex === 0
            ? () => data.onSelectOne(data.rows[rowIndex - 1])
            : undefined
        }
        isSelected={data.isRowSelected(data.rows[rowIndex - 1].id)}
        textQuery={data.textQuery}
      />
    </div>
  );
}
function compareCellPlacement(prevProps, nextProps) {
  // header cells are not rendered through this component
  if (prevProps.rowIndex === 0) {
    return true;
  }

  if (
    prevProps.data.columns !== nextProps.data.columns ||
    prevProps.data.rows !== nextProps.data.rows ||
    prevProps.style !== nextProps.style
  ) {
    return false;
  }

  if (
    prevProps.data.isSelectable === nextProps.data.isSelectable &&
    prevProps.data.columnHoverIndex === nextProps.data.columnHoverIndex &&
    prevProps.data.rowHoverIndex === nextProps.data.rowHoverIndex &&
    prevProps.data.textQuery === nextProps.data.textQuery &&
    prevProps.data.isRowSelected === nextProps.data.isRowSelected
  ) {
    return true;
  }

  // at this point we know that the rowHoverIndex or the columnHoverIndex has changed.
  // row does not need to re-render if not transitioning _from_ or _to_ highlighted
  // also ensures that all cells are invalidated on column-header hover
  if (
    prevProps.rowIndex !== prevProps.data.rowHoverIndex &&
    prevProps.rowIndex !== nextProps.data.rowHoverIndex &&
    prevProps.data.columnHoverIndex === nextProps.data.columnHoverIndex &&
    prevProps.data.isRowSelected === nextProps.data.isRowSelected
  ) {
    return true;
  }

  // similar to the row highlight optimization, do not update the cell if not in the previously
  // highlighted column or next highlighted.
  if (
    prevProps.columnIndex !== prevProps.data.columnHoverIndex &&
    prevProps.columnIndex !== nextProps.data.columnHoverIndex &&
    prevProps.data.rowHoverIndex === nextProps.data.rowHoverIndex &&
    prevProps.data.isRowSelected === nextProps.data.isRowSelected
  ) {
    return true;
  }

  return false;
}
const CellPlacementMemo = React.memo<CellPlacementPropsT, mixed>(
  CellPlacement,
  compareCellPlacement,
);
CellPlacementMemo.displayName = 'CellPlacement';

const HeaderContext = React.createContext<HeaderContextT>({
  columns: [],
  columnHoverIndex: -1,
  filters: new Map(),
  isScrollingX: false,
  isSelectable: false,
  isSelectedAll: false,
  isSelectedIndeterminate: false,
  onMouseEnter: () => {},
  onMouseLeave: () => {},
  onSelectMany: () => {},
  onSelectNone: () => {},
  onSort: () => {},
  rowActions: [],
  rowHeight: 0,
  rowHoverIndex: -1,
  rows: [],
  scrollLeft: 0,
  sortIndex: -1,
  sortDirection: null,
  widths: [],
});
HeaderContext.displayName = 'HeaderContext';

// replaces the content of the virtualized window with contents. in this case,
// we are prepending a table header row before the table rows (children to the fn).
const InnerTableElement = React.forwardRef<
  InnerTableElementProps,
  HTMLDivElement,
>((props, ref) => {
  const [css, theme] = useStyletron();
  const ctx = React.useContext(HeaderContext);

  // no need to render the cells until the columns have been measured
  if (!ctx.widths.filter(Boolean).length) {
    return null;
  }

  return (
    <div ref={ref} data-baseweb="data-table" style={props.style}>
      <div
        className={css({
          position: 'sticky',
          top: 0,
          left: 0,
          width: `${ctx.widths.reduce((sum, w) => sum + w, 0)}px`,
          height: `${HEADER_ROW_HEIGHT}px`,
          display: 'flex',
          // this feels bad.. the absolutely positioned children elements
          // stack on top of this element with the layer component.
          zIndex: 2,
        })}
      >
        {ctx.columns.map((column, columnIndex) => {
          const activeFilter = ctx.filters
            ? ctx.filters.get(column.title)
            : null;

          return (
            <Tooltip
              key={columnIndex}
              placement={PLACEMENT.bottomLeft}
              isOpen={
                ctx.columnHoverIndex === columnIndex && Boolean(activeFilter)
              }
              content={() => {
                return (
                  <div>
                    <p
                      className={css({
                        ...theme.typography.font100,
                        color: theme.colors.contentInversePrimary,
                      })}
                    >
                      filter applied to {column.title}
                    </p>
                    {activeFilter && (
                      <p
                        className={css({
                          ...theme.typography.font150,
                          color: theme.colors.contentInversePrimary,
                        })}
                      >
                        {activeFilter.description}
                      </p>
                    )}
                  </div>
                );
              }}
            >
              <div
                className={css({
                  ...theme.borders.border200,
                  backgroundColor: theme.colors.mono100,
                  borderTop: 'none',
                  borderLeft: 'none',
                  boxSizing: 'border-box',
                })}
                style={{width: ctx.widths[columnIndex]}}
              >
                <HeaderCell
                  index={columnIndex}
                  sortable={column.sortable}
                  isHovered={ctx.columnHoverIndex === columnIndex}
                  isSelectable={ctx.isSelectable && columnIndex === 0}
                  isSelectedAll={ctx.isSelectedAll}
                  isSelectedIndeterminate={ctx.isSelectedIndeterminate}
                  onMouseEnter={() => ctx.onMouseEnter(columnIndex)}
                  onMouseLeave={() => ctx.onMouseLeave()}
                  onSelectAll={ctx.onSelectMany}
                  onSelectNone={ctx.onSelectNone}
                  onSort={ctx.onSort}
                  sortDirection={
                    ctx.sortIndex === columnIndex ? ctx.sortDirection : null
                  }
                  title={column.title}
                />
              </div>
            </Tooltip>
          );
        })}
      </div>
      {React.Children.toArray(props.children).length <= ctx.columns.length ? (
        <div
          className={css({
            ...theme.typography.font100,
            marginTop: theme.sizing.scale600,
            marginLeft: theme.sizing.scale600,
          })}
        >
          No rows match the filter criteria defined. Please remove one or more
          filters to view more data.
        </div>
      ) : (
        props.children
      )}

      {ctx.rowActions &&
        Boolean(ctx.rowActions.length) &&
        ctx.rowHoverIndex > 0 &&
        !ctx.isScrollingX && (
          <div
            style={{
              alignItems: 'center',
              backgroundColor: 'rgba(238, 238, 238, 0.99)',
              display: 'flex',
              height: `${ctx.rowHeight}px`,
              padding: '0 16px',
              paddingLeft: theme.sizing.scale300,
              paddingRight: theme.sizing.scale300,
              position: 'absolute',
              right: 0 - ctx.scrollLeft,
              top: (ctx.rowHoverIndex - 1) * ctx.rowHeight + HEADER_ROW_HEIGHT,
            }}
          >
            {ctx.rowActions.map(rowAction => {
              const RowActionIcon = rowAction.renderIcon;
              return (
                <Button
                  alt={rowAction.label}
                  key={rowAction.label}
                  onClick={event =>
                    rowAction.onClick({
                      event,
                      row: ctx.rows[ctx.rowHoverIndex - 1],
                    })
                  }
                  size={BUTTON_SIZES.compact}
                  kind={BUTTON_KINDS.minimal}
                  shape={BUTTON_SHAPES.round}
                  overrides={{
                    BaseButton: {
                      style: {marginLeft: theme.sizing.scale300},
                    },
                  }}
                >
                  <RowActionIcon size={24} />
                </Button>
              );
            })}
          </div>
        )}
    </div>
  );
});
InnerTableElement.displayName = 'InnerTableElement';

export function Unstable_DataTable(props: DataTablePropsT) {
  const [, theme] = useStyletron();
  const rowHeight = props.rowHeight || 36;
  const gridRef = React.useRef<typeof VariableSizeGrid | null>(null);
  const [widths, setWidths] = React.useState(props.columns.map(() => 0));
  const handleWidthsChange = React.useCallback(
    nextWidths => {
      setWidths(nextWidths);
      if (gridRef.current) {
        // $FlowFixMe trigger react-window to layout the elements again
        gridRef.current.resetAfterColumnIndex(0, true);
      }
    },
    [gridRef.current],
  );
  const normalizedWidths = React.useMemo(() => {
    const sum = ns => ns.reduce((s, n) => s + n, 0);
    if (gridRef.current) {
      // $FlowFixMe
      const domWidth = gridRef.current.props.width;
      const measuredWidth = sum(widths);
      // $FlowFixMe
      const offsetWidth = gridRef.current._outerRef.offsetWidth;
      // $FlowFixMe
      const clientWidth = gridRef.current._outerRef.clientWidth;
      // sub 2 for border width
      const scrollbar = offsetWidth - clientWidth - 2;

      const remainder = domWidth - measuredWidth - scrollbar;
      const padding = remainder / widths.length;
      if (padding > 0) {
        return widths.map(w => w + padding);
      }
    }
    return widths;
  }, [widths]);

  const [scrollLeft, setScrollLeft] = React.useState(0);
  const [isScrollingX, setIsScrollingX] = React.useState(false);
  const [recentlyScrolledX, setRecentlyScrolledX] = React.useState(false);
  React.useLayoutEffect(() => {
    if (recentlyScrolledX !== isScrollingX) {
      setIsScrollingX(recentlyScrolledX);
    }

    if (recentlyScrolledX) {
      const timeout = setTimeout(() => {
        setRecentlyScrolledX(false);
      }, 200);
      return () => clearTimeout(timeout);
    }
  }, [recentlyScrolledX]);
  const handleScroll = React.useCallback(
    params => {
      setScrollLeft(params.scrollLeft);
      if (params.scrollLeft !== scrollLeft) {
        setRecentlyScrolledX(true);
      }
    },
    [scrollLeft, setScrollLeft, setRecentlyScrolledX],
  );

  const [rowHoverIndex, setRowHoverIndex] = React.useState(-1);
  const handleRowHover = React.useCallback(
    nextIndex => {
      setColumnHoverIndex(-1);
      if (nextIndex !== rowHoverIndex) {
        setRowHoverIndex(nextIndex);
      }
    },
    [rowHoverIndex],
  );

  const [columnHoverIndex, setColumnHoverIndex] = React.useState(-1);
  function handleColumnHeaderMouseEnter(columnIndex) {
    setColumnHoverIndex(columnIndex);
    setRowHoverIndex(-1);
  }
  function handleColumnHeaderMouseLeave() {
    // $FlowFixMe - unable to get the state type from react-window
    if (gridRef.current && !gridRef.current.state.isScrolling) {
      setColumnHoverIndex(-1);
    }
  }

  const sortedIndices = React.useMemo(() => {
    let toSort = props.rows.map((r, i) => [r, i]);
    const index = props.sortIndex;

    if (index !== null && index !== undefined && index !== -1) {
      const sortFn = props.columns[index].sortFn;
      const getValue = row => props.columns[index].mapDataToValue(row.data);
      if (props.sortDirection === SORT_DIRECTIONS.DESC) {
        toSort.sort((a, b) => sortFn(getValue(a[0]), getValue(b[0])));
      } else if (props.sortDirection === SORT_DIRECTIONS.ASC) {
        toSort.sort((a, b) => sortFn(getValue(b[0]), getValue(a[0])));
      }
    }

    return toSort.map(el => el[1]);
  }, [props.sortIndex, props.sortDirection, props.columns, props.rows]);

  const textQuery = React.useMemo(() => props.textQuery || '', [
    props.textQuery,
  ]);

  const filteredIndices = React.useMemo(() => {
    const set = new Set(props.rows.map((_, idx) => idx));
    Array.from(props.filters || new Set(), f => f).forEach(
      ([title, filter]) => {
        const columnIndex = props.columns.findIndex(c => c.title === title);
        const column = props.columns[columnIndex];
        if (!column) {
          return;
        }

        // start here after
        const filterFn = column.buildFilter(filter);
        Array.from(set).forEach(idx => {
          if (!filterFn(column.mapDataToValue(props.rows[idx].data))) {
            set.delete(idx);
          }
        });
      },
    );

    if (textQuery) {
      const stringishColumnIndices = [];
      for (let i = 0; i < props.columns.length; i++) {
        if (
          props.columns[i].kind === COLUMNS.CATEGORICAL ||
          props.columns[i].kind === COLUMNS.STRING
        ) {
          stringishColumnIndices.push(i);
        }
      }
      Array.from(set).forEach(idx => {
        const matches = stringishColumnIndices.some(cdx => {
          const column = props.columns[cdx];
          return column
            .mapDataToValue(props.rows[idx].data)
            .toLowerCase()
            .includes(textQuery);
        });

        if (!matches) {
          set.delete(idx);
        }
      });
    }

    return set;
  }, [props.filters, textQuery, props.columns, props.rows]);

  const rows = React.useMemo(() => {
    return sortedIndices
      .filter(idx => filteredIndices.has(idx))
      .map(idx => props.rows[idx]);
  }, [sortedIndices, filteredIndices, props.rows]);

  const isSelectable = props.batchActions ? !!props.batchActions.length : false;
  const isSelectedAll = React.useMemo(() => {
    if (!props.selectedRowIds) {
      return false;
    }
    return !!rows.length && props.selectedRowIds.size >= rows.length;
  }, [props.selectedRowIds, rows.length]);
  const isSelectedIndeterminate = React.useMemo(() => {
    if (!props.selectedRowIds) {
      return false;
    }
    return (
      !!props.selectedRowIds.size && props.selectedRowIds.size < rows.length
    );
  }, [props.selectedRowIds, rows.length]);
  const isRowSelected = React.useCallback(
    id => {
      if (props.selectedRowIds) {
        return props.selectedRowIds.has(id);
      }
      return false;
    },
    [props.selectedRowIds],
  );
  const handleSelectMany = React.useCallback(() => {
    if (props.onSelectMany) {
      props.onSelectMany(rows);
    }
  }, [rows, props.onSelectMany]);
  const handleSelectNone = React.useCallback(() => {
    if (props.onSelectNone) {
      props.onSelectNone();
    }
  }, [props.onSelectNone]);
  const handleSelectOne = React.useCallback(
    row => {
      if (props.onSelectOne) {
        props.onSelectOne(row);
      }
    },
    [props.onSelectOne],
  );

  const handleSort = React.useCallback(
    columnIndex => {
      if (props.onSort) {
        props.onSort(columnIndex);
      }
    },
    [props.onSort],
  );

  const itemData = React.useMemo(() => {
    return {
      columnHoverIndex,
      rowHoverIndex,
      isRowSelected,
      isSelectable,
      onHoverRow: handleRowHover,
      onSelectOne: handleSelectOne,
      columns: props.columns,
      rows,
      textQuery,
    };
  }, [
    handleRowHover,
    columnHoverIndex,
    isRowSelected,
    isSelectable,
    rowHoverIndex,
    rows,
    props.columns,
    handleSelectOne,
    textQuery,
  ]);

  return (
    <React.Fragment>
      <MeasureColumnWidths
        columns={props.columns}
        rows={props.rows}
        widths={widths}
        isSelectable={isSelectable}
        onWidthsChange={handleWidthsChange}
      />
      <AutoSizer>
        {({height, width}) => (
          <HeaderContext.Provider
            value={{
              columns: props.columns,
              columnHoverIndex,
              filters: props.filters,
              isScrollingX,
              isSelectable,
              isSelectedAll,
              isSelectedIndeterminate,
              onMouseEnter: handleColumnHeaderMouseEnter,
              onMouseLeave: handleColumnHeaderMouseLeave,
              onSelectMany: handleSelectMany,
              onSelectNone: handleSelectNone,
              onSort: handleSort,
              rowActions: props.rowActions || [],
              rowHeight,
              rowHoverIndex,
              rows,
              scrollLeft,
              sortDirection: props.sortDirection || null,
              sortIndex:
                typeof props.sortIndex === 'number' ? props.sortIndex : -1,
              widths: normalizedWidths,
            }}
          >
            <VariableSizeGrid
              // eslint-disable-next-line flowtype/no-weak-types
              ref={(gridRef: any)}
              overscanRowCount={10}
              innerElementType={InnerTableElement}
              columnCount={props.columns.length}
              columnWidth={columnIndex => normalizedWidths[columnIndex]}
              height={height}
              // plus one to account for additional header row
              rowCount={rows.length + 1}
              rowHeight={rowIndex =>
                rowIndex === 0 ? HEADER_ROW_HEIGHT : rowHeight
              }
              width={width}
              itemData={itemData}
              onScroll={handleScroll}
              style={{
                ...theme.borders.border200,
                borderColor: theme.colors.mono500,
              }}
            >
              {CellPlacementMemo}
            </VariableSizeGrid>
          </HeaderContext.Provider>
        )}
      </AutoSizer>
    </React.Fragment>
  );
}
