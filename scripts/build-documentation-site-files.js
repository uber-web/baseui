#!/usr/bin/env node

/*
Copyright (c) 2018-2019 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/

// @flow
/* eslint-env node */

const generateBlogPosts = require('./post-generator.js');
const generateVersions = require('./version-generator.js');
const {generateCheatSheet} = require('./cheat-sheet-generator.js');

async function main() {
  generateBlogPosts();
  // await generateVersions();
  // await generateCheatSheet();
}

main().catch(console.error);
