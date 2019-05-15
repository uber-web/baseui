/*
Copyright (c) 2018-2019 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/

// @flow
/*eslint-env node*/

module.exports = {
  testPathIgnorePatterns: ['/node_modules/', '/dist/', './babel/cup.js'],
  preset: 'jest-puppeteer',
  testRegex: './*\\e2e\\.js$', //only for now, will be changed back to e2e.js
  transformIgnorePatterns: ['./babel/cup.js'],
};
