/*
Copyright (c) 2018 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
// @flow
import * as React from 'react';
import {StyledOptionContent} from './styled-components';
import {StatefulMenu} from '../menu';
import type {DropDownPropsT} from './types';
import {getOverrides, mergeOverrides} from '../helpers/overrides';

export default class SelectDropDown extends React.Component<DropDownPropsT> {
  getSharedProps() {
    const {
      error,
      isLoading,
      multi,
      required,
      size,
      searchable,
      type,
    } = this.props;
    return {
      $error: error,
      $isLoading: isLoading,
      $multi: multi,
      $required: required,
      $searchable: searchable,
      $size: size,
      $type: type,
    };
  }
  // eslint-disable-next-line flowtype/no-weak-types
  getItemLabel = (option: {[string]: any}) => {
    const {getOptionLabel, overrides = {}, value, valueKey} = this.props;

    const [OptionContent, optionContentProps] = getOverrides(
      overrides.OptionContent,
      StyledOptionContent,
    );

    let $selected;
    if (Array.isArray(value)) {
      $selected = value.find(
        selected => selected && selected[valueKey] === option[valueKey],
      );
    } else {
      $selected = value[valueKey] === option[valueKey];
    }

    const optionSharedProps = {
      $selected,
      $disabled: option.disabled,
      $isHighlighted: option.isHighlighted,
    };
    return (
      <OptionContent
        aria-readonly={option.disabled}
        aria-selected={!!$selected}
        key={option[valueKey]}
        {...this.getSharedProps()}
        {...optionSharedProps}
        {...optionContentProps}
      >
        {getOptionLabel({option, optionState: optionSharedProps})}
      </OptionContent>
    );
  };

  render() {
    // TODO: Add no-results and loading states to menu
    const {
      maxDropdownHeight,
      multi,
      onItemSelect,
      options = [],
      overrides = {},
      size,
    } = this.props;
    return (
      <StatefulMenu
        onItemSelect={onItemSelect}
        items={options}
        size={size}
        overrides={mergeOverrides(
          {
            List: {
              style: ({$theme: {sizing}}) => ({
                maxHeight: maxDropdownHeight,
                marginTop: sizing.scale300,
                marginBottom: '0',
                marginLeft: sizing.scale300,
                marginRight: sizing.scale300,
              }),
              props: {
                role: 'listbox',
                'aria-multiselectable': multi,
              },
            },
            Option: {
              props: {
                getItemLabel: this.getItemLabel,
                // TODO: figure out why the onClick handler is not
                // triggered without this temporary fix
                onMouseDown: e => {
                  e.preventDefault();
                },
              },
            },
          },
          {
            List: overrides.DropDown,
            Option: overrides.DropDownOption,
          },
        )}
      />
    );
  }
}
