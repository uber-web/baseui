/*
Copyright (c) 2018-2019 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/

/* eslint-env node */
/* eslint-disable flowtype/require-valid-file-annotation */

const {e2e, mount, analyzeAccessibility} = require('../../../e2e/helpers');

const selectors = {
  root: 'nav[data-test="e2e"]',
};

describe('side navigation', () => {
  e2e('a11y test error', async () => {
    await mount(page, 'nav');
    await page.waitFor(selectors.root);
    const accessibilityReport = await analyzeAccessibility(page, {
      rules: [
        {
          id: 'skip-link',
          enabled: false,
        },
      ],
    });
    expect(accessibilityReport).toHaveNoAccessibilityIssues();
  });
});
