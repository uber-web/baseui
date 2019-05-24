/*
Copyright (c) 2018-2019 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
// @flow
import * as React from 'react';
import ArrowRight from '../icon/arrow-right.js';
import ArrowLeft from '../icon/arrow-left.js';
import TriangleDown from '../icon/triangle-down.js';
import {StatefulMenu} from '../menu/index.js';
import {StatefulPopover} from '../popover/index.js';
import {LocaleContext} from '../locale/index.js';
import {
  StyledCalendarHeader,
  StyledPrevButton,
  StyledNextButton,
  StyledMonthHeader,
  StyledDay,
  StyledMonthYearSelectButton,
  StyledMonthYearSelectIconContainer,
} from './styled-components.js';
import {
  addDays,
  addMonths,
  getMonth,
  getMonthInLocale,
  getStartOfWeek,
  getWeekdayMinInLocale,
  getYear,
  isAfter,
  isBefore,
  monthDisabledBefore,
  monthDisabledAfter,
  setMonth,
  setYear,
  subMonths,
} from './utils/index.js';
import {WEEKDAYS} from './constants.js';
import {getOverrides, mergeOverrides} from '../helpers/overrides.js';
import type {HeaderPropsT} from './types.js';
import type {LocaleT} from '../locale/types.js';

const navBtnStyle = ({$theme}) => ({
  cursor: 'pointer',
});

const MIN_YEAR = 2000;
const MAX_YEAR = 2030;

function yearMonthToId(year, month) {
  return `${year}-${month}`;
}

function idToYearMonth(id) {
  return id.split('-').map(Number);
}

export default class CalendarHeader extends React.Component<HeaderPropsT> {
  static defaultProps = {
    date: new Date(),
    locale: null,
    maxDate: null,
    minDate: null,
    onYearChange: () => {},
    overrides: {},
  };

  handleMonthChange = ({value}: {value: Array<{id: number}>}) => {
    if (this.props.onMonthChange) {
      // $FlowFixMe
      this.props.onMonthChange({date: setMonth(this.props.date, value[0].id)});
    }
  };

  handleYearChange = ({value}: {value: Array<{id: number}>}) => {
    if (this.props.onYearChange) {
      // $FlowFixMe
      this.props.onYearChange({date: setYear(this.props.date, value[0].id)});
    }
  };

  increaseMonth = () => {
    if (this.props.onMonthChange) {
      // $FlowFixMe
      this.props.onMonthChange({date: addMonths(this.props.date, 1)});
    }
  };

  decreaseMonth = () => {
    if (this.props.onMonthChange) {
      // $FlowFixMe
      this.props.onMonthChange({date: subMonths(this.props.date, 1)});
    }
  };

  renderPreviousMonthButton = ({locale}: {locale: LocaleT}) => {
    const {date, overrides = {}} = this.props;
    const allPrevDaysDisabled = monthDisabledBefore(date, this.props);

    let isDisabled = false;
    if (allPrevDaysDisabled) {
      isDisabled = true;
    }
    const nextMonth = subMonths(date, 1);
    if (this.props.minDate) {
      if (isBefore(nextMonth, this.props.minDate)) {
        isDisabled = true;
      }
    } else {
      if (getYear(nextMonth) < MIN_YEAR) {
        isDisabled = true;
      }
    }

    const [PrevButton, prevButtonProps] = getOverrides(
      overrides.PrevButton,
      StyledPrevButton,
    );
    const [PrevButtonIcon, prevButtonIconProps] = getOverrides(
      overrides.PrevButtonIcon,
      ArrowLeft,
    );
    let clickHandler = this.decreaseMonth;
    if (allPrevDaysDisabled) {
      clickHandler = null;
    }
    return (
      <PrevButton
        aria-label={locale.datepicker.previousMonth}
        tabIndex={0}
        onClick={clickHandler}
        disabled={isDisabled}
        $disabled={isDisabled}
        {...prevButtonProps}
      >
        <PrevButtonIcon
          overrides={{
            Svg: {
              style: navBtnStyle,
            },
          }}
          {...prevButtonIconProps}
        />
      </PrevButton>
    );
  };

  renderNextMonthButton = ({locale}: {locale: LocaleT}) => {
    const {date, overrides = {}} = this.props;
    const allNextDaysDisabled = monthDisabledAfter(date, this.props);

    let isDisabled = false;
    if (allNextDaysDisabled) {
      isDisabled = true;
    }
    const nextMonth = addMonths(date, 1);
    if (this.props.maxDate) {
      if (isAfter(nextMonth, this.props.maxDate)) {
        isDisabled = true;
      }
    } else {
      if (getYear(nextMonth) > MAX_YEAR) {
        isDisabled = true;
      }
    }

    const [NextButton, nextButtonProps] = getOverrides(
      overrides.NextButton,
      StyledNextButton,
    );
    const [NextButtonIcon, nextButtonIconProps] = getOverrides(
      overrides.NextButtonIcon,
      ArrowRight,
    );

    let clickHandler = this.increaseMonth;
    // The other option is to always provide a click handler and let customers
    // override its functionality based on the `$allPrevDaysDisabled` prop
    // in a custom NextButton component override
    // Their options would be to render `null` or not apply the components handler
    // on click or do nothing
    if (allNextDaysDisabled) {
      clickHandler = null;
    }
    return (
      <NextButton
        aria-label={locale.datepicker.nextMonth}
        tabIndex={0}
        onClick={clickHandler}
        disabled={isDisabled}
        $disabled={isDisabled}
        {...nextButtonProps}
      >
        <NextButtonIcon
          overrides={{Svg: {style: navBtnStyle}}}
          {...nextButtonIconProps}
        />
      </NextButton>
    );
  };

  renderMonthYearDropdown = () => {
    const {date, locale, maxDate, minDate, overrides = {}} = this.props;
    const [MonthYearSelectButton, monthYearSelectButtonProps] = getOverrides(
      overrides.MonthYearSelectButton,
      StyledMonthYearSelectButton,
    );
    const [
      MonthYearSelectIconContainer,
      monthYearSelectIconContainerProps,
    ] = getOverrides(
      overrides.MonthYearSelectIconContainer,
      StyledMonthYearSelectIconContainer,
    );
    const [OverriddenStatefulPopover, popoverProps] = getOverrides(
      overrides.MonthYearSelectStatefulPopover,
      StatefulPopover,
    );
    const [OverriddenStatefulMenu, menuProps] = getOverrides(
      overrides.MonthYearSelectStatefulMenu,
      StatefulMenu,
    );
    const menuOverrides = mergeOverrides(
      {List: {style: {height: '257px'}}},
      // $FlowFixMe
      menuProps && menuProps.overrides,
    );
    // $FlowFixMe
    menuProps.overrides = menuOverrides;

    const MONTHS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
    const maxYear = maxDate ? getYear(maxDate) : MAX_YEAR;
    const minYear = minDate ? getYear(minDate) : MIN_YEAR;
    const items = [];
    for (let i = minYear; i <= maxYear; i++) {
      MONTHS.forEach(month => {
        items.push({
          id: yearMonthToId(i, month),
          label: `${getMonthInLocale(month, locale)} ${i}`,
        });
      });
    }

    const initialIndex = items.findIndex(item => {
      return item.id === yearMonthToId(getYear(date), getMonth(date));
    });

    return (
      <OverriddenStatefulPopover
        placement="bottom"
        content={({close}) => (
          <OverriddenStatefulMenu
            initialState={{highlightedIndex: initialIndex, isFocused: true}}
            items={items}
            onItemSelect={({item}) => {
              const [year, month] = idToYearMonth(item.id);
              date.setFullYear(year, month);
              this.props.onMonthChange && this.props.onMonthChange({date});
              this.props.onYearChange && this.props.onYearChange({date});
              close();
            }}
            {...menuProps}
          />
        )}
        {...popoverProps}
      >
        <MonthYearSelectButton {...monthYearSelectButtonProps}>
          {`${getMonthInLocale(getMonth(date), locale)} ${getYear(date)}`}
          <MonthYearSelectIconContainer {...monthYearSelectIconContainerProps}>
            <TriangleDown />
          </MonthYearSelectIconContainer>
        </MonthYearSelectButton>
      </OverriddenStatefulPopover>
    );
  };

  render() {
    const {overrides = {}} = this.props;
    const [CalendarHeader, calendarHeaderProps] = getOverrides(
      overrides.CalendarHeader,
      StyledCalendarHeader,
    );
    const [MonthHeader, monthHeaderProps] = getOverrides(
      overrides.MonthHeader,
      StyledMonthHeader,
    );
    const [WeekdayHeader, weekdayHeaderProps] = getOverrides(
      overrides.WeekdayHeader,
      StyledDay,
    );

    const startOfWeek = getStartOfWeek(this.props.date, this.props.locale);
    return (
      <LocaleContext.Consumer>
        {locale => (
          <>
            <CalendarHeader {...calendarHeaderProps}>
              {this.renderPreviousMonthButton({locale})}
              {this.renderMonthYearDropdown()}
              {this.renderNextMonthButton({locale})}
            </CalendarHeader>
            <MonthHeader role="presentation" {...monthHeaderProps}>
              {WEEKDAYS.map(offset => {
                const day = addDays(startOfWeek, offset);
                return (
                  <WeekdayHeader $isHeader key={offset} {...weekdayHeaderProps}>
                    {getWeekdayMinInLocale(day, this.props.locale)}
                  </WeekdayHeader>
                );
              })}
            </MonthHeader>
          </>
        )}
      </LocaleContext.Consumer>
    );
  }
}
