/*
Copyright (c) 2018-2019 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/

/* eslint-disable flowtype/require-valid-file-annotation */

import * as React from 'react';
import {useStyletron} from 'baseui';

function getPadding(componentType) {
  const multiplier = Number(componentType.replace('h', ''));

  return `${multiplier * 8}px`;
}

const VersionSelector = props => {
  const [useCss, theme] = useStyletron();
  const TOC = [];
  const content = props.content[0].props.children;
  content &&
    content.forEach &&
    content.forEach(element => {
      if (
        element.props.name &&
        element.props.name.startsWith('h') &&
        element.props.children.toLowerCase
      ) {
        TOC.push({
          name: element.props.children,
          anchor: `#${element.props.children
            .toLowerCase()
            .replace(/\s+/g, '-')}`,
          component: element.props.name,
        });
      }

      if (
        element.type &&
        element.type.name === 'Example' &&
        element.props.title
      ) {
        TOC.push({
          name: element.props.title,
          anchor: `#${element.props.title.toLowerCase().replace(/\s+/g, '-')}`,
          component: 'h2',
        });
      }
    });

  return (
    <ul
      className={useCss({
        borderLeft: `1px solid ${theme.colors.mono400}`,
        listStyle: 'none',
        marginLeft: theme.sizing.scale400,
        paddingLeft: 0,
        marginTop: 0,
        marginBottom: 0,
      })}
    >
      {TOC.map(header => (
        <li
          key={header.name}
          className={useCss({
            ...theme.typography.font100,
            paddingLeft: getPadding(header.component),
          })}
        >
          <a
            className={useCss({color: theme.colors.mono800})}
            href={header.anchor}
          >
            {header.name}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default VersionSelector;
