/*
Copyright (c) 2018 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
// @flow

import React from 'react';

import {StatefulPhoneInput} from '../index.js';

export const name = 'phone-input';

export const component = () => (
  <>
    <div>
      <StatefulPhoneInput size="compact" />
    </div>
    <div>
      <StatefulPhoneInput size="default" />
    </div>
    <div>
      <StatefulPhoneInput size="large" />
    </div>
  </>
);
