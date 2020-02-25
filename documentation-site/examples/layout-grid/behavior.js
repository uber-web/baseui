// @flow

import * as React from 'react';
import {useStyletron} from 'baseui';
import {Grid, Cell, BEHAVIOR} from 'baseui/layout-grid';

export default () => (
  <Outer>
    <Grid behavior={BEHAVIOR.fluid}>
      <Cell span={12}>
        <Inner>1</Inner>
      </Cell>
    </Grid>
  </Outer>
);

const Outer = ({children}: {children: React.Node}) => {
  const [css, theme] = useStyletron();
  return (
    <div
      className={css({
        background: theme.colors.accent100,
      })}
    >
      {children}
    </div>
  );
};

const Inner = ({children}: {children: React.Node}) => {
  const [css, theme] = useStyletron();
  return (
    <div
      className={css({
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: theme.colors.accent200,
        color: theme.colors.accent700,
        padding: '.25rem',
      })}
    >
      {children}
    </div>
  );
};
