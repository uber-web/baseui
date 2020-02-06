import * as React from 'react';
import {
  Display1,
  Display2,
  Display3,
  Display4,
} from 'spaceweb/typography';

const textString =
  'We ignite opportunity by setting the world in motion.';

export default () => (
  <React.Fragment>
    <Display1 marginBottom="scale500">{textString}</Display1>
    <Display2 marginBottom="scale500">{textString}</Display2>
    <Display3 marginBottom="scale500">{textString}</Display3>
    <Display4>{textString}</Display4>
  </React.Fragment>
);
