/*
Copyright (c) 2018-2019 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
// @flow
// BASEUI-GENERATED-FLAG-COMPONENT
// DO NOT EDIT THIS FILE DIRECTLY

import * as React from 'react';

export default function FlagHU(props: {width: string}) {
  const {width, ...restProps} = props;
  return (
    <svg viewBox="0 0 21 15" width={width} {...restProps}>
      <defs>
        <linearGradient id="HUa" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#FFF" />
          <stop offset="100%" stopColor="#F0F0F0" />
        </linearGradient>
        <linearGradient id="HUb" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#E03D52" />
          <stop offset="100%" stopColor="#CD2A3F" />
        </linearGradient>
        <linearGradient id="HUc" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#5A9165" />
          <stop offset="100%" stopColor="#44704D" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#HUa)" d="M0 0h21v15H0z" />
        <path fill="url(#HUb)" d="M0 0h21v5H0z" />
        <path fill="url(#HUc)" d="M0 10h21v5H0z" />
        <path fill="url(#HUa)" d="M0 5h21v5H0z" />
      </g>
    </svg>
  );
}
