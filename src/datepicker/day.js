/*
Copyright (c) 2018 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
// @flow
import * as React from 'react';
import {StyledDay} from './styled-components.js';
import {
  formatDate,
  getDay,
  getMonth,
  getDate,
  isSameDay,
  isDayInRange,
  isAfter,
} from './utils/index.js';
import {getOverrides} from '../helpers/overrides.js';
import type {DayPropsT, DayStateT} from './types.js';

export default class Day extends React.Component<DayPropsT, DayStateT> {
  static defaultProps = {
    disabled: false,
    date: new Date(),
    isHighlighted: false,
    isRange: false,
    month: new Date().getMonth(),
    onClick: () => {},
    onSelect: () => {},
    onMouseOver: () => {},
    onMouseLeave: () => {},
    overrides: {},
    peekNextMonth: true,
    value: null,
  };

  state = {
    isHovered: false,
  };

  componentDidMount() {
    if (this.props.isHighlighted) {
      if (__BROWSER__) {
        document.addEventListener('keydown', this.onKeyDown);
      }
    }
  }

  componentDidUpdate(prevProps: DayPropsT) {
    if (
      this.props.isHighlighted &&
      this.props.isHighlighted !== prevProps.isHighlighted
    ) {
      if (__BROWSER__) {
        document.addEventListener('keydown', this.onKeyDown);
      }
    } else if (
      !this.props.isHighlighted &&
      this.props.isHighlighted !== prevProps.isHighlighted
    ) {
      if (__BROWSER__) {
        document.removeEventListener('keydown', this.onKeyDown);
      }
    }
  }

  componentWillUnmount() {
    if (__BROWSER__) {
      document.removeEventListener('keydown', this.onKeyDown);
    }
  }

  onSelect(selectedDate: Date) {
    const {isRange, value} = this.props;
    let date;
    if (Array.isArray(value) && isRange) {
      if (!value.length || value.length > 1) {
        date = [selectedDate];
      } else if (isAfter(selectedDate, value[0])) {
        date = [value[0], selectedDate];
      } else {
        date = [selectedDate, value[0]];
      }
    } else {
      date = selectedDate;
    }
    this.props.onSelect({date});
  }

  onKeyDown = (event: KeyboardEvent) => {
    const {isHighlighted, date, disabled} = this.props;
    if (event.key === 'Enter' && isHighlighted && !disabled) {
      event.preventDefault();
      this.onSelect(date);
    }
  };

  onClick = (event: Event) => {
    const {date, disabled} = this.props;
    if (!disabled) {
      this.props.onClick({event, date});
      this.onSelect(date);
    }
  };

  onMouseOver = (event: Event) => {
    this.setState({isHovered: true});
    this.props.onMouseOver({event, date: this.props.date});
  };

  onMouseLeave = (event: Event) => {
    this.setState({isHovered: false});
    this.props.onMouseLeave({event, date: this.props.date});
  };

  isWeekend = () => {
    const weekday = getDay(this.props.date);
    return weekday === 0 || weekday === 6;
  };

  isOutsideMonth = () => {
    return (
      this.props.month !== undefined &&
      this.props.month !== getMonth(this.props.date)
    );
  };

  isSelected() {
    const {value, date} = this.props;
    if (Array.isArray(value)) {
      return isSameDay(date, value[0]) || isSameDay(date, value[1]);
    } else {
      return isSameDay(date, value);
    }
  }

  // calculated for range case only
  isPseudoSelected() {
    const {date, value} = this.props;
    // fix flow by passing a specific arg type and remove 'Array.isArray(value)'
    if (Array.isArray(value) && value.length > 1) {
      return isDayInRange(date, value[0], value[1]);
    }
  }

  // calculated for range case only
  isPseudoHighlighted() {
    const {date, value, highlightedDate} = this.props;
    // fix flow by passing a specific arg type and remove 'Array.isArray(value)'
    if (Array.isArray(value) && highlightedDate && value[0] && !value[1]) {
      if (isAfter(highlightedDate, value[0])) {
        return isDayInRange(date, value[0], highlightedDate);
      } else {
        return isDayInRange(date, highlightedDate, value[0]);
      }
    }
  }

  getSharedProps() {
    const {date, value, highlightedDate, isRange, isHighlighted} = this.props;
    const $isHighlighted = isHighlighted;
    const $selected = this.isSelected();
    const $hasRangeHighlighted =
      Array.isArray(value) &&
      isRange &&
      value.length === 1 &&
      highlightedDate &&
      !isSameDay(value[0], highlightedDate)
        ? true
        : false;
    return {
      $date: date,
      $disabled: this.props.disabled,
      $endDate:
        (Array.isArray(value) &&
          this.props.isRange &&
          $selected &&
          isSameDay(date, value[1])) ||
        false,
      $isHovered: this.state.isHovered,
      $isHighlighted,
      $isRange: this.props.isRange,
      $hasRangeHighlighted,
      $hasRangeOnRight:
        Array.isArray(value) &&
        $hasRangeHighlighted &&
        (highlightedDate && value[0]) &&
        isAfter(highlightedDate, value[0]),
      $hasRangeSelected: Array.isArray(value) ? value.length === 2 : false,
      $highlightedDate: highlightedDate,
      $peekNextMonth: this.props.peekNextMonth,
      $pseudoHighlighted:
        this.props.isRange && !$isHighlighted && !$selected
          ? this.isPseudoHighlighted()
          : false,
      $pseudoSelected:
        this.props.isRange && !$selected ? this.isPseudoSelected() : false,
      $selected,
      $startDate:
        Array.isArray(this.props.value) && this.props.isRange && $selected
          ? isSameDay(date, this.props.value[0])
          : false,
      $outsideMonth: this.isOutsideMonth(),
    };
  }

  render() {
    const {date, peekNextMonth, overrides = {}} = this.props;
    const sharedProps = this.getSharedProps();
    const [Day, dayProps] = getOverrides(overrides.Day, StyledDay);
    return !peekNextMonth && sharedProps.$outsideMonth ? (
      <Day />
    ) : (
      // eslint-disable-next-line jsx-a11y/mouse-events-have-key-events
      <Day
        aria-label={formatDate(date, 'EEEE, MMMM do YYYY', this.props.locale)}
        role="cell"
        {...sharedProps}
        {...dayProps}
        // Adding event handlers after customers overrides in order to
        // make sure the components functions as expected
        // We can extract the handlers from props overrides
        // and call it along with internal handlers by creating an inline handler
        onClick={this.onClick}
        onMouseOver={this.onMouseOver}
        onMouseLeave={this.onMouseLeave}
      >
        {getDate(date)}
      </Day>
    );
  }
}
