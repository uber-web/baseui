/*
Copyright (c) 2018-2019 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
// references https://github.com/davidtheclark/focus-trap-react
// @flow

import * as React from 'react';
import createFocusTrap from 'focus-trap';

type Props = {
  children: React.Node,
};

class TrapFocus extends React.Component<Props, {}> {
  focusTrapElement = (React.createRef(): {current: HTMLDivElement | null});
  previouslyFocusedElement: ?HTMLElement = null;
  // eslint-disable-next-line flowtype/no-weak-types
  focusTrap: ?{deactivate: Function, activate: Function} = null;

  componentDidMount() {
    if (__BROWSER__) {
      if (typeof document !== 'undefined') {
        this.previouslyFocusedElement = document.activeElement;
      }
      this.focusTrap = createFocusTrap(this.focusTrapElement.current);

      // enables proper execution when testing with enzyme similar issue to:
      // https://github.com/davidtheclark/focus-trap-react/issues/24
      // relevant Quora answer for why setTimeout with 0 ms is useful:
      // https://www.quora.com/What-does-setTimeout-with-a-0ms-delay-do-Is-this-some-trick-to-spawn-a-new-thread-but-why/answer/Andreas-Blixt
      setTimeout(() => this.focusTrap && this.focusTrap.activate(), 0);
    }
  }

  componentWillUnmount() {
    if (__BROWSER__) {
      this.focusTrap && this.focusTrap.deactivate();
      this.previouslyFocusedElement && this.previouslyFocusedElement.focus();
    }
  }

  render() {
    return <div ref={this.focusTrapElement}>{this.props.children}</div>;
  }
}

export default TrapFocus;
