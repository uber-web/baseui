/*
Copyright (c) 2018-2019 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
/* THIS FILE IS AUTO-GENERATED. DO NOT MODIFY. */
/* eslint-disable flowtype/require-valid-file-annotation */
import React from 'react';
import {useStyletron} from 'baseui/styles';
import getFillColors from '../getFillColors.js';
export default function SvgDrawer(props) {
  const [, theme] = useStyletron();
  const colors = getFillColors(theme);
  return (
    <svg width={232} height={145} fill="none" {...props}>
      <path fill={colors[1]} d="M0 0h161v145H0z" />
      <path fill={colors[0]} d="M161 0h71v145h-71z" />
      <path
        d="M176.28 8.88L175.4 8l-2.76 2.8-2.76-2.8-.88.88 2.8 2.76-2.8 2.76.88.88 2.76-2.8 2.76 2.8.88-.88-2.8-2.76 2.8-2.76z"
        fill={colors[2]}
      />
    </svg>
  );
}
