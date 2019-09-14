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
export default function SvgAccordian(props) {
  const [, theme] = useStyletron();
  const colors = getFillColors(theme);
  return (
    <svg width={232} height={145} fill="none" {...props}>
      <path fill={colors[1]} d="M61 63h110v35H61z" />
      <path
        fill={colors[0]}
        d="M61 47h110v16H61zM61 29h110v16H61zM61 100h110v16H61z"
      />
      <path
        d="M161.923 57l-2.198-2.25h4.396L161.923 57zM161.923 109l-2.198-2.25h4.396l-2.198 2.25zM161.923 39l-2.198-2.25h4.396L161.923 39z"
        fill={colors[2]}
      />
    </svg>
  );
}
