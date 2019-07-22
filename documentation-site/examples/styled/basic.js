import * as React from 'react';
import {styled} from 'baseui';

const BlueDiv = styled<{}>('div', ({$theme}) => ({
  color: $theme.colors.primary,
}));

export default () => <BlueDiv>This is a blue div</BlueDiv>;
