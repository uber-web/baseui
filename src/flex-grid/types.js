/*
Copyright (c) 2018-2019 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
// @flow

import type {BlockPropsT, ResponsiveT, ScaleT} from '../block/types.js';

export type FlexGridPropsT = BlockPropsT & {
  /** Number of equal-width columns to allow for */
  flexGridColumnCount?: ResponsiveT<number>,
  /** Grid gap between columns */
  flexGridColumnGap?: ResponsiveT<ScaleT>,
  /** Grid gap between rows */
  flexGridRowGap?: ResponsiveT<ScaleT>,
};

export type FlexGridItemPropsT = FlexGridPropsT;
