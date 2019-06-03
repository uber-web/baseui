/*
Copyright (c) 2018-2019 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
// @flow
// BASEUI-GENERATED-FLAG-COMPONENT
// DO NOT EDIT THIS FILE DIRECTLY

import * as React from 'react';

export default function FlagCW(props: {width: string}) {
  const {width, ...restProps} = props;
  return (
    <svg viewBox="0 0 21 15" width={width} {...restProps}>
      <defs>
        <linearGradient id="CWa" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#FFF" />
          <stop offset="100%" stopColor="#F0F0F0" />
        </linearGradient>
        <linearGradient id="CWb" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#0543A8" />
          <stop offset="100%" stopColor="#00307D" />
        </linearGradient>
        <linearGradient id="CWc" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#FCC747" />
          <stop offset="100%" stopColor="#FEC539" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#CWa)" d="M0 0h21v15H0z" />
        <path fill="url(#CWb)" d="M0 0h21v15H0z" />
        <path fill="url(#CWc)" d="M0 10h21v2H0z" />
        <path
          fill="url(#CWa)"
          d="M6.5 6.267l-1.176.851.447-1.381-1.173-.855 1.451-.003L6.5 3.5l.45 1.38 1.452.002-1.173.855.447 1.381zM3 3.575l-.882.639.335-1.036-.88-.642 1.089-.001L3 1.5l.338 1.035 1.089.001-.88.642.335 1.036z"
        />
      </g>
    </svg>
  );
}
