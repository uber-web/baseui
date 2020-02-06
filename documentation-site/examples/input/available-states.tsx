import * as React from 'react';
import {Input} from 'spaceweb/input';

export default () => (
  <React.Fragment>
    <Input placeholder="simple" />
    <br />
    <Input value="uber" />
    <br />
    <Input placeholder="Input in an error state" error />
    <br />
    <Input placeholder="Input in an positive state" positive />
    <br />
    <Input placeholder="Disabled input" disabled />
  </React.Fragment>
);
