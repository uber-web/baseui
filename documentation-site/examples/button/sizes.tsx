import * as React from 'react';
import {useStyletron} from 'baseui';
import {Button, SIZE} from 'baseui/button';

export default () => {
  const [useCss, theme] = useStyletron();
  const space = useCss({marginBottom: theme.sizing.scale300});
  return (
    <React.Fragment>
      <Button size={SIZE.compact}>Compact size</Button>
      <div className={space} />
      <Button size={SIZE.default}>Default size</Button>
      <div className={space} />
      <Button size={SIZE.large}>Large size</Button>
    </React.Fragment>
  );
};
