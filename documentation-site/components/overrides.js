/*
Copyright (c) 2018 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/

/* eslint-disable flowtype/require-valid-file-annotation */

import React from 'react';
import {Block} from 'baseui/block';
import {Card, StyledBody} from 'baseui/card';
import {Radio, RadioGroup} from 'baseui/radio';
import {DocLink} from './markdown-elements';
import {trackEvent} from '../helpers/ga';

const isStyledExport = exportName => exportName.startsWith('Styled');
const getOverrideName = exportName => exportName.replace('Styled', '');
const getOverrides = (component, blacklisted, whitelisted) => {
  if (whitelisted) return whitelisted.sort();
  return component
    ? Object.keys(component)
        .filter(isStyledExport)
        .map(getOverrideName)
        .filter(key => !blacklisted.includes(key))
        .sort()
    : [];
};

class Overrides extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // select the first export by default
      highlighted: getOverrides(
        props.component,
        props.blacklisted,
        props.whitelisted,
      )[0],
    };
  }
  render() {
    const {component, renderExample, name} = this.props;
    const overrides = getOverrides(
      component,
      this.props.blacklisted,
      this.props.whitelisted,
    );
    return (
      <Card
        overrides={{
          Root: {
            style: () => ({
              maxWidth: '776px',
            }),
          },
        }}
      >
        <StyledBody>
          <Block as="p" font="font400">
            Additionally, you can{' '}
            <DocLink href="/theming/understanding-overrides">
              fully customize
            </DocLink>{' '}
            any part of the <strong>{name}</strong> through the{' '}
            <strong>overrides</strong> prop. The {name} consists of multiple
            subcomponents that are listed bellow and you can override each one
            of them. To help you identify the names of these subcomponents,{' '}
            <strong>you can highlight them through this selector:</strong>
          </Block>
          <RadioGroup
            name="highlight an override"
            value={this.state.highlighted}
            onChange={e => {
              this.setState({highlighted: e.target.value});
              trackEvent('overrides_inspector', `${name}:${e.target.value}`);
            }}
          >
            {overrides.map(override => (
              <Radio key={override} value={override}>
                {override}
              </Radio>
            ))}
          </RadioGroup>
          <Block marginTop="scale900">
            {renderExample({
              overrides: {
                [this.state.highlighted]: {
                  style: {
                    outline: '3px solid #FFE1A5',
                    backgroundColor: '#FEF3EC',
                  },
                },
              },
            })}
          </Block>
        </StyledBody>
      </Card>
    );
  }
}

Overrides.defaultProps = {
  blacklisted: [],
};

export default Overrides;
