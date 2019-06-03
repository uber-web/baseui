/*
Copyright (c) 2018-2019 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
// @flow
// BASEUI-GENERATED-FLAG-COMPONENT
// DO NOT EDIT THIS FILE DIRECTLY

import * as React from 'react';

export default function FlagBA(props: {width: string}) {
  const {width, ...restProps} = props;
  return (
    <svg viewBox="0 0 21 15" width={width} {...restProps}>
      <defs>
        <linearGradient id="BAa" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#FFF" />
          <stop offset="100%" stopColor="#F0F0F0" />
        </linearGradient>
        <linearGradient id="BAb" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#0B36B2" />
          <stop offset="100%" stopColor="#042993" />
        </linearGradient>
        <linearGradient id="BAc" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#FFD045" />
          <stop offset="100%" stopColor="#FECA2F" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#BAa)" d="M0 0h21v15H0z" />
        <path fill="url(#BAb)" d="M0 0h21v15H0z" />
        <path fill="url(#BAc)" d="M17 15V0H6.5z" />
        <path
          fill="url(#BAa)"
          d="M13 14l-.707.207.207-.707-.207-.707L13 13l.707-.207-.207.707.207.707zM11 11l-.707.207.207-.707-.207-.707L11 10l.707-.207-.207.707.207.707zM9 8l-.707.207L8.5 7.5l-.207-.707L9 7l.707-.207L9.5 7.5l.207.707zM7 5l-.707.207L6.5 4.5l-.207-.707L7 4l.707-.207L7.5 4.5l.207.707zM5 2l-.707.207L4.5 1.5 4.293.793 5 1l.707-.207L5.5 1.5l.207.707z"
        />
      </g>
    </svg>
  );
}
