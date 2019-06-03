/*
Copyright (c) 2018-2019 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
// @flow
// BASEUI-GENERATED-FLAG-COMPONENT
// DO NOT EDIT THIS FILE DIRECTLY

import * as React from 'react';

export default function FlagVU(props: {width: string}) {
  const {width, ...restProps} = props;
  return (
    <svg viewBox="0 0 21 15" width={width} {...restProps}>
      <defs>
        <linearGradient id="VUa" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#FFF" />
          <stop offset="100%" stopColor="#F0F0F0" />
        </linearGradient>
        <linearGradient id="VUb" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#27AB53" />
          <stop offset="100%" stopColor="#219447" />
        </linearGradient>
        <linearGradient id="VUc" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#EC2547" />
          <stop offset="100%" stopColor="#CE1A39" />
        </linearGradient>
        <linearGradient id="VUd" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#262626" />
          <stop offset="100%" stopColor="#0D0D0D" />
        </linearGradient>
        <linearGradient id="VUe" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#FFD449" />
          <stop offset="100%" stopColor="#FDCD34" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#VUa)" d="M0 0h21v15H0z" />
        <path fill="url(#VUb)" d="M.2 9h21v6H.2z" />
        <path fill="url(#VUc)" d="M.2 0h21v6H.2z" />
        <path fill="url(#VUd)" d="M8.2 6h13v3h-13l-8 6V0l8 6z" />
        <path
          fill="url(#VUe)"
          fillRule="nonzero"
          d="M6.867 7.5L-.6 1.9l-.4-.3.6-.8.4.3L7.867 7H21.2v1H7.7l.3-.1-8 6-.4.3-.6-.8.4-.3 7.467-5.6z"
        />
        <path
          fill="url(#VUe)"
          d="M2.7 9a1.5 1.5 0 1 1 1.5-1.5c0 .727-.813 2.363-1.5 2.5-.096.02.101-1 0-1zm0-.75c.276.25.5-.474.5-.75a.5.5 0 0 0-1 0c0 .276.224 1 .5.75z"
        />
      </g>
    </svg>
  );
}
