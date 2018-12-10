/*
Copyright (c) 2018 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
// @flow

import {styled} from '../styles/index.js';
import type {StylePropsT} from './types.js';

export const StyledFileDragAndDrop = styled('div', (props: StylePropsT) => {
  return {
    alignItems: 'center',
    backgroundColor: props.$theme.colors.fileUploaderBackgroundColor,
    borderColor: props.$isDragActive
      ? props.$theme.colors.fileUploaderBorderColorActive
      : props.$theme.colors.fileUploaderBorderColorDefault,

    borderStyle: 'dashed',
    borderRadius: props.$theme.borders.radius200,
    borderWidth: props.$theme.sizing.scale0,
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    paddingTop: props.$theme.sizing.scale900,
    paddingRight: props.$theme.sizing.scale800,
    paddingBottom: props.$theme.sizing.scale900,
    paddingLeft: props.$theme.sizing.scale800,
    width: '100%',
  };
});

export const StyledContentMessage = styled('div', (props: StylePropsT) => ({
  ...props.$theme.typography.font450,
}));

export const StyledContentSeparator = styled('div', (props: StylePropsT) => ({
  ...props.$theme.typography.font450,
  color: props.$theme.colors.fileUploaderSeparatorColor,
}));

export const StyledRoot = styled('div');
export const StyledFilesList = styled('ul');
export const StyledHiddenInput = styled('input');
export const StyledAcceptedFile = styled('li');
export const StyledRejectedFile = styled('li', (props: StylePropsT) => ({
  color: props.$theme.colors.negative400,
}));
