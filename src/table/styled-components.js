/*
Copyright (c) 2018-2019 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
// @flow
import * as React from 'react';

import {styled} from '../styles/index.js';

const StyledTableElement = styled<{}>('div', ({$theme}) => {
  return {
    ...$theme.borders.border300,
    backgroundColor: $theme.colors.tableBackground,
    borderTopLeftRadius: $theme.borders.tableBorderRadius,
    borderTopRightRadius: $theme.borders.tableBorderRadius,
    borderBottomRightRadius: $theme.borders.tableBorderRadius,
    borderBottomLeftRadius: $theme.borders.tableBorderRadius,
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    overflowX: 'scroll',
  };
});

export const StyledTable = (props: *) => (
  <StyledTableElement role="grid" {...props} />
);
StyledTable.__STYLETRON__ = StyledTableElement.__STYLETRON__;

type HorizontalStyleProps = {
  $width?: string,
};

const StyledHeadElement = styled<HorizontalStyleProps>(
  'div',
  ({$theme, $width}) => {
    return {
      backgroundColor: $theme.colors.tableHeadBackgroundColor,
      boxShadow: $theme.lighting.shadow400,
      display: 'flex',
      flexGrow: 0,
      width: $width ? $width : '100%',
    };
  },
);

export const StyledHead = (props: *) => (
  <StyledHeadElement role="row" {...props} />
);
StyledHead.__STYLETRON__ = StyledHeadElement.__STYLETRON__;

const StyledHeadCellElement = styled<{}>('div', ({$theme}) => {
  return {
    ...$theme.typography.font350,
    ...$theme.borders.border300,
    borderTop: 'none',
    borderBottom: 'none',
    borderLeft: 'none',
    color: $theme.colors.colorPrimary,
    display: 'flex',
    justifyContent: 'space-between',
    paddingTop: $theme.sizing.scale500,
    paddingRight: $theme.sizing.scale600,
    paddingBottom: $theme.sizing.scale500,
    paddingLeft: $theme.sizing.scale600,
    width: '100%',
    ':last-of-type': {
      borderRight: 'none',
    },
  };
});

export const StyledHeadCell = (props: *) => (
  <StyledHeadCellElement role="columnheader" {...props} />
);
StyledHeadCell.__STYLETRON__ = StyledHeadCellElement.__STYLETRON__;

export const StyledSortableLabel = styled<{}>('button', ({$theme}) => {
  return {
    ...$theme.typography.font350,
    alignItems: 'center',
    backgroundColor: 'transparent',
    border: 'none',
    color: $theme.colors.colorPrimary,
    display: 'flex',
    padding: 0,
    ':hover:enabled': {
      cursor: 'pointer',
    },
    ':disabled': {
      color: $theme.colors.mono500,
    },
  };
});

const StyledBodyElement = styled<HorizontalStyleProps>('div', ({$width}) => {
  return ({
    width: $width ? $width : '100%',
    overflowX: 'hidden',
    overflowY: 'overlay',
    flex: 1,
  }: {});
});

export const StyledBody = (props: *) => (
  <StyledBodyElement role="rowgroup" {...props} />
);
StyledBody.__STYLETRON__ = StyledBodyElement.__STYLETRON__;

const StyledRowElement = styled('div', {
  display: 'flex',
  alignItems: 'center',
});

export const StyledRow = (props: *) => (
  <StyledRowElement role="row" {...props} />
);
StyledRow.__STYLETRON__ = StyledRowElement.__STYLETRON__;

const StyledCellElement = styled<{}>('div', ({$theme}) => {
  return {
    ...$theme.typography.font300,
    color: $theme.colors.colorPrimary,
    display: 'flex',
    flex: 1,
    paddingTop: $theme.sizing.scale300,
    paddingRight: $theme.sizing.scale600,
    paddingBottom: $theme.sizing.scale300,
    paddingLeft: $theme.sizing.scale600,
  };
});

export const StyledCell = (props: *) => (
  <StyledCellElement role="gridcell" {...props} />
);
StyledCell.__STYLETRON__ = StyledCellElement.__STYLETRON__;

export const StyledFilterButton = styled('button', {
  backgroundColor: 'transparent',
  border: 'none',
  paddingTop: 'none',
  paddingRight: 'none',
  paddingBottom: 'none',
  paddingLeft: 'none',
});

export const StyledFilterContent = styled<{}>('div', ({$theme}) => ({
  ...$theme.borders.border300,
  backgroundColor: $theme.colors.tableFilterBackground,
  borderRight: 'none',
  borderLeft: 'none',
  maxHeight: '196px',
  paddingRight: $theme.sizing.scale600,
  paddingLeft: $theme.sizing.scale600,
  overflow: 'auto',
}));

export const StyledFilterHeading = styled<{}>('div', ({$theme}) => ({
  ...$theme.typography.font350,
  color: $theme.colors.tableFilterHeading,
  paddingTop: $theme.sizing.scale500,
  paddingRight: $theme.sizing.scale600,
  paddingBottom: $theme.sizing.scale500,
  paddingLeft: $theme.sizing.scale600,
}));

export const StyledFilterFooter = styled<{}>('div', ({$theme}) => ({
  backgroundColor: $theme.colors.tableFilterFooterBackground,
  paddingTop: $theme.sizing.scale300,
  paddingRight: $theme.sizing.scale100,
  paddingBottom: $theme.sizing.scale300,
  paddingLeft: $theme.sizing.scale100,
  display: 'flex',
  justifyContent: 'space-between',
  minWidth: '216px',
}));

export const StyledAction = styled<{}>('button', ({$theme}) => {
  return {
    backgroundColor: 'transparent',
    border: 'none',
    color: $theme.colors.primary,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    marginRight: $theme.sizing.scale100,
    marginLeft: $theme.sizing.scale100,
    ':hover:enabled': {
      cursor: 'pointer',
    },
  };
});
