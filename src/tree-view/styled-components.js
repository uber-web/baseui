/*
Copyright (c) 2018-2020 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/

// @flow

import {styled} from '../styles/index.js';

export const StyledTreeItemList = styled<{
  $isChildNode?: boolean,
  $expanded?: boolean,
}>('ul', ({$theme, $isChildNode, $expanded = true}) => {
  return {
    marginTop: 0,
    marginBottom: 0,
    marginLeft: $isChildNode ? $theme.sizing.scale800 : 0,
    marginRight: 0,
    overflow: 'auto',
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    paddingRight: 0,
    position: 'relative',
    outline: 'none',
    display: $expanded ? 'block' : 'none',
  };
});

export const StyledTreeItem = styled<{$isLeafNode?: boolean}>(
  'li',
  ({$theme, $isLeafNode}) => {
    return {
      cursor: $isLeafNode ? 'auto' : 'pointer',
      marginTop: 0,
      marginBottom: 0,
      marginLeft: 0,
      marginRight: 0,
      overflow: 'auto',
      paddingTop: 0,
      paddingBottom: 0,
      paddingLeft: 0,
      paddingRight: 0,
      position: 'relative',
      outline: 'none',
    };
  },
);

export const StyledItemContent = styled<{
  $isSelected: boolean,
  $isFocusVisible: boolean,
}>('div', ({$theme, $isSelected, $isFocusVisible}) => {
  return {
    ...$theme.typography.font300,
    alignItems: 'center',
    boxSizing: 'border-box',
    color: $theme.colors.primary,
    display: 'flex',
    marginTop: 0,
    marginBottom: 0,
    marginLeft: 0,
    marginRight: 0,
    paddingLeft: $theme.sizing.scale200,
    paddingRight: $theme.sizing.scale200,
    paddingTop: $theme.sizing.scale100,
    paddingBottom: $theme.sizing.scale100,
    outline:
      $isSelected && $isFocusVisible
        ? `3px solid ${$theme.colors.accent}`
        : 'none',
    outlineOffset: '-3px',
    ':hover': {
      backgroundColor: $theme.colors.mono300,
    },
  };
});

export const StyledIconContainer = styled<{}>('div', ({$theme}) => {
  return {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    marginTop: 0,
    marginBottom: 0,
    marginLeft: 0,
    marginRight: $theme.sizing.scale200,
  };
});
