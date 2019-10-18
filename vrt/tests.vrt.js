/*
Copyright (c) 2018-2019 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/

/* eslint-disable flowtype/require-valid-file-annotation */
/* eslint-env node */

const {configureToMatchImageSnapshot} = require('jest-image-snapshot');
const {mount} = require('../e2e/helpers');
const config = require('./config.js');
const {getAllScenarioNames} = require('./utils.js');

const toMatchImageSnapshot = configureToMatchImageSnapshot({
  customDiffDir: '__artifacts__',
  diffDirection: 'vertical',
});

expect.extend({toMatchImageSnapshot});

const allScenarios = [
  ...getAllScenarioNames(),
  ...getAllScenarioNames().map(scenarioName => `${scenarioName}-dark`),
];

describe('visual regression tests', () => {
  allScenarios.forEach(scenarioName => {
    const {fullPage = false, interactions = [], selector = null, skip = false} =
      config[scenarioName] || {};

    if (skip) return;

    it(scenarioName, async () => {
      const root = await prepare({
        page,
        scenarioName,
      });

      await testState({
        selector,
        fullPage,
        root,
        scenarioName,
      });
    });

    const mobileScenarioName = `${scenarioName}--mobile`;

    it(mobileScenarioName, async () => {
      const root = await prepare({
        page,
        scenarioName,
        isMobile: true,
      });

      await testState({
        selector,
        fullPage,
        root,
        scenarioName: mobileScenarioName,
      });
    });

    if (interactions.length > 0) {
      interactions.forEach(interaction => {
        const testName = `${scenarioName}__${interaction.name}`;
        const fullPage = Object.prototype.hasOwnProperty.call(
          interaction,
          'fullPage',
        )
          ? interaction.fullPage
          : fullPage;
        const selector = Object.prototype.hasOwnProperty.call(
          interaction,
          'selector',
        )
          ? interaction.selector
          : selector;

        it(testName, async () => {
          const root = await prepare({
            page,
            scenarioName,
          });

          // run interaction script
          await interaction.behavior(page);

          // let things settle down
          await page.waitFor(500);

          await testState({
            selector,
            fullPage,
            root,
            scenarioName: testName,
          });
        });

        const mobileScenarioName = `${testName}--mobile`;

        it(mobileScenarioName, async () => {
          const root = await prepare({
            page,
            scenarioName,
            isMobile: true,
          });

          // run interaction script
          await interaction.behavior(page);

          // let things settle down
          await page.waitFor(500);

          await testState({
            selector,
            fullPage,
            root,
            scenarioName: testName,
          });
        });
      });
    }
  });
});

async function testState({selector, fullPage, root, scenarioName}) {
  let image;
  if (selector) {
    const elementHandle = page.$(selector);
    image = await elementHandle.screenshot();
  } else if (fullPage) {
    image = await page.screenshot({fullPage: true});
  } else {
    // sometimes the root node will have a height of 0
    // in this case, fallback to taking a picture of the entire page
    try {
      image = await root.screenshot();
    } catch (er) {
      console.log(
        `Could not take a snapshot of root element. Please update snapshot config.`,
      );
      console.log(er);
      image = await page.screenshot({fullPage: true});
    }
  }

  expect(image).toMatchImageSnapshot({
    customSnapshotIdentifier: scenarioName,
  });
}

async function prepare({page, scenarioName, isMobile}) {
  // load page
  await mount(page, scenarioName);

  // set viewport for mobile - iPhone X
  if (isMobile) {
    await page.setViewport({
      width: 375,
      height: 812,
    });
  } else {
    await page.setViewport({
      width: 1024,
      height: 768,
    });
  }

  // freeze animations and disable caret blinking
  await page.addStyleTag({
    content: `*, *::before, *::after {
-moz-transition: none !important;
transition: none !important;
-moz-animation: none !important;
animation: none !important;
caret-color: transparent !important;
}`,
  });

  // let things settle down
  await page.waitFor(500);

  // return root element for screenshot
  return await page.$('#root');
}
