import React, {useState} from 'react';

import {useStyletron} from 'baseui';
import {FormControl} from 'spaceweb/form-control';
import {Datepicker} from 'spaceweb/datepicker';
import {TimezonePicker} from 'spaceweb/timezonepicker';
import {TimePicker} from 'spaceweb/timepicker';

const DATE = new Date(2019, 3, 1, 12, 0, 0);

export default () => {
  const [css, theme] = useStyletron();
  const [date, setDate] = useState(DATE);
  const [zone, setZone] = useState(null);

  return (
    <div className={css({display: 'flex'})}>
      <div
        className={css({
          width: '120px',
          marginRight: theme.sizing.scale300,
        })}
      >
        <FormControl label="Date" caption="YYYY/MM/DD">
          <Datepicker
            value={date}
            onChange={({date}) => setDate(date as Date)}
            timeSelectStart
          />
        </FormControl>
      </div>

      <div
        className={css({
          width: '120px',
          marginRight: theme.sizing.scale300,
        })}
      >
        <FormControl label="Time" caption="HH:MM">
          <TimePicker value={date} onChange={setDate} />
        </FormControl>
      </div>

      <div
        className={css({
          width: '340px',
        })}
      >
        <FormControl label="Timezone">
          <TimezonePicker
            date={date}
            value={zone ? (zone as any).id : undefined}
            onChange={setZone as any}
          />
        </FormControl>
      </div>
    </div>
  );
};
