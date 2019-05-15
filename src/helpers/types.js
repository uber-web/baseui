/*
Copyright (c) 2018-2019 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
// @flow
import * as React from 'react';
import type {ThemeT} from '../styles/types.js';

export type BaseProviderPropsT = {
  /** Children element to be rendered. Normally the BaseProvider
   should be added at the top level of an application. */
  children: ?React.Node,
  /** The base theme to be used in the application. */
  theme: ThemeT,
};
