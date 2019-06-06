/*
Copyright (c) 2018-2019 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
// @flow

import React from 'react';
import {List, AutoSizer} from 'react-virtualized';

import {SIZE, DEFAULT_MAX_DROPDOWN_HEIGHT} from './constants.js';
import {
  StyledFlag,
  StyledCountrySelectDropdownContainer as DefaultContainer,
  StyledCountrySelectDropdownListItem as DefaultListItem,
  StyledCountrySelectDropdownFlagColumn as DefaultFlagColumn,
  StyledCountrySelectDropdownNameColumn as DefaultNameColumn,
  StyledCountrySelectDropdownDialcodeColumn as DefaultDialcodeColumn,
} from './styled-components.js';
import {getOverrides} from '../helpers/overrides.js';

import type {CountrySelectDropdownPropsT} from './types.js';

// $FlowFixMe
const CountrySelectDropdown = React.forwardRef(
  (props: CountrySelectDropdownPropsT, ref) => {
    const {
      children,
      maxDropdownHeight = DEFAULT_MAX_DROPDOWN_HEIGHT,
      mapIsoToLabel,
      country,
      overrides = {},
    } = props;
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
    return (
      <Container ref={ref} $height={maxDropdownHeight} {...containerProps}>
        <AutoSizer>
          {({height, width}) => {
            return (
              <List
                role="listbox"
                height={height}
                width={width}
                rowCount={children.length}
                rowHeight={32}
                scrollToIndex={children.findIndex(
                  opt => opt.props.item.id === country.id,
                )}
                rowRenderer={({index, key, style}) => {
                  // resetMenu and getItemLabel should not end up on native html elements
                  const {resetMenu, getItemLabel, ...rest} = children[
                    index
                  ].props;
                  return (
                    <ListItem
                      key={key}
                      style={style}
                      {...rest}
                      {...listItemProps}
                    >
                      <FlagColumn {...flagColumnProps}>
                        <StyledFlag
                          iso={children[index].props.item.id}
                          $size={SIZE.compact}
                        />
                      </FlagColumn>
                      <NameColumn {...nameColumnProps}>
                        {mapIsoToLabel
                          ? mapIsoToLabel(props.children[index].props.item.id)
                          : children[index].props.item.label}
                      </NameColumn>
                      <Dialcode {...dialcodeProps}>
                        {children[index].props.item.dialCode}
                      </Dialcode>
                    </ListItem>
                  );
                }}
              />
            );
          }}
        </AutoSizer>
      </Container>
    );
  },
);

export default CountrySelectDropdown;
