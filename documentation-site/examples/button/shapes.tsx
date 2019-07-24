import * as React from 'react';
import {Button, SHAPE} from 'baseui/button';
import {Upload} from 'baseui/icon';

export default () => (
  <React.Fragment>
    <p>
      <Button>Default shape</Button>
    </p>
    <p>
      <Button shape={SHAPE.square}>
        <Upload />
      </Button>
    </p>
    <p>
      <Button shape={SHAPE.round}>
        <Upload />
      </Button>
    </p>
  </React.Fragment>
);
