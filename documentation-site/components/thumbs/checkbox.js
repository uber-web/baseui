/*
Copyright (c) 2018-2019 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
/* eslint-disable flowtype/require-valid-file-annotation */

import React from 'react';
import {useStyletron} from 'baseui/styles';
import getFillColors from './getFillColors.js';

export default function SvgCheckbox() {
  const [, theme] = useStyletron();
  const colors = getFillColors(theme);
  return (
    <svg width={232} height={145} fill="none">
      <path fill={colors[0]} d="M62 46h14v14H62z" />
      <path fill={colors[1]} d="M90 47h65v12H90z" />
      <path fill={colors[2]} d="M62 66h14v14H62z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M73.567 71.293L72.274 70l-4.416 4.416-2.565-2.565L64 73.144l3.232 3.232.002-.002.625.626 5.708-5.707z"
        fill={colors[0]}
      />
      <path fill={colors[1]} d="M90 67h57v12H90z" />
      <path fill={colors[0]} d="M62 86h14v14H62z" />
      <path fill={colors[1]} d="M90 87h80v12H90z" />
    </svg>
  );
}
