// @flow
import React, {useState} from 'react';
import {useStyletron} from 'baseui';
import {TimePicker} from 'baseui/datepicker';
import {FormControl} from 'baseui/form-control';

export default () => {
  const [useCss] = useStyletron();
  const [twelveHourTime, setTwelveHourTime] = useState(null);
  const [twentyFourHourTime, setTwentyFourHourTime] = useState(
    null,
  );
  const [creatableTime, setCreatableTime] = useState(null);

  return (
    <div className={useCss({width: '120px'})}>
      <FormControl label="12 hour format">
        <TimePicker
          value={twelveHourTime}
          onChange={setTwelveHourTime}
        />
      </FormControl>
      <FormControl label="24 hour format">
        <TimePicker
          value={twentyFourHourTime}
          onChange={setTwentyFourHourTime}
          format="24"
          step={1800}
        />
      </FormControl>
      <FormControl label="Creatable times">
        <TimePicker
          value={creatableTime}
          onChange={setCreatableTime}
          creatable
          step={900}
        />
      </FormControl>
    </div>
  );
};
