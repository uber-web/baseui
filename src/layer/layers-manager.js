/*
Copyright (c) 2018-2020 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
// @flow
import * as React from 'react';
import {styled} from '../styles/index.js';
import {getOverrides} from '../helpers/overrides.js';
import type {
  LayersManagerPropsT,
  LayersManagerStateT,
  LayersContextT,
} from './types.js';
import {initFocusVisible} from '../utils/focusVisible.js';

const StyledAppContainer = styled('div', {});
const StyledLayersContainer = styled('div', {});

function defaultEscapeHandlerFn() {
  if (__DEV__) {
    console.warn(
      '`LayersManager` was not found. This occurs if you are attempting to use a component requiring `Layer` without using the `BaseProvider` at the root of your app. Please visit https://baseweb.design/components/base-provider/ for more information',
    );
  }
}
export const LayersContext = React.createContext<LayersContextT>({
  addEscapeHandler: defaultEscapeHandlerFn,
  removeEscapeHandler: defaultEscapeHandlerFn,
  host: undefined,
  zIndex: undefined,
});
export const Provider = LayersContext.Provider;
export const Consumer = LayersContext.Consumer;

export default class LayersManager extends React.Component<
  LayersManagerPropsT,
  LayersManagerStateT,
> {
  host: {
    // eslint-disable-next-line flowtype/no-weak-types
    current: React.ElementRef<any> | null,
  } = React.createRef();

  containerRef: {
    // eslint-disable-next-line flowtype/no-weak-types
    current: React.ElementRef<any> | null,
  } = React.createRef();

  constructor(props: LayersManagerPropsT) {
    super(props);
    this.state = {escapeKeyHandlers: []};
  }

  componentDidMount() {
    this.forceUpdate();
    initFocusVisible(this.containerRef.current);

    if (__BROWSER__) {
      document.addEventListener('keyup', this.onKeyUp);
    }
  }

  componentWillUnmount() {
    if (__BROWSER__) {
      document.removeEventListener('keyup', this.onKeyUp);
    }
  }

  onKeyUp = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      this.setState(prev => {
        const escapeKeyHandler = prev.escapeKeyHandlers.pop();
        if (escapeKeyHandler) {
          escapeKeyHandler();
          return {escapeKeyHandlers: prev.escapeKeyHandlers};
        }
        return prev;
      });
    }
  };

  onAddEscapeHandler = (escapeKeyHandler: () => mixed) => {
    this.setState(prev => {
      return {escapeKeyHandlers: [...prev.escapeKeyHandlers, escapeKeyHandler]};
    });
  };

  onRemoveEscapeHandler = (escapeKeyHandler: () => mixed) => {
    this.setState(prev => {
      return {
        escapeKeyHandlers: prev.escapeKeyHandlers.filter(
          handler => handler !== escapeKeyHandler,
        ),
      };
    });
  };

  render() {
    const {overrides = {}} = this.props;
    const [AppContainer, appContainerProps] = getOverrides(
      overrides.AppContainer,
      StyledAppContainer,
    );
    const [LayersContainer, layersContainerProps] = getOverrides(
      overrides.LayersContainer,
      StyledLayersContainer,
    );
    return (
      <Consumer>
        {({host}) => {
          if (__DEV__) {
            if (host !== undefined) {
              // eslint-disable-next-line no-console
              console.warn(
                'There is a LayersManager already exists in your application. It is not recommended to have more than one LayersManager in an application.',
              );
            }
          }
          return (
            <Provider
              value={{
                host: host || this.host.current,
                zIndex: this.props.zIndex,
                addEscapeHandler: this.onAddEscapeHandler,
                removeEscapeHandler: this.onRemoveEscapeHandler,
              }}
            >
              <AppContainer {...appContainerProps} ref={this.containerRef}>
                {this.props.children}
              </AppContainer>
              <LayersContainer {...layersContainerProps} ref={this.host} />
            </Provider>
          );
        }}
      </Consumer>
    );
  }
}
