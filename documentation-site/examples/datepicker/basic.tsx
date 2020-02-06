import * as React from 'react';
import {StatefulCalendar} from 'spaceweb/datepicker';

export default () => {
  return (
    <StatefulCalendar
      // use the 'onChange' prop to pull data from the component into your application state
      onChange={({date}) => console.log(date)}
    />
  );
};
