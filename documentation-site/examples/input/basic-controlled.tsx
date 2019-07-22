import * as React from 'react';
import {Input} from 'baseui/input';

export default class ControlledInput extends React.Component<
  {},
  {value: string},
> {
  state = {value: ''};

  render() {
    return (
      <Input
        onChange={event =>
          this.setState({value: event.target.value})
        }
        placeholder="Controlled Input"
        value={this.state.value}
      />
    );
  }
}
