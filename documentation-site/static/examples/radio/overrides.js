import * as React from 'react';
import {Block} from 'baseui/block';
import {Radio, RadioGroup} from 'baseui/radio';

export default class Stateless extends React.Component {
  state = {value: null};
  render() {
    return (
      <RadioGroup
        name="radio group"
        onChange={e => this.setState({value: e.target.value})}
        value={this.state.value}
      >
        <Radio
          overrides={{
            Label: ({$value}) => (
              <Block font="font400">Custom label for value: {$value}</Block>
            ),
            RadioMarkOuter: {
              style: ({$theme}) => ({borderColor: $theme.colors.positive}),
            },
          }}
          value="1"
        >
          First
        </Radio>
        <Radio
          overrides={{
            Label: ({$value}) => (
              <Block font="font400">Custom label for value: {$value}</Block>
            ),
            RadioMarkOuter: {
              style: ({$theme}) => ({borderColor: $theme.colors.positive}),
            },
          }}
          value="2"
        >
          Second
        </Radio>
        <Radio
          overrides={{
            Label: ({$value}) => (
              <Block font="font400">Custom label for value: {$value}</Block>
            ),
            RadioMarkOuter: {
              style: ({$theme}) => ({borderColor: $theme.colors.positive}),
            },
          }}
          value="3"
        >
          Third
        </Radio>
      </RadioGroup>
    );
  }
}
