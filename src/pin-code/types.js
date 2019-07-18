/*
Copyright (c) 2018-2019 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
// @flow

import * as React from 'react';
import type {OverrideT} from '../helpers/overrides.js';
import {SIZE, STATE_CHANGE_TYPE} from '../input/index.js';

export type ChangeEventT = {values: string[]};

export type PropsT = {
  /** Sets aria-label attribute for each input element. */
  'aria-label': ?string,
  /** Sets aria-labelledby attribute for each input element. */
  'aria-labelledby': ?string,
  /** Sets aria-describedby attribute for each input element. */
  'aria-describedby': ?string,
  /** If true, the first input will be focused upon mounting. */
  autoFocus: boolean,
  /** Render the component in a disabled state. */
  disabled: boolean,
  /** Renders the component in an error state. */
  error: boolean,
  /** Sets the id attribute of each input element. The index of the string in the array should match the index of the pin code input. */
  ids: ?(string[]),
  /** Sets the name attribute of each input element. The index of the string in the array should match the index of the pin code input. */
  names: ?(string[]),
  /** A handler for when any pin code input changes value. */
  onChange: ChangeEventT => mixed,
  overrides: {
    Root?: OverrideT<*>,
    Input?: OverrideT<*>,
  },
  /** Sets the placeholder text for each pin code input element. */
  placeholder: string,
  /** Renders the component in a positive state. */
  positive: boolean,
  /** Sets the required attribute of each pin code input element. */
  required: boolean,
  /** Renders the component at a given size. */
  size: $Keys<typeof SIZE>,
  /** If true, when a pin code input receives a valid value, focus will be transfered to the next pin code input (until the end of the inputs). */
  manageFocus: boolean,
  /** An array of values respective to each pin code input. */
  values: string[],
};

// Stateful stuff below

export type StateT = {
  hasFocus: boolean,
};

export type StatefulPinCodeContainerStateT = {
  values: string[],
};

export type StateChangeT = $Keys<typeof STATE_CHANGE_TYPE>;

export type StateReducerT = (
  type: StateChangeT,
  nextState: StatefulPinCodeContainerStateT,
  currentState: StatefulPinCodeContainerStateT,
) => StatefulPinCodeContainerStateT;

export type StatefulPinCodeContainerPropsT = {
  children: PropsT => React.Node,
  initialState: StatefulPinCodeContainerStateT,
  onChange: (event: ChangeEventT) => mixed,
  stateReducer: StateReducerT,
};

export type StatefulPinCodePropsT = PropsT & {
  initialState?: StatefulPinCodeContainerStateT,
  onChange?: (event: ChangeEventT) => mixed,
  stateReducer?: StateReducerT,
};
