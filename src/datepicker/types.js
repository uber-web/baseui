/*
Copyright (c) 2018-2019 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
// @flow
/* eslint-disable flowtype/generic-spacing */
import * as React from 'react';
import type {ThemeT} from '../styles/types.js';
import type {OverrideT} from '../helpers/overrides.js';
import {STATE_CHANGE_TYPE} from './constants.js';

import type {OnChangeParamsT, OptionT, ValueT} from '../select/index.js';

// eslint-disable-next-line flowtype/no-weak-types
type LocaleT = any; // see https://github.com/date-fns/date-fns/blob/master/src/locale/index.js.flow

type onChangeT = ({date: ?Date | Array<Date>}) => mixed;

export type DatepickerOverridesT<T> = {
  Root?: OverrideT<T>,
  QuickSelectContainer?: OverrideT<T>,
  QuickSelectLabel?: OverrideT<T>,
  QuickSelectButtons?: OverrideT<T>,
  CalendarContainer?: OverrideT<T>,
  CalendarHeader?: OverrideT<T>,
  PrevButton?: OverrideT<T>,
  PrevButtonIcon?: OverrideT<T>,
  NextButton?: OverrideT<T>,
  NextButtonIcon?: OverrideT<T>,
  MonthSelect?: OverrideT<T>,
  YearSelect?: OverrideT<T>,
  MonthHeader?: OverrideT<T>,
  WeekdayHeader?: OverrideT<T>,
  Month?: OverrideT<T>,
  Week?: OverrideT<T>,
  Day?: OverrideT<T>,
  /** Override for reused Input component. Input is **not a styled  element** but a react component that can be replaced */
  Input?: OverrideT<T>,
  /** Override for reused Popover component. Popover is **not a styled  element** but a react component that can be replaced */
  Popover?: OverrideT<T>,
};

export type DayPropsT = {
  disabled: boolean,
  date: Date,
  filterDate: ?(day: Date) => boolean,
  highlightedDate: ?Date,
  includeDates: ?Array<Date>,
  highlighted: boolean,
  range: boolean,
  focusedCalendar: boolean,
  locale: ?LocaleT,
  maxDate: ?Date,
  minDate: ?Date,
  month: ?number,
  onBlur: ({event: Event, date: Date}) => mixed,
  onFocus: ({event: Event, date: Date}) => mixed,
  onSelect: ({date: ?Date | Array<Date>}) => mixed,
  onClick: ({event: Event, date: Date}) => mixed,
  onMouseOver: ({event: Event, date: Date}) => mixed,
  onMouseLeave: ({event: Event, date: Date}) => mixed,
  overrides?: DatepickerOverridesT<{}>,
  peekNextMonth: boolean,
  value: ?Date | Array<Date>,
};

export type DayStateT = {
  isHovered: boolean,
};

export type WeekPropsT = {
  date: Date,
  excludeDates: ?Array<Date>,
  filterDate: ?(day: Date) => boolean,
  // highlighted while keyboard navigating or hovered
  highlightedDate: ?Date,
  includeDates: ?Array<Date>,
  focusedCalendar: boolean,
  range: boolean,
  locale: ?LocaleT,
  maxDate: ?Date,
  minDate: ?Date,
  month: ?number,
  onDayBlur: ({date: Date, event: Event}) => mixed,
  onDayClick: ({date: Date, event: Event}) => mixed,
  onDayFocus: ({date: Date, event: Event}) => mixed,
  onDayMouseOver: ({date: Date, event: Event}) => mixed,
  onDayMouseLeave: ({date: Date, event: Event}) => mixed,
  onChange: onChangeT,
  overrides?: DatepickerOverridesT<{}>,
  peekNextMonth: boolean,
  value: ?Date | Array<Date>,
};

export type MonthPropsT = WeekPropsT;

export type CalendarInternalState = {
  highlightedDate: Date,
  focused: boolean,
  date: Date,
};

export type CalendarPropsT = {
  /** Defines if the calendar is set to be focused on an initial render. */
  autoFocusCalendar: boolean,
  /** A list of dates to disable. */
  excludeDates: ?Array<Date>,
  /** Display a set of buttons for quickly choosing date ranges. `range` must be true as well. */
  quickSelect?: boolean,
  /** A filter function that is called to check the disabled state of a day. If `false` is returned the day is considered to be disabled. */
  filterDate: ?(day: Date) => boolean,
  /** Indicates a highlighted date on hover and keyboard navigation */
  highlightedDate: ?Date,
  /** A list of selectable dates. */
  includeDates: ?Array<Date>,
  /** Defines if a range of dates can be selected. */
  range: boolean,
  /** A locale object. See `date-fns` for more details https://github.com/date-fns/date-fns/tree/master/src/locale. */
  locale: ?LocaleT,
  /** A max date that is selectable. */
  maxDate: ?Date,
  /** A min date that is selectable. */
  minDate: ?Date,
  /** A number of months rendered in the calendar. */
  monthsShown: number,
  /** Day's `click` event handler. */
  onDayClick: ({date: Date, event: Event}) => mixed,
  /** Day's `mouseover` event handler. */
  onDayMouseOver: ({date: Date, event: Event}) => mixed,
  /** Day's `mouseleave` event handler. */
  onDayMouseLeave: ({date: Date, event: Event}) => mixed,
  /** Event handler that is called when the current rendered month is changed. */
  onMonthChange: ({date: Date}) => mixed,
  /** Event handler that is called when the current rendered month's year is changed. */
  onYearChange: ({date: Date}) => mixed,
  /** Event handler that is called when a new date is selected. */
  onChange: onChangeT,
  overrides?: DatepickerOverridesT<{}>,
  /** Defines if dates outside of the range of the current month are displayed. */
  peekNextMonth: boolean,
  /** Defines if tabbing inside the calendar is circled within it. */
  trapTabbing: boolean,
  /** Currently selected date. */
  value: ?Date | Array<Date>,
};

export type HeaderPropsT = CalendarPropsT & {
  date: Date,
};

export type DatepickerPropsT = CalendarPropsT & {
  'aria-label': ?string,
  'aria-labelledby': ?string,
  'aria-describedby': ?string,
  disabled: boolean,
  /** Renders UI in 'error' state. */
  error: boolean,
  placeholder: string,
  required: boolean,
  formatDisplayValue: ?(
    date: ?Date | Array<Date>,
    formatString: string,
  ) => string,
  formatString: string,
  /** Where to mount the popover */
  mountNode?: HTMLElement,
  /** Called when calendar is closed */
  onClose?: () => mixed,
};

export type SharedStylePropsT = {
  $date: Date,
  $disabled: boolean,
  $isHighlighted: boolean,
  $isHovered: boolean,
  $outsideMonth: boolean,
  $pseudoHighlighted: boolean,
  $pseudoSelected: boolean,
  $selected: boolean,
  $startDate: boolean,
  $range: boolean,
  $hasRangeHighlighted: boolean,
  $hasRangeOnRight: boolean,
  $hasRangeSelected: boolean,
  $theme: ThemeT,
};

export type StateChangeTypeT = ?$Values<typeof STATE_CHANGE_TYPE>;

export type ContainerStateT = {
  /** Selected `Date`. If `range` is set, `value` is an array of 2 values. */
  value?: ?Date | Array<Date>,
};

export type NavigationContainerStateT = {
  // indicates a highlighted date on hover and keyboard navigation
  highlightedDate?: ?Date,
  // used to disable keyboard navigation when a month or year select
  // dropdown is opened
  isActive?: boolean,
  // last remembered highlighted date to restore
  // when keyboard navigating after a mouse moved off the cal and reset
  // highlightedDate value
  lastHighlightedDate?: Date,
};

export type StateReducerT = (
  stateType: StateChangeTypeT,
  nextState: ContainerStateT,
  currentState: ContainerStateT,
) => ContainerStateT;

export type NavigationContainerStateReducerT = (
  stateType: StateChangeTypeT,
  nextState: NavigationContainerStateT,
  currentState: NavigationContainerStateT,
) => NavigationContainerStateT;

export type StatefulContainerPropsT<T> = {
  children: T => React.Node,
  /** Initial state of an uncontrolled datepicker component. */
  initialState: ContainerStateT,
  /** A state change handler. */
  stateReducer: StateReducerT,
  /** Event handler that is called when a new date is selected. */
  onChange?: onChangeT,
};

export type NavigationContainerPropsT = {
  children: CalendarPropsT => React.Node,
  range?: boolean,
  highlightedDate?: ?Date,
  /** Day's `mouseover` event handler. */
  onDayMouseOver: (params: {date: Date, event: Event}) => mixed,
  /** Day's `mouseleave` event handler. */
  onDayMouseLeave: (params: {date: Date, event: Event}) => mixed,
  /** Event handler that is called when a new date is selected. */
  onChange: onChangeT,
  /** Event handler that is called when the current rendered month is changed. */
  onMonthChange?: ({date: Date}) => mixed,
  /** Event handler that is called when the current rendered year is changed. */
  onYearChange?: ({date: Date}) => mixed,
  /** Selected `Date`. If `range` is set, `value` is an array of 2 values. */
  value?: ?Date | Array<Date>,
  stateReducer: NavigationContainerStateReducerT,
  trapTabbing: boolean,
};

export type StatefulDatepickerPropsT<T> = $Diff<
  StatefulContainerPropsT<T>,
  {
    children: T => React.Node,
  },
>;

export type TimePickerPropsT = {
  /** Render options in AM/PM format or 24 hour format. Defaults to 12 hour. */
  format?: '12' | '24',
  /** Callback for when time selection changes. */
  onChange?: Date => mixed,
  overrides?: {
    Select?: OverrideT<*>,
  },
  /** Amount of seconds between each option time. Defaults to 900 (15 minutes). */
  step?: number,
  /**
   * Optional value that can be provided to fully control the component. If not provided, TimePicker
   * will manage state internally. Expects a value in seconds. E.g. 3600 = 01:00.
   */
  value?: Date,
};
export type TimePickerStateT = {
  /** List of times (in seconds) displayed in the dropdown menu. */
  steps: number[],
  /** Internal value of the selected time as an integer since midnight (0) */
  value: ?number,
};

export type TimezonePickerStateT = {
  /** List of timezones from the IANA database. */
  timezones: OptionT[],
  /** Internal value provided to the select component. */
  value: ?ValueT,
};
export type TimezonePickerPropsT = {
  /**
   * If not provided, defaults to new Date(). Important to note that the timezone picker only
   * displays options related to the provided date. Take Pacific Time for example. On March 9th,
   * Pacific Time equates to the more specific Pacific Standard Time. On March 10th, it operates on
   * Pacific Daylight Time. The timezone picker will never display PST and PDT together. If you need
   * exact specificity, provide a date. Otherwise it will default to the relevant timezone at render.
   */
  date?: Date,
  /**
   * Customize the option's label. Useful for translations and optionally mapping from
   * 'America/Los_Angeles' to 'Pacific Time'.
   */
  mapLabels?: OptionT => React.Node,
  /** Callback for when the timezone selection changes. Follows same pattern as Select component. */
  onChange?: (params: OnChangeParamsT) => mixed,
  overrides?: {Select?: OverrideT<*>},
  /**
   * Optional value that can be provided to fully control the component. If not provided,
   * TimezonePicker will manage state internally.
   */
  value?: ValueT,
};
