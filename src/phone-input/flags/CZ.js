/*
Copyright (c) 2018-2019 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
// @flow
// BASEUI-GENERATED-FLAG-COMPONENT
// DO NOT EDIT THIS FILE DIRECTLY

import * as React from 'react';

export default function FlagCZ(props: {width: string}) {
  const {width, ...restProps} = props;
  return (
    <svg viewBox="0 0 21 15" width={width} {...restProps}>
      <defs>
        <linearGradient id="CZa" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#FFF" />
          <stop offset="100%" stopColor="#F0F0F0" />
        </linearGradient>
        <linearGradient id="CZb" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#E8252A" />
          <stop offset="100%" stopColor="#D7151A" />
        </linearGradient>
        <linearGradient id="CZc" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#17579E" />
          <stop offset="100%" stopColor="#10457F" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#CZa)" d="M0 0h21v15H0z" />
        <path fill="url(#CZb)" d="M0 7h21v8H0z" />
        <path fill="url(#CZa)" d="M0 0h21v7H0z" />
        <path fill="url(#CZc)" d="M0 0l10 7.5L0 15z" />
      </g>
    </svg>
  );
}
