/*
Copyright (c) 2018-2019 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
// @flow
import {styled} from '../styles/index.js';
import {SIZE} from './constants.js';
import type {SharedPropsT} from './types.js';

function getFont(size, typography) {
  return {
    [SIZE.compact]: typography.font200,
    [SIZE.default]: typography.font300,
    [SIZE.large]: typography.font400,
  }[size];
}

export const Root = styled('div', props => {
  const {
    $size,
    $theme: {colors, typography},
  } = props;
  return {
    ...getFont($size, typography),
    color: colors.foreground,
    display: 'flex',
    width: '100%',
  };
});

// InputEnhancer

function getInputEnhancerPadding($size, sizing) {
  return {
    [SIZE.compact]: {
      paddingRight: sizing.scale400,
      paddingLeft: sizing.scale400,
    },
    [SIZE.default]: {
      paddingRight: sizing.scale500,
      paddingLeft: sizing.scale500,
    },
    [SIZE.large]: {
      paddingRight: sizing.scale600,
      paddingLeft: sizing.scale600,
    },
  }[$size];
}

function getInputEnhancerColors(
  $disabled,
  $isFocused,
  $error,
  $positive,
  colors,
) {
  if ($disabled) {
    return {
      color: colors.inputEnhancerTextDisabled,
      backgroundColor: colors.inputEnhancerFillDisabled,
    };
  }

  if ($isFocused) {
    return {
      color: colors.foregroundInv,
      backgroundColor: colors.foreground,
    };
  }

  if ($error) {
    return {
      color: colors.foreground,
      backgroundColor: colors.inputBorderError,
    };
  }

  if ($positive) {
    return {
      color: colors.foreground,
      backgroundColor: colors.inputBorderPositive,
    };
  }

  return {
    color: colors.foreground,
    backgroundColor: colors.inputEnhancerFill,
  };
}

export const InputEnhancer = styled('div', props => {
  const {
    $size,
    $disabled,
    $isFocused,
    $error,
    $positive,
    $theme: {colors, sizing, typography, animation},
  } = props;
  return {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transitionProperty: 'color, background-color',
    transitionDuration: animation.timing100,
    transitionTimingFunction: animation.easeOutCurve,
    ...getFont($size, typography),
    ...getInputEnhancerPadding($size, sizing),
    ...getInputEnhancerColors($disabled, $isFocused, $error, $positive, colors),
  };
});

// InputContainer

function getInputContainerColors(
  $disabled,
  $isFocused,
  $error,
  $positive,
  colors,
) {
  if ($disabled) {
    return {
      color: colors.inputTextDisabled,
      borderColor: colors.inputFillDisabled,
      backgroundColor: colors.inputFillDisabled,
    };
  }

  if ($isFocused) {
    return {
      color: colors.foreground,
      borderColor: colors.foreground,
      backgroundColor: colors.inputFillActive,
    };
  }

  if ($error) {
    return {
      color: colors.foreground,
      borderColor: colors.inputBorderError,
      backgroundColor: colors.inputFillError,
    };
  }

  if ($positive) {
    return {
      color: colors.foreground,
      borderColor: colors.inputBorderPositive,
      backgroundColor: colors.inputFillPositive,
    };
  }

  return {
    color: colors.foreground,
    borderColor: colors.inputFill,
    backgroundColor: colors.inputFill,
  };
}

export const getInputContainerStyles = (props: SharedPropsT) => {
  const {
    $isFocused,
    $error,
    $disabled,
    $positive,
    $size,
    $theme: {colors, typography, animation},
  } = props;
  return {
    boxSizing: 'border-box',
    display: 'flex',
    width: '100%',
    borderWidth: '2px',
    borderStyle: 'solid',
    transitionProperty: 'border, background-color',
    transitionDuration: animation.timing100,
    transitionTimingFunction: animation.easeOutCurve,
    ...getFont($size, typography),
    ...getInputContainerColors(
      $disabled,
      $isFocused,
      $error,
      $positive,
      colors,
    ),
  };
};

export const InputContainer = styled('div', getInputContainerStyles);

// Input

function getInputPadding(size, sizing) {
  return {
    [SIZE.compact]: {
      paddingTop: sizing.scale200,
      paddingBottom: sizing.scale200,
      paddingLeft: sizing.scale300,
      paddingRight: sizing.scale300,
    },
    [SIZE.default]: {
      paddingTop: sizing.scale400,
      paddingBottom: sizing.scale400,
      paddingLeft: sizing.scale500,
      paddingRight: sizing.scale500,
    },
    [SIZE.large]: {
      paddingTop: sizing.scale600,
      paddingBottom: sizing.scale600,
      paddingLeft: sizing.scale600,
      paddingRight: sizing.scale600,
    },
  }[size];
}

function getInputColors($disabled, $isFocused, $error, colors) {
  if ($disabled) {
    return {
      color: colors.foregroundAlt,
      caretColor: colors.foreground,
      '::placeholder': {
        color: colors.inputTextDisabled,
      },
    };
  }

  return {
    color: colors.foreground,
    caretColor: colors.foreground,
    '::placeholder': {
      color: colors.foregroundAlt,
    },
  };
}

export const getInputStyles = (props: SharedPropsT) => {
  const {
    $disabled,
    $isFocused,
    $error,
    $size,
    $theme: {colors, sizing, typography},
  } = props;
  return {
    boxSizing: 'border-box',
    backgroundColor: 'transparent',
    borderWidth: '0',
    borderStyle: 'none',
    outline: 'none',
    width: '100%',
    maxWidth: '100%',
    cursor: $disabled ? 'not-allowed' : 'text',
    ...getFont($size, typography),
    ...getInputPadding($size, sizing),
    ...getInputColors($disabled, $isFocused, $error, colors),
  };
};

export const Input = styled('input', getInputStyles);
