import * as React from 'react';
import {Paragraph1} from 'baseui/typography';
import {Radio, RadioGroup} from 'baseui/radio';

export default class Stateless extends React.Component {
  state = {value: '1'};
  render() {
    return (
      <RadioGroup
        name="radio group"
        onChange={e =>
          this.setState({
            value: (e.target as HTMLInputElement).value,
          })
        }
        value={this.state.value}
      >
        <Radio
          overrides={{
            Label: ({$value}) => (
              <Paragraph1>
                Custom label for value: {$value}
              </Paragraph1>
            ),
            RadioMarkOuter: {
              style: ({$theme}) => ({
                backgroundColor: $theme.colors.positive,
              }),
            },
          }}
          value="1"
        >
          First
        </Radio>
        <Radio
          overrides={{
            Label: ({$value}) => (
              <Paragraph1>
                Custom label for value: {$value}
              </Paragraph1>
            ),
            RadioMarkOuter: {
              style: ({$theme}) => ({
                backgroundColor: $theme.colors.positive,
              }),
            },
          }}
          value="2"
        >
          Second
        </Radio>
        <Radio
          overrides={{
            Label: ({$value}) => (
              <Paragraph1>
                Custom label for value: {$value}
              </Paragraph1>
            ),
            RadioMarkOuter: {
              style: ({$theme}) => ({
                backgroundColor: $theme.colors.positive,
              }),
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
