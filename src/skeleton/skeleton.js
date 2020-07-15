/*
Copyright (c) 2018-2020 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
// @flow
import * as React from 'react';
import {getOverrides} from '../helpers/overrides.js';
import type {SkeletonPropsT} from './types.js';
import {
  StyledRoot,
  StyledRow,
  StyledAnimationRow,
} from './styled-components.js';

class Skeleton extends React.Component<SkeletonPropsT> {
  static defaultProps: SkeletonPropsT = {
    rows: 1,
    animation: false,
  };
  render() {
    const {overrides = {}} = this.props;
    const [Root, rootProps] = getOverrides(overrides.Root, StyledRoot);
    const [Row, rowProps] = this.props.animation
      ? getOverrides(overrides.Row, StyledAnimationRow)
      : getOverrides(overrides.Row, StyledRow);

    if (typeof this.props.rows === 'number') {
      return (
        <Root testid={'loader'} {...rootProps}>
          {Array(this.props.rows)
            .fill()
            .map((item, index) => (
              <Row key={index} {...rowProps}></Row>
            ))}
        </Root>
      );
    }
    return <Root testid={'loader'} {...rootProps} />;
  }
}

export default Skeleton;
