/*
Copyright (c) 2018 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
// @flow

import type {OverrideT} from '../helpers/overrides.js';
import {STATE_CHANGE_TYPE} from './constants.js';

export type ChangeActionT = $Keys<typeof STATE_CHANGE_TYPE>;
export type ParamsT = {
  values: Array<number>,
};
export type OverridesT = {
  Root?: OverrideT<*>,
  Track?: OverrideT<*>,
  InnerTrack?: OverrideT<*>,
  Tick?: OverrideT<*>,
  TickBar?: OverrideT<*>,
  Thumb?: OverrideT<*>,
  InnerThumb?: OverrideT<*>,
  ThumbValue?: OverrideT<*>,
};

export type PropsT = {
  /** Position of the thumbs. It can be a single point (one thumb) or 2 points array (range thumbs). */
  values: Array<number>,
  /** The minimum allowed value of the slider. Should not be bigger than max. */
  min: number,
  /** The maximum allowed value of the slider. Should not be smaller than min. */
  max: number,
  /** The granularity the slider can step through values. Default step is 1. */
  step?: ?number,
  overrides?: OverridesT,
  /** Disable control from being changed. */
  disabled?: boolean,
  /** Handler for events on trigger element, each time thumbs change selection, which is passed in `value`. */
  onChange: ({
    ...ParamsT,
  }) => void,
};

export type StateT = {
  values: Array<number>,
};

export type StateReducerT = (
  stateType: string,
  nextState: StateT,
  currentState: StateT,
) => StateT;

export type StatefulContainerPropsT = {
  overrides?: OverridesT,
  children: (*) => React$Node,
  /** Initial state populated into the component */
  initialState?: StateT,
  /** Reducer function to manipulate internal state updates. */
  stateReducer: StateReducerT,
  /** Handler for events on trigger element, each time thumbs change selection, which is passed in `value`. */
  onChange: ({...ParamsT}) => void,
};

export type StatefulSliderPropsT = {
  overrides?: OverridesT,
  /** Initial state populated into the component */
  initialState: StateT,
  /** Handler for events on trigger element, each time thumbs change selection, which is passed in `value`. */
  onChange?: ({...ParamsT}) => void,
};
