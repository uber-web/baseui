// @flow
import React from 'react';
import {PinCode} from 'baseui/pin-code';

export default function() {
  const [values, setValues] = React.useState(['', '', '', '']);
  return (
    <PinCode
      values={values}
      manageFocus={false}
      onChange={({values, event}) => {
        alert(event.target);
      }}
    />
  );
}
