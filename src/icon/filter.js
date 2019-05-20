/*
Copyright (c) 2018-2019 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
// @flow
// BASEUI-GENERATED-REACT-ICON
// DO NOT EDIT THIS FILE DIRECTLY, SEE README.md
import * as React from 'react';
import Icon from './icon.js';
import type {IconPropsT} from './types.js';
import {ThemeContext} from '../styles/theme-provider.js';

export default function Filter(props: IconPropsT) {
  return (
    <ThemeContext.Consumer>
      {theme =>
        theme.icons && theme.icons.Filter ? (
          <theme.icons.Filter title="Filter" viewBox="0 0 24 24" {...props} />
        ) : (
          <Icon title="Filter" viewBox="0 0 24 24" {...props}>
            <rect x="7" y="11" width="10" height="2" rx="1" />
            <rect x="4" y="7" width="16" height="2" rx="1" />
            <rect x="10" y="15" width="4" height="2" rx="1" />
          </Icon>
        )
      }
    </ThemeContext.Consumer>
  );
}
