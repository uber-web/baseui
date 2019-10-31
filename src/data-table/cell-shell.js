/*
Copyright (c) 2018-2019 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
// @flow

import * as React from 'react';

import {Checkbox} from '../checkbox/index.js';
import {useStyletron} from '../styles/index.js';

type PropsT = {|
  children: React.Node,
  isMeasured?: boolean,
  isSelected?: boolean,
  onSelect?: () => void,
|};

const CellShell = React.forwardRef<PropsT, HTMLDivElement>((props, ref) => {
  const [useCss, theme] = useStyletron();

  return (
    <div
      ref={ref}
      className={useCss({
        ...theme.typography.font100,
        boxSizing: 'border-box',
        display: props.isMeasured ? 'inline-block' : null,
        paddingLeft: theme.sizing.scale500,
        paddingRight: theme.sizing.scale500,
        whiteSpace: 'pre',
        width: props.isMeasured ? null : '100%',
      })}
    >
      <div className={useCss({display: 'flex', alignItems: 'center'})}>
        {Boolean(props.onSelect) && (
          <Checkbox onChange={props.onSelect} checked={props.isSelected} />
        )}
        {props.children}
      </div>
    </div>
  );
});
CellShell.displayName = 'CellShell';

export default CellShell;
