/*
Copyright (c) 2018-2019 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/

/* eslint-env node */
/* eslint-disable flowtype/require-valid-file-annotation */

const {mount, analyzeAccessibility} = require('../../../e2e/helpers');

const selectors = {
  input: 'input[data-test="e2e"]',
};

describe('input', () => {
  it('passes basic a11y tests', async () => {
    await mount(page, 'input');
    await page.waitFor(selectors.input);
    const accessibilityReport = await analyzeAccessibility(page);
    expect(accessibilityReport).toHaveNoAccessibilityIssues();
  });

  it('preset value is displayed', async () => {
    await mount(page, 'input');
    await page.waitFor(selectors.input);
    const value = await page.$eval(selectors.input, input => input.value);
    expect(value).toBe('uber');
  });

  it('entered value is displayed', async () => {
    await mount(page, 'input');
    await page.waitFor(selectors.input);

    await page.keyboard.type('_good');

    const value = await page.$eval(selectors.input, input => input.value);
    expect(value).toBe('uber_good');
  });
});
