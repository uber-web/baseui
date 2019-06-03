/*
Copyright (c) 2018-2019 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
// @flow
// BASEUI-GENERATED-FLAG-COMPONENT
// DO NOT EDIT THIS FILE DIRECTLY

import * as React from 'react';

export default function FlagGD(props: {width: string}) {
  const {width, ...restProps} = props;
  return (
    <svg
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 21 15"
      width={width}
      {...restProps}
    >
      <defs>
        <linearGradient id="GDa" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#FFF" />
          <stop offset="100%" stopColor="#F0F0F0" />
        </linearGradient>
        <linearGradient id="GDb" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#E42235" />
          <stop offset="100%" stopColor="#CE1225" />
        </linearGradient>
        <linearGradient id="GDd" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#079B77" />
          <stop offset="100%" stopColor="#007B5D" />
        </linearGradient>
        <path id="GDc" d="M0 0h17v11H0z" />
        <linearGradient id="GDe" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#FFD938" />
          <stop offset="100%" stopColor="#FDD117" />
        </linearGradient>
        <linearGradient id="GDg" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#FFD93B" />
          <stop offset="100%" stopColor="#FDD117" />
        </linearGradient>
        <linearGradient id="GDh" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#E21C30" />
          <stop offset="100%" stopColor="#CE1225" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#GDa)" d="M0 0h21v15H0z" />
        <path fill="url(#GDb)" d="M0 0h21v15H0z" />
        <g transform="translate(2 2)">
          <mask id="GDf" fill="#fff">
            <use xlinkHref="#GDc" />
          </mask>
          <use fill="url(#GDd)" xlinkHref="#GDc" />
          <path
            fill="url(#GDe)"
            d="M1.295 5.599c.283.453.69.752 1.068.829.209.042-.173-.914-.007-1.018.142-.088.825.706.885.54.137-.38.056-.921-.25-1.411-.439-.703-.456-.239-1.643-.742.124.72-.492 1.1-.053 1.802z"
            mask="url(#GDf)"
          />
          <path
            fill="url(#GDg)"
            d="M0 0h17L8.5 5.5 0 0zm0 11l8.5-5.5L17 11H0z"
            mask="url(#GDf)"
          />
          <circle cx="8.5" cy="5.5" r="2.5" fill="url(#GDh)" mask="url(#GDf)" />
          <path
            fill="url(#GDe)"
            d="M8.5 6.271l-1.176.847.442-1.38-1.168-.856 1.449-.006L8.5 3.5l.453 1.376 1.45.006-1.17.856.443 1.38z"
            mask="url(#GDf)"
          />
        </g>
      </g>
    </svg>
  );
}
