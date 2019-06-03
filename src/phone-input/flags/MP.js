/*
Copyright (c) 2018-2019 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
// @flow
// BASEUI-GENERATED-FLAG-COMPONENT
// DO NOT EDIT THIS FILE DIRECTLY

import * as React from 'react';

export default function FlagMP(props: {width: string}) {
  const {width, ...restProps} = props;
  return (
    <svg viewBox="0 0 21 15" width={width} {...restProps}>
      <defs>
        <linearGradient id="MPa" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#FFF" />
          <stop offset="100%" stopColor="#F0F0F0" />
        </linearGradient>
        <linearGradient id="MPb" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#1E8BD6" />
          <stop offset="100%" stopColor="#1074BA" />
        </linearGradient>
        <linearGradient id="MPc" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#A9A7A9" />
          <stop offset="100%" stopColor="#8C8A8C" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#MPa)" d="M0 0h21v15H0z" />
        <path fill="url(#MPb)" d="M0 0h21v15H0z" />
        <path
          fill="url(#MPa)"
          fillRule="nonzero"
          d="M10.5 12.5a5 5 0 1 0 0-10 5 5 0 0 0 0 10zm0-1a4 4 0 1 1 0-8 4 4 0 0 1 0 8z"
        />
        <path
          fill="url(#MPc)"
          d="M8.938 5.997C8.972 5.447 9.443 5 9.999 5h1.002c.552 0 1.027.453 1.061.997l.376 6.006a.927.927 0 0 1-.947.997H9.509a.935.935 0 0 1-.947-.997l.376-6.006z"
        />
        <path
          fill="url(#MPa)"
          d="M10.5 9.515l-2.057 1.467.759-2.41-2.03-1.504 2.526-.022.802-2.396.802 2.396 2.527.022-2.03 1.504.758 2.41z"
        />
      </g>
    </svg>
  );
}
