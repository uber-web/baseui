/*
Copyright (c) 2018 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/

/*eslint-env node*/
/* eslint-disable flowtype/require-valid-file-annotation */

const {getPuppeteerUrl, analyzeAccessibility} = require('../../../e2e/helpers');

describe('button-group', () => {
  it('radio mode passes basic a11y tests', async () => {
    await page.goto(getPuppeteerUrl('button-group-radio'));
    await page.waitFor('div');
    await page.click('button');

    const accessibilityReport = await analyzeAccessibility(page);
    expect(accessibilityReport).toHaveNoAccessibilityIssues();
  });

  it('checkbox mode passes basic a11y tests', async () => {
    await page.goto(getPuppeteerUrl('button-group-checkbox'));
    await page.waitFor('div');
    await page.click('button');

    const accessibilityReport = await analyzeAccessibility(page);
    expect(accessibilityReport).toHaveNoAccessibilityIssues();
  });
});
