/*
Copyright (c) 2018 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
// @flow

import React from 'react';

import ButtonGroup from './button-group.js';
import StatefulContainer from './stateful-container.js';
import type {PropsT} from './types.js';

export default function StatefulButtonGroup(props: PropsT) {
  const {children, ...restProps} = props;
  return (
    <StatefulContainer {...restProps}>
      {({...containerProps}) => (
        <ButtonGroup {...containerProps}>{props.children}</ButtonGroup>
      )}
    </StatefulContainer>
  );
}
