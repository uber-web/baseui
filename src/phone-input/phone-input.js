/*
Copyright (c) 2018 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
// @flow

import React, {useState, useRef} from 'react';
import {List, AutoSizer} from 'react-virtualized';

import {Block} from '../block/index.js';
import {countries} from './countries.js';
import {Input} from '../input/index.js';
import {Select, StyledDropdownListItem} from '../select/index.js';
import {styled} from '../styles/index.js';
import {StyledList} from '../menu/index.js';
import Flag from './flag.js';

const Container = styled(StyledList, ({$height = '400px'}) => {
  return {height: $height};
});

const ListItem = styled(StyledDropdownListItem, {
  paddingTop: 0,
  paddingBottom: 0,
  paddingLeft: 0,
  paddingRight: 0,
  display: 'flex',
  alignItems: 'center',
});

function VirtualList(props) {
  return (
    <Container $ref={props.$ref} $height={props.maxDropdownHeight}>
      <AutoSizer>
        {({height, width}) => {
          return (
            <List
              role={props.role}
              height={height}
              width={width}
              rowCount={props.children.length}
              rowHeight={32}
              rowRenderer={({index, key, style}) => {
                // resetMenu and getItemLabel should not end up on native html elements
                const {resetMenu, getItemLabel, ...rest} = props.children[
                  index
                ].props;
                return (
                  <ListItem key={key} style={style} {...rest}>
                    <Block paddingLeft="8px" display="flex" alignItems="center">
                      <Flag
                        iso2={props.children[index].props.item.iso2}
                        size="compact"
                      />
                    </Block>
                    <Block paddingLeft="16px">
                      {props.children[index].props.item.name}
                    </Block>
                    <Block marginLeft="auto" paddingRight="8px">
                      +{props.children[index].props.item.dialCode}
                    </Block>
                  </ListItem>
                );
              }}
            />
          );
        }}
      </AutoSizer>
    </Container>
  );
}

export function StatefulPhoneInput(props) {
  const {size, initialCountryCode = 'US'} = props;
  const initialCountry =
    countries.find(c => c.iso2 === initialCountryCode) ||
    countries.find(c => c.iso2 === 'US');
  const [phoneNumber, setPhoneNumber] = useState(
    `+${initialCountry.dialCode} `,
  );
  const [country, setCountry] = useState(initialCountry);
  return (
    <PhoneInput
      size={size}
      inputValue={phoneNumber}
      country={country}
      initialCountry={country}
      onInputChange={event => {
        setPhoneNumber(event.target.value);
        if (props.onChange) props.onChange(phoneNumber);
      }}
      onCountryChange={event => {
        // Replace (if possible) the current country dialcode
        const newPhoneNumber = phoneNumber.replace(
          `+${country.dialCode}`,
          `+${event.option.dialCode}`,
        );
        // If the replacement did nothing, just return the new dialcode
        setPhoneNumber(
          phoneNumber === newPhoneNumber
            ? `+${event.option.dialCode} `
            : newPhoneNumber,
        );
        setCountry(event.option);
      }}
    />
  );
}

export function PhoneInput(props) {
  const {
    inputValue,
    country,
    onInputChange,
    onCountryChange,
    size,
    maxDropdownHeight = '400px',
    maxDropdownWidth = '400px',
  } = props;
  const inputRef = useRef(null);
  return (
    <Input
      size={size}
      inputRef={inputRef}
      value={inputValue}
      onChange={onInputChange}
      overrides={{
        Input: {
          style: {
            paddingLeft: '4px',
          },
        },
        Before: {
          component: function Before() {
            return (
              <Select
                size={size}
                value={[country]}
                onChange={(...args) => {
                  inputRef.current.focus();
                  onCountryChange(...args);
                }}
                options={countries}
                labelKey="name"
                valueKey="iso2"
                clearable={false}
                searchable={false}
                maxDropdownHeight={maxDropdownHeight}
                getValueLabel={({option}) => {
                  return <Flag iso2={option.iso2} size={size} />;
                }}
                overrides={{
                  ValueContainer: {
                    style: {
                      width: {
                        compact: '34px',
                        default: '42px',
                        large: '50px',
                      }[size],
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
                    component: VirtualList,
                    props: {
                      maxDropdownHeight: maxDropdownHeight,
                    },
                  },
                }}
              />
            );
          },
        },
      }}
    />
  );
}
