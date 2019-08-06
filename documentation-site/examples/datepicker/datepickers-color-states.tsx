import React from 'react';

import {useStyletron} from 'baseui';
import {FormControl} from 'baseui/form-control';
import {FlexGrid} from 'baseui/flex-grid';
import {
  StatefulDatepicker,
  TimePicker,
  TimezonePicker,
} from 'baseui/datepicker';

export default () => {
  const [useCss, theme] = useStyletron();
  return (
    <React.Fragment>
      Disabled state
      <FlexGrid flexDirection="row">
        <div
          className={useCss({
            width: '120px',
            marginRight: theme.sizing.scale500,
          })}
        >
          <FormControl label="DatePicker">
            <StatefulDatepicker disabled />
          </FormControl>
        </div>
        <div
          className={useCss({
            width: '120px',
            marginRight: theme.sizing.scale500,
          })}
        >
          <FormControl label="TimePicker">
            <TimePicker disabled />
          </FormControl>
        </div>
        <div className={useCss({flex: 1})}>
          <FormControl label="TimezonePicker">
            <TimezonePicker disabled />
          </FormControl>
        </div>
      </FlexGrid>
      Positive state
      <FlexGrid flexDirection="row">
        <div
          className={useCss({
            width: '120px',
            marginRight: theme.sizing.scale500,
          })}
        >
          <FormControl label="DatePicker">
            <StatefulDatepicker positive />
          </FormControl>
        </div>
        <div
          className={useCss({
            width: '120px',
            marginRight: theme.sizing.scale500,
          })}
        >
          <FormControl label="TimePicker">
            <TimePicker positive />
          </FormControl>
        </div>
        <div className={useCss({flex: 1})}>
          <FormControl label="TimezonePicker">
            <TimezonePicker positive />
          </FormControl>
        </div>
      </FlexGrid>
      Error state
      <FlexGrid flexDirection="row">
        <div
          className={useCss({
            width: '120px',
            marginRight: theme.sizing.scale500,
          })}
        >
          <FormControl label="DatePicker">
            <StatefulDatepicker error />
          </FormControl>
        </div>
        <div
          className={useCss({
            width: '120px',
            marginRight: theme.sizing.scale500,
          })}
        >
          <FormControl label="TimePicker">
            <TimePicker error />
          </FormControl>
        </div>
        <div className={useCss({flex: 1})}>
          <FormControl label="TimezonePicker">
            <TimezonePicker error />
          </FormControl>
        </div>
      </FlexGrid>
    </React.Fragment>
  );
};
