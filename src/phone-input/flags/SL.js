/*
Copyright (c) 2018-2019 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
// @flow
// BASEUI-GENERATED-FLAG-COMPONENT
// DO NOT EDIT THIS FILE DIRECTLY

import * as React from 'react';

export default function FlagSL(props: {width: string}) {
  return (
    <svg viewBox="0 0 21 15" width={props.width}>
      <defs>
        <linearGradient id="SLa" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#FFF" />
          <stop offset="100%" stopColor="#F0F0F0" />
        </linearGradient>
        <linearGradient id="SLb" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#35CE4F" />
          <stop offset="100%" stopColor="#2AB441" />
        </linearGradient>
        <linearGradient id="SLc" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#1C87DB" />
          <stop offset="100%" stopColor="#1175C4" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#SLa)" d="M0 0h21v15H0z" />
        <path fill="url(#SLb)" d="M0 0h21v5H0z" />
        <path fill="url(#SLc)" d="M0 10h21v5H0z" />
        <path fill="url(#SLa)" d="M0 5h21v5H0z" />
      </g>
    </svg>
  );
}
