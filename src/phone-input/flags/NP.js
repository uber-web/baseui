/*
Copyright (c) 2018-2019 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
// @flow
// BASEUI-GENERATED-FLAG-COMPONENT
// DO NOT EDIT THIS FILE DIRECTLY

import * as React from 'react';

export default function FlagNP(props: {width: string}) {
  const {width, ...restProps} = props;
  return (
    <svg
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 21 15"
      width={width}
      {...restProps}
    >
      <defs>
        <linearGradient id="NPb" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#FFF" />
          <stop offset="100%" stopColor="#F0F0F0" />
        </linearGradient>
        <path
          id="NPa"
          d="M0 0h1.495c.279 0 .693.126.918.275L13.175 7.45c.456.304.372.55-.172.55H6l7.247 6.341c.416.364.303.659-.254.659H0V0z"
        />
        <linearGradient id="NPd" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#EE1B44" />
          <stop offset="100%" stopColor="#DD153C" />
        </linearGradient>
        <linearGradient id="NPf" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#0543A8" />
          <stop offset="100%" stopColor="#003893" />
        </linearGradient>
        <path
          id="NPe"
          d="M0 0h1.495c.279 0 .693.126.918.275L13.175 7.45c.456.304.372.55-.172.55H6l7.247 6.341c.416.364.303.659-.254.659H0V0z"
        />
      </defs>
      <g fill="none" fillRule="evenodd">
        <mask id="NPc" fill="#fff">
          <use xlinkHref="#NPa" />
        </mask>
        <use fill="url(#NPb)" xlinkHref="#NPa" />
        <g mask="url(#NPc)">
          <use fill="url(#NPd)" xlinkHref="#NPe" />
          <path
            stroke="url(#NPf)"
            d="M.5.5v14h12.17l-8-7h7.679L2.136.691A1.483 1.483 0 0 0 1.496.5H.5z"
          />
        </g>
        <path
          fill="url(#NPb)"
          d="M5.138 5.85a3.52 3.52 0 0 0 .789-.318 2 2 0 0 1-3.857 0c.236.132.502.24.791.32L3.25 5.5l-.636-.574.856.044-.044-.856L4 4.75l.574-.636-.044.856.856-.044-.636.574.388.35zM4 12l-.765.848.058-1.14-1.14.057L3 11l-.848-.765 1.14.058-.057-1.14L4 10l.765-.848-.058 1.14 1.14-.057L5 11l.848.765-1.14-.058.057 1.14L4 12z"
          mask="url(#NPc)"
        />
      </g>
    </svg>
  );
}
