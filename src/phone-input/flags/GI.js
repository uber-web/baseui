/*
Copyright (c) 2018-2019 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
// @flow
// BASEUI-GENERATED-FLAG-COMPONENT
// DO NOT EDIT THIS FILE DIRECTLY

import * as React from 'react';

export default function FlagGI(props: {width: string}) {
  const {width, ...restProps} = props;
  return (
    <svg viewBox="0 0 21 15" width={width} {...restProps}>
      <defs>
        <linearGradient id="GIa" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#FFF" />
          <stop offset="100%" stopColor="#F0F0F0" />
        </linearGradient>
        <linearGradient id="GIb" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#E71924" />
          <stop offset="100%" stopColor="#D6101B" />
        </linearGradient>
        <linearGradient id="GIc" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#EA1824" />
          <stop offset="100%" stopColor="#D6101B" />
        </linearGradient>
        <linearGradient id="GId" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#262626" />
          <stop offset="100%" stopColor="#0D0D0D" />
        </linearGradient>
        <linearGradient id="GIe" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#ECCE3E" />
          <stop offset="100%" stopColor="#D9BC2D" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#GIa)" d="M0 0h21v15H0z" />
        <path fill="url(#GIa)" d="M0 0h21v10H0z" />
        <path fill="url(#GIb)" d="M0 10h21v5H0z" />
        <path
          fill="url(#GIc)"
          d="M9 6H8V4.49A.495.495 0 0 0 7.495 4h-.99A.49.49 0 0 0 6 4.49V8L5 9h11l-1-1V4.49a.495.495 0 0 0-.505-.49h-.99a.49.49 0 0 0-.505.49V6h-1V3.49a.49.49 0 0 0-.495-.49h-2.01A.49.49 0 0 0 9 3.49V6z"
        />
        <path
          fill="url(#GId)"
          d="M7 8a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm0-2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm3.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm0-3a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zM14 8a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm0-2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1z"
        />
        <path
          fill="url(#GIe)"
          d="M10 9.943V12H9v1h2V9.943c.583-.137 1-.508 1-.943 0-.552-.672-1-1.5-1S9 8.448 9 9c0 .435.417.806 1 .943z"
        />
      </g>
    </svg>
  );
}
