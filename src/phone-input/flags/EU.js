/*
Copyright (c) 2018-2019 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
// @flow
// BASEUI-GENERATED-FLAG-COMPONENT
// DO NOT EDIT THIS FILE DIRECTLY

import * as React from 'react';

export default function FlagEU(props: {width: string}) {
  const {width, ...restProps} = props;
  return (
    <svg viewBox="0 0 21 15" width={width} {...restProps}>
      <defs>
        <linearGradient id="EUa" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#FFF" />
          <stop offset="100%" stopColor="#F0F0F0" />
        </linearGradient>
        <linearGradient id="EUb" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#043CAE" />
          <stop offset="100%" stopColor="#00339A" />
        </linearGradient>
        <linearGradient id="EUc" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#FFD429" />
          <stop offset="100%" stopColor="#FC0" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#EUa)" d="M0 0h21v15H0z" />
        <path fill="url(#EUb)" d="M0 0h21v15H0z" />
        <path
          fill="url(#EUc)"
          d="M10.5 3l-.707.207L10 2.5l-.207-.707L10.5 2l.707-.207L11 2.5l.207.707L10.5 3zm0 10l-.707.207L10 12.5l-.207-.707.707.207.707-.207L11 12.5l.207.707L10.5 13zm5-5l-.707.207L15 7.5l-.207-.707L15.5 7l.707-.207L16 7.5l.207.707L15.5 8zm-10 0l-.707.207L5 7.5l-.207-.707L5.5 7l.707-.207L6 7.5l.207.707L5.5 8zm9.33-2.5l-.707.207L14.33 5l-.207-.707.707.207.707-.207L15.33 5l.207.707-.707-.207zm-8.66 5l-.707.207L5.67 10l-.207-.707.707.207.707-.207L6.67 10l.207.707-.707-.207zM13 3.67l-.707.207.207-.707-.207-.707.707.207.707-.207-.207.707.207.707L13 3.67zm-5 8.66l-.707.207.207-.707-.207-.707.707.207.707-.207-.207.707.207.707L8 12.33zm6.83-1.83l-.707.207.207-.707-.207-.707.707.207.707-.207-.207.707.207.707-.707-.207zm-8.66-5l-.707.207L5.67 5l-.207-.707.707.207.707-.207L6.67 5l.207.707L6.17 5.5zM13 12.33l-.707.207.207-.707-.207-.707.707.207.707-.207-.207.707.207.707L13 12.33zM8 3.67l-.707.207.207-.707-.207-.707L8 2.67l.707-.207-.207.707.207.707L8 3.67z"
        />
      </g>
    </svg>
  );
}
