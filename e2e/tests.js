/*
MIT License

Copyright (c) 2018 Uber Technologies, Inc.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/
// @flow
/* eslint-env browser */

import React from 'react';
import CheckboxExamples from '../src/checkbox/examples';
import ModalExamples from '../src/modal/examples';

const Examples = [CheckboxExamples, ModalExamples];

export default function() {
  // needs polyfill for IE
  const urlParams = new URLSearchParams(window.location.search);
  const suite = urlParams.get('suite');
  if (!suite) {
    return null;
  }
  const test = urlParams.get('test');
  let example, description;
  for (let i = 0; i < Examples.length; i++) {
    const exampleSuite = Examples[i];
    example = exampleSuite[test];
    if (example) {
      break;
    }
  }
  description = escape(test);
  if (example) {
    return (
      <div key={`example${description}`} id={description}>
        {example()}
      </div>
    );
  } else {
    // eslint-disable-next-line no-console
    console.error(`NOT_FOUND_TEST: Test ${test} is not found, please, check`);
    return null;
  }
}
