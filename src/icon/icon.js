// @flow

import React from 'react';
import {StyledIcon} from './styles';
import type {IconProps} from './types';

export default function Icon(props: IconProps) {
  const {alt, children, ...rest} = props;
  const title = !alt ? null : <title>{alt}</title>;

  return (
    <StyledIcon {...rest}>
      {title}
      {children}
    </StyledIcon>
  );
}

Icon.defaultProps = {
  // TODO: Figure out why eslint is complaining about this.
  // eslint-disable-next-line react/default-props-match-prop-types
  alt: null,
};
