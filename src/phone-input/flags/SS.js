/*
Copyright (c) 2018-2019 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
// @flow
// BASEUI-GENERATED-FLAG-COMPONENT
// DO NOT EDIT THIS FILE DIRECTLY

import * as React from 'react';

export default function FlagSS(props: {width: string}) {
  const {width, ...restProps} = props;
  return (
    <svg viewBox="0 0 21 15" width={width} {...restProps}>
      <defs>
        <linearGradient id="SSa" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#FFF" />
          <stop offset="100%" stopColor="#F0F0F0" />
        </linearGradient>
        <linearGradient id="SSb" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#262626" />
          <stop offset="100%" stopColor="#0D0D0D" />
        </linearGradient>
        <linearGradient id="SSc" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#E22A32" />
          <stop offset="100%" stopColor="#D61C24" />
        </linearGradient>
        <linearGradient id="SSd" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#2CA244" />
          <stop offset="100%" stopColor="#218736" />
        </linearGradient>
        <linearGradient id="SSe" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#185AC6" />
          <stop offset="100%" stopColor="#104CAD" />
        </linearGradient>
        <linearGradient id="SSf" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#FDE14A" />
          <stop offset="100%" stopColor="#FCDC34" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#SSa)" d="M0 0h21v15H0z" />
        <path fill="url(#SSb)" d="M0 0h21v4H0z" />
        <path fill="url(#SSc)" d="M0 5h21v5H0z" />
        <path fill="url(#SSa)" d="M0 4h21v1H0z" />
        <path fill="url(#SSd)" d="M0 11h21v4H0z" />
        <path fill="url(#SSa)" d="M0 10h21v1H0z" />
        <path fill="url(#SSe)" d="M0 0l10 7.5L0 15z" />
        <path
          fill="url(#SSf)"
          d="M3.836 7.987l-.683 1.28-.205-1.437-1.429-.254 1.304-.639-.2-1.437 1.01 1.042 1.306-.634-.68 1.283 1.007 1.046z"
        />
      </g>
    </svg>
  );
}
