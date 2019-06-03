/*
Copyright (c) 2018-2019 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
// @flow
// BASEUI-GENERATED-FLAG-COMPONENT
// DO NOT EDIT THIS FILE DIRECTLY

import * as React from 'react';

export default function FlagPH(props: {width: string}) {
  const {width, ...restProps} = props;
  return (
    <svg viewBox="0 0 21 15" width={width} {...restProps}>
      <defs>
        <linearGradient id="PHa" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#FFF" />
          <stop offset="100%" stopColor="#F0F0F0" />
        </linearGradient>
        <linearGradient id="PHb" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#DD1C34" />
          <stop offset="100%" stopColor="#CC162C" />
        </linearGradient>
        <linearGradient id="PHc" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#0D4BC3" />
          <stop offset="100%" stopColor="#073DA6" />
        </linearGradient>
        <linearGradient id="PHd" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#FDD64D" />
          <stop offset="100%" stopColor="#FCD036" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#PHa)" d="M0 0h21v15H0z" />
        <path fill="url(#PHb)" d="M0 7h21v8H0z" />
        <path fill="url(#PHc)" d="M0 0h21v7H0z" />
        <path fill="url(#PHa)" d="M0 0l10 7.5L0 15z" />
        <path
          fill="url(#PHd)"
          d="M3.4 8.495L2.542 9.81l.325-1.535c-.052-.043-.1-.09-.143-.143l-1.535.325L2.505 7.6a1.012 1.012 0 0 1 0-.202L1.19 6.543l1.535.325c.043-.052.09-.1.143-.143L2.543 5.19 3.4 6.505a1.012 1.012 0 0 1 .202 0l.856-1.315-.325 1.535c.052.043.1.09.143.143l1.535-.325-1.315.856a1.012 1.012 0 0 1 0 .202l1.315.856-1.535-.325c-.043.052-.09.1-.143.143l.325 1.535L3.6 8.495a1.012 1.012 0 0 1-.202 0zM7.5 8a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm-6-5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm0 10a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1z"
        />
      </g>
    </svg>
  );
}
