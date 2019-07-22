import * as React from 'react';
import {Radio, RadioGroup} from 'baseui/radio';

export default class Stateless extends React.Component<
  {},
  {value: string},
> {
  state = {value: '1'};
  render() {
    return (
      <RadioGroup
        align="horizontal"
        name="radio group"
        onChange={e => this.setState({value: e.target.value})}
        value={this.state.value}
      >
        <Radio value="1">First</Radio>
        <Radio value="2">Second</Radio>
        <Radio value="3">Third</Radio>
      </RadioGroup>
    );
  }
}
