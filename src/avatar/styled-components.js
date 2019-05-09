/*
Copyright (c) 2018 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
// @flow

import {styled} from '../styles/index.js';
import type {StylePropsT} from './types.js';

function getSize(props: StylePropsT) {
  const {$size, $theme} = props;

  const defaultSize = $theme.sizing.scale1000;
  const size = $size || defaultSize;
  return $theme.sizing[size] || size;
}

export const Avatar = styled('img', (props: StylePropsT) => {
  const themedSize = getSize(props);

  return {
    borderTopRightRadius: '50%',
    borderBottomRightRadius: '50%',
    borderTopLeftRadius: '50%',
    borderBottomLeftRadius: '50%',
    boxSizing: 'border-box',
    display: 'block',
    height: themedSize,
    width: themedSize,
    objectFit: 'cover',
  };
});

export const Initials = styled('div', (props: StylePropsT) => ({
  ...props.$theme.typography.font400,
  color: props.$theme.colors.mono100,
  alignItems: 'center',
  display: 'flex',
  justifyContent: 'center',
  height: '100%',
}));

export const Root = styled('div', (props: StylePropsT) => {
  const {$didImageFailToLoad} = props;
  const themedSize = getSize(props);

  return {
    backgroundColor: $didImageFailToLoad ? props.$theme.colors.primary : null,
    borderTopRightRadius: '50%',
    borderBottomRightRadius: '50%',
    borderTopLeftRadius: '50%',
    borderBottomLeftRadius: '50%',
    boxSizing: 'border-box',
    display: 'inline-block',

    // image previously set the root height/width
    // since image is not rendered, set the height/width
    height: $didImageFailToLoad ? themedSize : null,
    width: $didImageFailToLoad ? themedSize : null,
  };
});
