/*
Copyright (c) 2018-2019 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
// @flow
// BASEUI-GENERATED-FLAG-COMPONENT
// DO NOT EDIT THIS FILE DIRECTLY

import * as React from 'react';

export default function FlagAR(props: {width: string}) {
  const {width, ...restProps} = props;
  return (
    <svg viewBox="0 0 21 15" width={width} {...restProps}>
      <defs>
        <linearGradient id="ARa" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#FFF" />
          <stop offset="100%" stopColor="#F0F0F0" />
        </linearGradient>
        <linearGradient id="ARb" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#88BBE8" />
          <stop offset="100%" stopColor="#76ADDD" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#ARa)" d="M0 0h21v15H0z" />
        <path fill="url(#ARb)" d="M0 0h21v5H0zM0 10h21v5H0z" />
        <path fill="url(#ARa)" d="M0 5h21v5H0z" />
        <path
          fill="#DB7A2C"
          fillRule="nonzero"
          d="M10.5 9.5a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"
        />
        <circle cx="10.5" cy="7.5" r="1.5" fill="#F4B32E" />
      </g>
    </svg>
  );
}
