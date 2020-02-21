/*
Copyright (c) 2018-2020 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
// @flow

import React from 'react';
import {columns, rows} from './data-table.scenario.js';
import {Unstable_DataTable} from '../index.js';
import {ThemeProvider, LightTheme} from '../../index.js';

import Alert from '../../icon/alert.js';
import Check from '../../icon/check.js';

const rowActions = [
  {
    label: 'Check',
    onClick: ({row}) => {},
    renderIcon: Check,
  },
  {
    label: 'Remove',
    onClick: ({row}) => {},
    renderIcon: Alert,
  },
];

export default function Scenario() {
  return (
    <ThemeProvider theme={{...LightTheme, direction: 'rtl'}}>
      <div dir="rtl">
        <div style={{height: '800px', width: '900px'}}>
          <Unstable_DataTable
            columns={columns}
            rows={rows}
            rowActions={rowActions}
          />
        </div>
      </div>
    </ThemeProvider>
  );
}
