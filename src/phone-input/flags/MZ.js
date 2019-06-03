/*
Copyright (c) 2018-2019 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
// @flow
// BASEUI-GENERATED-FLAG-COMPONENT
// DO NOT EDIT THIS FILE DIRECTLY

import * as React from 'react';

export default function FlagMZ(props: {width: string}) {
  const {width, ...restProps} = props;
  return (
    <svg viewBox="0 0 21 15" width={width} {...restProps}>
      <defs>
        <linearGradient id="MZa" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#FFF" />
          <stop offset="100%" stopColor="#F0F0F0" />
        </linearGradient>
        <linearGradient id="MZb" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#FFE547" />
          <stop offset="100%" stopColor="#FCE032" />
        </linearGradient>
        <linearGradient id="MZc" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#118C81" />
          <stop offset="100%" stopColor="#0D7168" />
        </linearGradient>
        <linearGradient id="MZd" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#262626" />
          <stop offset="100%" stopColor="#0D0D0D" />
        </linearGradient>
        <linearGradient id="MZe" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#EF2147" />
          <stop offset="100%" stopColor="#D01739" />
        </linearGradient>
        <linearGradient id="MZf" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#FDE444" />
          <stop offset="100%" stopColor="#FCE032" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#MZa)" d="M0 0h21v15H0z" />
        <path fill="url(#MZb)" d="M0 11h21v4H0z" />
        <path fill="url(#MZc)" d="M0 0h21v4H0z" />
        <path fill="url(#MZa)" d="M0 4h21v7H0z" />
        <path fill="url(#MZd)" d="M0 5h21v5H0z" />
        <path fill="url(#MZe)" d="M0 0l10 7.5L0 15z" />
        <path
          fill="url(#MZf)"
          d="M3.5 8.456L2.03 9.523l.561-1.728-1.469-1.068h1.816L3.5 5l.562 1.727h1.816l-1.47 1.068.561 1.728z"
        />
      </g>
    </svg>
  );
}
