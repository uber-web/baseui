/*
Copyright (c) 2018-2019 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
// @flow
import type {FontTokensT, TypographyT} from '../types.js';

export const fontTokens: FontTokensT = {
  primaryFontFamily:
    'system-ui, "Helvetica Neue", Helvetica, Arial, sans-serif',
};

// color constants
export default (primitives: FontTokensT = fontTokens): TypographyT => ({
  font100: {
    fontFamily: primitives.primaryFontFamily,
    fontSize: '12px',
    fontWeight: 'normal',
    lineHeight: '20px',
  },
  font150: {
    fontFamily: primitives.primaryFontFamily,
    fontSize: '12px',
    fontWeight: 500,
    lineHeight: '20px',
  },
  font200: {
    fontFamily: primitives.primaryFontFamily,
    fontSize: '14px',
    fontWeight: 'normal',
    lineHeight: '20px',
  },
  font250: {
    fontFamily: primitives.primaryFontFamily,
    fontSize: '14px',
    fontWeight: 500,
    lineHeight: '20px',
  },
  font300: {
    fontFamily: primitives.primaryFontFamily,
    fontSize: '16px',
    fontWeight: 'normal',
    lineHeight: '24px',
  },
  font350: {
    fontFamily: primitives.primaryFontFamily,
    fontSize: '16px',
    fontWeight: 500,
    lineHeight: '24px',
  },
  font400: {
    fontFamily: primitives.primaryFontFamily,
    fontSize: '18px',
    fontWeight: 'normal',
    lineHeight: '28px',
  },
  font450: {
    fontFamily: primitives.primaryFontFamily,
    fontSize: '18px',
    fontWeight: 500,
    lineHeight: '28px',
  },
  font550: {
    fontFamily: primitives.primaryFontFamily,
    fontSize: '20px',
    fontWeight: 500,
    lineHeight: '28px',
  },
  font650: {
    fontFamily: primitives.primaryFontFamily,
    fontSize: '24px',
    fontWeight: 500,
    lineHeight: '32px',
  },
  font750: {
    fontFamily: primitives.primaryFontFamily,
    fontSize: '28px',
    fontWeight: 500,
    lineHeight: '36px',
  },
  font850: {
    fontFamily: primitives.primaryFontFamily,
    fontSize: '32px',
    fontWeight: 500,
    lineHeight: '40px',
  },
  font950: {
    fontFamily: primitives.primaryFontFamily,
    fontSize: '36px',
    fontWeight: 500,
    lineHeight: '44px',
  },
  font1050: {
    fontFamily: primitives.primaryFontFamily,
    fontSize: '40px',
    fontWeight: 500,
    lineHeight: '52px',
  },
  font1150: {
    fontFamily: primitives.primaryFontFamily,
    fontSize: '36px',
    fontWeight: 500,
    lineHeight: '44px',
  },
  font1250: {
    fontFamily: primitives.primaryFontFamily,
    fontSize: '44px',
    fontWeight: 500,
    lineHeight: '52px',
  },
  font1350: {
    fontFamily: primitives.primaryFontFamily,
    fontSize: '52px',
    fontWeight: 500,
    lineHeight: '64px',
  },
  font1450: {
    fontFamily: primitives.primaryFontFamily,
    fontSize: '96px',
    fontWeight: 500,
    lineHeight: '112px',
  },
});
