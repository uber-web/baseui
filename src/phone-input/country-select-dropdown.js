/*
Copyright (c) 2018-2019 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
// @flow

import * as React from 'react';
import {List, AutoSizer, ArrowKeyStepper} from 'react-virtualized';
import {LocaleContext} from '../locale/index.js';
import {LIST_ROW_HEIGHT} from './constants.js';
import defaultProps from './default-props.js';
import {
  StyledFlag,
  StyledCountrySelectDropdownContainer as DefaultContainer,
  StyledCountrySelectDropdownListItem as DefaultListItem,
  StyledCountrySelectDropdownFlagColumn as DefaultFlagColumn,
  StyledCountrySelectDropdownNameColumn as DefaultNameColumn,
  StyledCountrySelectDropdownDialcodeColumn as DefaultDialcodeColumn,
  StyledPopoverContentContainer as DefaultPopoverContentContainer,
} from './styled-components.js';
import {default as DefaultFilterInput} from './filter-input.js';
import {getOverrides} from '../helpers/overrides.js';
import {StyledEmptyState} from '../menu/index.js';

import type {CountrySelectDropdownPropsT} from './types.js';
import type {LocaleT} from '../locale/types.js';

function calculateDropDownHeight(maxDropdownHeight, rowCount, rowHeight) {
  //set height to `auto` when we don't have any options
  if (!rowCount) {
    return `auto`;
  }
  const height = parseInt(maxDropdownHeight);
  const actualHeight = rowCount * rowHeight;
  return Math.min(actualHeight, height) + 'px';
}

CountrySelectDropdown.defaultProps = {
  maxDropdownHeight: defaultProps.maxDropdownHeight,
  overrides: {},
};

export default function CountrySelectDropdown(
  props: CountrySelectDropdownPropsT,
) {
  const {
    innerRef,
    country,
    overrides,
    maxDropdownHeight,
    maxDropdownWidth,
    mapIsoToLabel,
    onFilter,
    options,
    enableFiltering,
    onItemSelect,
    focusSelect,
    selectKeyDownHandler,
    closeDropdownMenu,
    noResultsMsg,
  } = props;
  const handleKeydown = (event: KeyboardEvent) => {
    switch (event.key) {
      case 'ArrowUp':
        if (scrollIndex > 0) {
          setScrollIndex(scrollIndex - 1);
        }
        event.preventDefault();
        break;
      case 'ArrowDown':
        if (scrollIndex < options.length - 1) {
          setScrollIndex(scrollIndex + 1);
        }
        event.preventDefault();
        break;
      case 'Enter':
        onItemSelect({item: options[scrollIndex]});
        break;
      case 'Tab':
        if (__BROWSER__) {
          if (!enableFiltering) {
            selectKeyDownHandler(event);
            return;
          }
          //our filter input is focused
          if (document.activeElement === filterRef.current) {
            if (event.shiftKey) {
              //`shift+tab` pressed
              focusSelect();
              closeDropdownMenu();
              event.preventDefault();
            } else {
              //just `tab` pressed
              focusSelect();
              selectKeyDownHandler(event);
            }
          } else {
            //filter input is not focused
            if (event.shiftKey) {
              //`shift+tab` pressed
              selectKeyDownHandler(event);
            } else {
              //just `tab` pressed
              filterRef.current.focus();
              event.preventDefault();
            }
          }
        }
        break;
      case 'Escape':
        focusSelect();
        selectKeyDownHandler(event);
        event.preventDefault();
        break;
    }
  };
  const [scrollIndex, setScrollIndex] = React.useState(
    options.findIndex(option => option.id === country.id),
  );
  const filterRef = React.useRef<React.ElementRef<*>>(null);
  React.useEffect(() => {
    if (__BROWSER__) {
      document.addEventListener('keydown', handleKeydown);
    }
    return () => {
      if (__BROWSER__) {
        document.removeEventListener('keydown', handleKeydown);
      }
    };
  }, [scrollIndex]);

  //overrides
  const [PopoverContentContainer, popoverContentContainerProps] = getOverrides(
    overrides.PopoverContentContainer,
    DefaultPopoverContentContainer,
  );
  const [Container, containerProps] = getOverrides(
    overrides.CountrySelectDropdown,
    DefaultContainer,
  );
  const [ListItem, listItemProps] = getOverrides(
    overrides.CountrySelectDropdownListItem,
    DefaultListItem,
  );
  const [FlagColumn, flagColumnProps] = getOverrides(
    overrides.CountrySelectDropdownFlagColumn,
    DefaultFlagColumn,
  );
  const [NameColumn, nameColumnProps] = getOverrides(
    overrides.CountrySelectDropdownNameColumn,
    DefaultNameColumn,
  );
  const [Dialcode, dialcodeProps] = getOverrides(
    overrides.CountrySelectDropdownDialcodeColumn,
    DefaultDialcodeColumn,
  );
  const [FilterInput, filterInputProps] = getOverrides(
    overrides.FilterInput,
    DefaultFilterInput,
  );
  const [EmptyState, emptyStateProps] = getOverrides(
    overrides.EmptyState,
    StyledEmptyState,
  );

  return (
    <PopoverContentContainer
      $width={maxDropdownWidth}
      ref={innerRef}
      {...popoverContentContainerProps}
    >
      {enableFiltering && (
        <FilterInput
          inputRef={filterRef}
          onChange={event => {
            onFilter(event);
            setScrollIndex(0);
          }}
          {...filterInputProps}
        />
      )}
      <Container
        $height={calculateDropDownHeight(
          maxDropdownHeight,
          options.length,
          LIST_ROW_HEIGHT,
        )}
        {...containerProps}
      >
        {options.length ? (
          <AutoSizer>
            {({height, width}) => (
              <ArrowKeyStepper
                rowCount={options.length}
                columnCount={1}
                mode={'cells'}
                scrollToRow={scrollIndex}
              >
                {({onSectionRendered, scrollToRow}) => (
                  <List
                    role="listbox"
                    height={height}
                    width={width}
                    rowCount={options.length}
                    rowHeight={LIST_ROW_HEIGHT}
                    onSectionRendered={onSectionRendered}
                    scrollToIndex={scrollToRow}
                    rowRenderer={({index, key, style, isScrolling}) => {
                      const {id, label, dialCode} = options[index];
                      return (
                        <ListItem
                          $isHighlighted={scrollToRow === index}
                          key={key}
                          style={style}
                          {...listItemProps}
                          data-e2e="country-select-list-item"
                          data-iso={id}
                          onMouseEnter={() => {
                            setScrollIndex(index);
                          }}
                          onClick={() => {
                            onItemSelect({item: options[index]});
                          }}
                        >
                          <FlagColumn {...flagColumnProps}>
                            <StyledFlag iso={id} />
                          </FlagColumn>
                          <NameColumn {...nameColumnProps}>
                            {mapIsoToLabel ? mapIsoToLabel(id) : label}
                          </NameColumn>
                          <Dialcode {...dialcodeProps}>{dialCode}</Dialcode>
                        </ListItem>
                      );
                    }}
                  />
                )}
              </ArrowKeyStepper>
            )}
          </AutoSizer>
        ) : (
          <LocaleContext.Consumer>
            {(locale: LocaleT) => (
              <EmptyState {...emptyStateProps}>
                {noResultsMsg || locale.menu.noResultsMsg}
              </EmptyState>
            )}
          </LocaleContext.Consumer>
        )}
      </Container>
    </PopoverContentContainer>
  );
}
