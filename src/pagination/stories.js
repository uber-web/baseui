/*
Copyright (c) 2018 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
// @flow
/* global module */
import {storiesOf} from '@storybook/react';
import {withReadme} from 'storybook-readme';

import PaginationReadme from '../../rfcs/pagination-component.md';
import examples from './examples';

Object.entries(examples).forEach(([description, example]) =>
  storiesOf('Pagination', module)
    .addDecorator(withReadme(PaginationReadme))
    // $FlowFixMe
    .add(description, example),
);
