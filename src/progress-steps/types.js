/*
Copyright (c) 2018 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/

// @flow

// import type {Node, ElementType} from 'react';
import type {ThemeT} from '../styles/types';
import type {OverrideT} from '../helpers/overrides';

export type PropgressStepsOverridesT = {
  Root?: OverrideT<*>,
};

export type ProgressStepsPropsT = {
  overrides?: PropgressStepsOverridesT,
  children?: React.Node,
  current: number,
};

export type StepOverridesT = {
  Root?: OverrideT<*>,
  Icon?: OverrideT<*>,
  InnerIcon?: OverrideT<*>,
  Tail?: OverrideT<*>,
  Content?: OverrideT<*>,
  Title?: OverrideT<*>,
  Description?: OverrideT<*>,
};

export type StepPropsT = {
  title?: string,
  isCompleted: boolean,
  isActive: boolean,
  isLast: boolean,
  overrides?: StepOverridesT,
  children?: React.Node,
};

export type StyledProgressStepsPropsT = {
  $theme: ThemeT,
};

export type StyledStepPropsT = {
  $theme: ThemeT,
  $isActive: boolean,
  $isCompleted: boolean,
  $disabled: boolean,
};

export type StyledIconPropsT = {
  $theme: ThemeT,
  $isActive: boolean,
  $isCompleted: boolean,
  $disabled: boolean,
};

export type StyledInnerIconPropsT = {
  $theme: ThemeT,
};

export type StyledContentPropsT = {
  $theme: ThemeT,
  $isActive: boolean,
};

export type StyledContentTitlePropsT = {
  $theme: ThemeT,
  $isActive: boolean,
  $isCompleted: boolean,
  $disabled: boolean,
};

export type StyledContentTailPropsT = {
  $theme: ThemeT,
  $isActive: boolean,
  $isCompleted: boolean,
  $disabled: boolean,
};

export type StyledContentDescriptionPropsT = {
  $theme: ThemeT,
};
