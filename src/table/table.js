/*
Copyright (c) 2018 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
// @flow

import React from 'react';

import {
  Table as StyledTable,
  Content as StyledContent,
  Head as StyledHead,
  HeadCell as StyledHeadCell,
  Body as StyledBody,
  Row as StyledRow,
  Cell as StyledCell,
  // Loading as StyledLoading,
} from './styled-components.js';

import type {TablePropsT} from './types.js';

export default class Table extends React.Component<TablePropsT> {
  static defaultProps = {
    columns: [],
    data: [[]],
    isLoading: false,
  };

  render() {
    return (
      <StyledTable
        role="grid"
        aria-colcount={this.props.columns.length}
        aria-rowcount={this.props.data.length}
      >
        <StyledContent $width={this.props.horizontalScrollWidth}>
          <StyledHead role="row">
            {this.props.columns.map((column, index) => (
              <StyledHeadCell role="columnheader" key={index}>
                {column}
              </StyledHeadCell>
            ))}
          </StyledHead>

          <StyledBody role="rowgroup">
            {this.props.data.map((row, index) => (
              <StyledRow key={index} role="row">
                {row.map((cell, cellIndex) => (
                  <StyledCell key={cellIndex} role="gridcell">
                    {cell}
                  </StyledCell>
                ))}
              </StyledRow>
            ))}
          </StyledBody>
        </StyledContent>
      </StyledTable>
    );
  }
}
