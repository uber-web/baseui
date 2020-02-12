/*
Copyright (c) 2018-2020 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
// @flow
import * as React from 'react';
import {
  BaseButton as StyledBaseButton,
  LoadingSpinner as StyledLoadingSpinner,
  LoadingSpinnerContainer as StyledLoadingSpinnerContainer,
} from './styled-components.js';
import {getSharedProps} from './utils.js';
import ButtonInternals from './button-internals.js';
import {defaultProps} from './default-props.js';
import {getOverrides} from '../helpers/overrides.js';
import {isFocusVisible, forkFocus, forkBlur} from '../utils/focusVisible.js';

import type {ButtonPropsT} from './types.js';

class Button extends React.Component<
  // eslint-disable-next-line flowtype/no-weak-types
  ButtonPropsT & {forwardedRef: any},
  {isFocusVisible: boolean},
> {
  static defaultProps = defaultProps;
  state = {isFocusVisible: false};

  internalOnClick = (...args: *) => {
    const {isLoading, onClick} = this.props;
    if (isLoading) {
      return;
    }
    onClick && onClick(...args);
  };

  handleFocus = (event: SyntheticEvent<>) => {
    if (isFocusVisible(event)) {
      this.setState({isFocusVisible: true});
    }
  };

  handleBlur = (event: SyntheticEvent<>) => {
    if (this.state.isFocusVisible !== false) {
      this.setState({isFocusVisible: false});
    }
  };

  render() {
    const {
      overrides = {},
      size,
      kind,
      shape,
      isLoading,
      isSelected,
      // Removing from restProps
      startEnhancer,
      endEnhancer,
      children,
      forwardedRef,
      ...restProps
    } = this.props;
    // Get overrides
    const [BaseButton, baseButtonProps] = getOverrides(
      overrides.BaseButton,
      StyledBaseButton,
    );
    const [LoadingSpinner, loadingSpinnerProps] = getOverrides(
      overrides.LoadingSpinner,
      StyledLoadingSpinner,
    );
    const [
      LoadingSpinnerContainer,
      loadingSpinnerContainerProps,
    ] = getOverrides(
      overrides.LoadingSpinnerContainer,
      StyledLoadingSpinnerContainer,
    );
    const sharedProps = {
      ...getSharedProps(this.props),
      $isFocusVisible: this.state.isFocusVisible,
    };
    return (
      <BaseButton
        ref={forwardedRef}
        data-baseweb="button"
        {...sharedProps}
        {...restProps}
        {...baseButtonProps}
        // Applies last to override passed in onClick
        onClick={this.internalOnClick}
        onFocus={forkFocus(baseButtonProps, this.handleFocus)}
        onBlur={forkBlur(baseButtonProps, this.handleBlur)}
      >
        {isLoading ? (
          <React.Fragment>
            {/* This is not meant to be overridable by users */}
            <div style={{opacity: 0, display: 'flex', height: '0px'}}>
              <ButtonInternals {...this.props} />
            </div>
            <LoadingSpinnerContainer {...loadingSpinnerContainerProps}>
              <LoadingSpinner {...sharedProps} {...loadingSpinnerProps} />
            </LoadingSpinnerContainer>
          </React.Fragment>
        ) : (
          <ButtonInternals {...this.props} />
        )}
      </BaseButton>
    );
  }
}

const ForwardedButton = React.forwardRef<ButtonPropsT, HTMLButtonElement>(
  (props: ButtonPropsT, ref) => <Button forwardedRef={ref} {...props} />,
);
ForwardedButton.displayName = 'Button';
export default ForwardedButton;
