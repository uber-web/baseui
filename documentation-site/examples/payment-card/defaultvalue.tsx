import * as React from 'react';
import {PaymentCard} from 'spaceweb/payment-card';

export default () => {
  const [value, setValue] = React.useState('4111111111111111');
  return (
    <PaymentCard
      onChange={event =>
        setValue((event.target as HTMLInputElement).value)
      }
      placeholder="Please enter your credit card number..."
      value={value}
    />
  );
};
