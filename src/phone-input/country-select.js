/*
Copyright (c) 2018-2019 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
// @flow

import React from 'react';

import {StyledRoot, StyledFlag} from './styled-components.js';
import {
  SIZE,
  countries,
  DEFAULT_MAX_DROPDOWN_HEIGHT,
  DEFAULT_MAX_DROPDOWN_WIDTH,
} from './constants.js';
import CountrySelectDropdown from './country-select-dropdown.js';
import {Select as DefaultSelect} from '../select/index.js';
import {getOverrides, mergeOverrides} from '../helpers/overrides.js';

import type {CountrySelectPropsT} from './types.js';

export default function CountrySelect(props: CountrySelectPropsT) {
  const {
    countryValue,
    inputRef,
    onCountryChange = event => {},
    size = SIZE.default,
    maxDropdownWidth = DEFAULT_MAX_DROPDOWN_WIDTH,
    maxDropdownHeight = DEFAULT_MAX_DROPDOWN_HEIGHT,
    mapIsoToLabel,
    overrides = {},
  } = props;
  const baseOverrides = {
    Root: {
      component: StyledRoot,
      props: {size},
    },
    ControlContainer: {
      style: props => {
        if (!props.$isFocused && !props.$isPseudoFocused) {
          return {
            backgroundColor: 'transparent',
            borderColor: 'transparent',
          };
        }
      },
    },
    IconsContainer: {
      style: {
        paddingRight: '0',
      },
    },
    SingleValue: {
      style: {
        display: 'flex',
        alignItems: 'center',
      },
    },
    DropdownContainer: {
      style: {
        width: maxDropdownWidth,
        maxWidth: 'calc(100vw - 10px)',
      },
    },
    Dropdown: {
      component: CountrySelectDropdown,
      props: {
        countryValue: countryValue,
        maxDropdownHeight: maxDropdownHeight,
        mapIsoToLabel: mapIsoToLabel,
        overrides: {
          CountrySelectDropdown: overrides.CountrySelectDropdown,
          CountrySelectDropdownListItem:
            overrides.CountrySelectDropdownListItem,
          CountrySelectDropdownFlagColumn:
            overrides.CountrySelectDropdownFlagColumn,
          CountrySelectDropdownNameColumn:
            overrides.CountrySelectDropdownNameColumn,
          CountrySelectDropdownDialcodeColumn:
            overrides.CountrySelectDropdownDialcodeColumn,
        },
      },
    },
  };
  const [Select, selectProps] = getOverrides(
    overrides.CountrySelect,
    DefaultSelect,
  );
  const selectOverrides = mergeOverrides(baseOverrides, overrides);
  return (
    <Select
      size={size}
      value={[countryValue]}
      onChange={event => {
        // After choosing a country, shift focus to the text input
        if (inputRef && inputRef.current) {
          inputRef.current.focus();
        }
        onCountryChange(event);
      }}
      options={countries}
      clearable={false}
      searchable={false}
      getValueLabel={({option}) => {
        return option.id ? (
          <StyledFlag iso2={String(option.id)} $size={size} />
        ) : null;
      }}
      overrides={selectOverrides}
      {...selectProps}
    />
  );
}
