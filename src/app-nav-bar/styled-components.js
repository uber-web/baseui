/*
Copyright (c) 2018-2020 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
// @flow

import {styled, withStyle} from '../styles/index.js';
import {StyledListItem} from '../menu/index.js';

const StyledClearButton = styled<{$isFocusVisible: boolean}>(
  'button',
  ({$theme, $isFocusVisible}) => ({
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    color: $theme.colors.contentPrimary,
    borderLeftWidth: 0,
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderBottomWidth: 0,
    paddingTop: '0',
    paddingBottom: '0',
    paddingLeft: '0',
    paddingRight: '0',
    marginLeft: 0,
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    outline: $isFocusVisible ? `3px solid ${$theme.colors.accent}` : 'none',
    outlineOffset: '-3px',
    WebkitAppearance: 'none',
    cursor: 'pointer',
  }),
);

export const StyledRoot = styled<{}>('div', props => {
  const {$theme} = props;
  return {
    ...$theme.typography.font300,
    boxSizing: 'border-box',
    backgroundColor: $theme.colors.backgroundPrimary,
    boxShadow: $theme.lighting.shadow600,
    width: '100%',
  };
});

export const StyledSpacing = styled<{}>('div', props => {
  const {$theme} = props;
  return {
    boxSizing: 'border-box',
    height: '100%',
    paddingTop: $theme.sizing.scale700,
    paddingBottom: $theme.sizing.scale700,
    display: 'flex',
    alignItems: 'center',
    [`@media screen and (max-width: ${$theme.breakpoints.medium - 1}px)`]: {
      paddingTop: $theme.sizing.scale400,
      paddingBottom: $theme.sizing.scale400,
    },
  };
});

export const StyledAppName = styled<{}>('span', ({$theme}) => ({
  ...$theme.typography.font650,
  color: $theme.colors.primary,
  textDecoration: 'none',
  [`@media screen and (max-width: ${$theme.breakpoints.medium - 1}px)`]: {
    ...$theme.typography.font550,
  },
}));

// $FlowFixMe
export const StyledSideMenuButton = withStyle<{}>(
  StyledClearButton,
  ({$theme}) => ({
    marginRight: $theme.sizing.scale600,
    paddingTop: $theme.sizing.scale100,
    paddingBottom: $theme.sizing.scale100,
    paddingLeft: $theme.sizing.scale100,
    paddingRight: $theme.sizing.scale100,
  }),
);

export const StyledPrimaryMenuContainer = styled<{}>('div', ({$theme}) => {
  return {
    boxSizing: 'border-box',
    height: '100%',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'flex-end',
    alignItems: 'stretch',
  };
});

export const StyledPrimaryMenuItem = styled<{
  $active: boolean,
  $isFocusVisible: boolean,
}>('div', props => {
  const {
    $active,
    $isFocusVisible,
    $theme: {colors, sizing},
  } = props;
  return {
    boxSizing: 'border-box',
    display: 'flex',
    alignItems: 'center',
    color: $active ? colors.contentPrimary : colors.contentTertiary,
    marginLeft: sizing.scale700,
    marginRight: sizing.scale700,
    outline: $isFocusVisible ? `3px solid ${colors.accent}` : 'none',
    outlineOffset: '-3px',
    borderBottom:
      $active && !$isFocusVisible
        ? `2px solid ${colors.primary}`
        : '2px solid transparent',
    ':hover': {
      color: colors.primary,
    },
  };
});

export const StyledUserMenuButton = StyledClearButton;

export const StyledUserMenuListItem = withStyle(StyledListItem, {
  paddingTop: '0',
  paddingBottom: '0',
  paddingRight: '0',
});

export const StyledUserProfileTileContainer = styled<{}>('div', ({$theme}) => {
  return {
    boxSizing: 'border-box',
    height: '100%',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'flex-start',
    paddingTop: $theme.sizing.scale650,
    paddingBottom: $theme.sizing.scale650,
  };
});

export const StyledUserProfilePictureContainer = styled<{}>(
  'div',
  ({$theme}) => {
    return {
      marginRight: $theme.sizing.scale600,
    };
  },
);

export const StyledUserProfileInfoContainer = styled<{}>('div', ({$theme}) => {
  return {
    boxSizing: 'border-box',
    alignSelf: 'center',
  };
});
