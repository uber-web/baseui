/*
Copyright (c) 2018-2020 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/

// Sets local package.json to current baseui version.

/* eslint-env node */
// @flow

const fs = require('fs');
const path = require('path');
const {spawnSync} = require('child_process');

const ROOT_DIR = path.resolve(__dirname, '..');
const ESLINT_PLUGIN_DIR = path.resolve(
  ROOT_DIR,
  'packages',
  'eslint-plugin-baseui',
);

const ALPHA_TAG = 'alpha';
const LATEST_TAG = 'latest';

function writeNpmTokenFromEnv() {
  const token = process.env.NPM_TOKEN;
  if (!token) {
    throw new Error('NPM_TOKEN not found.');
  }
  const filepath = path.resolve(ROOT_DIR, '.npmrc');
  fs.unlinkSync(filepath);
  fs.writeFileSync(filepath, `//registry.npmjs.org/:_authToken=${token}`);
}

function readJSONFile(filepath) {
  const contents = fs.readFileSync(filepath, 'utf8');
  return JSON.parse(contents);
}

function copyPackageJSONVersionFromRoot(filepath) {
  if (!filepath.endsWith('package.json')) {
    throw new Error(
      `Must copy version to a package.json file. Received: ${filepath}`,
    );
  }
  const source = readJSONFile(path.resolve(ROOT_DIR, 'package.json'));
  const dest = readJSONFile(filepath);
  dest.version = source.version;
  fs.writeFileSync(filepath, JSON.stringify(dest, null, 2));
}

function publishBaseui(tag) {
  console.log('--- Publishing baseui to NPM');
  spawnSync('yarn', ['build'], {stdio: 'inherit', cwd: ROOT_DIR});
  spawnSync('npm', ['publish', '--tag', tag, 'dist'], {
    stdio: 'inherit',
    cwd: ROOT_DIR,
  });
}

function publishEslintPlugin(tag) {
  console.log('--- Publishing eslint-plugin-baseui to NPM');
  copyPackageJSONVersionFromRoot(
    path.resolve(ESLINT_PLUGIN_DIR, 'package.json'),
  );
  spawnSync('npm', ['publish', '--tag', tag, 'dist'], {
    stdio: 'inherit',
    cwd: ESLINT_PLUGIN_DIR,
  });
}

function main() {
  if (!process.env.TAG) {
    throw new Error(
      `Must specify a TAG environment variable. Use 'alpha' for preleases or 'latest' for stable releases.`,
    );
  }

  const tag = process.env.TAG;
  if (tag !== ALPHA_TAG && tag !== LATEST_TAG) {
    throw new Error(
      `NPM tag ${tag} must be either ${ALPHA_TAG} or ${LATEST_TAG}.`,
    );
  }

  if (tag === ALPHA_TAG) {
    console.log('--- Updating package.json version to alpha.');
    const commitHash = process.env.GIT_COMMIT;
    if (!commitHash) {
      throw new Error('No GIT_COMMIT environment variable set.');
    }
    const packageJSONPath = path.resolve(ROOT_DIR, 'package.json');
    const packageJSON = readJSONFile(packageJSONPath);
    const shortHash = commitHash.slice(-7);
    packageJSON.version = `0.0.0-alpha-${shortHash}`;
    console.log(
      `Updated package.json version to ${packageJSON.version} for alpha release.`,
    );
    fs.writeFileSync(packageJSONPath, JSON.stringify(packageJSON, null, 2));
  }

  writeNpmTokenFromEnv();
  publishBaseui(tag);
  publishEslintPlugin(tag);
}

main();
