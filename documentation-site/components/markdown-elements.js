/*
Copyright (c) 2018 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
// @flow
/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from 'react';

import {Block} from 'baseui/block';
import {styled} from 'baseui/styles';
import Link from 'next/link';
import Anchor from './anchor';
import slugify from '../helpers/slugify';
import {useHover} from './hooks';
type Props = {
  children: string,
};

const getText = children => {
  let label = '';
  React.Children.forEach(children, child => {
    if (typeof child === 'string') {
      label += child;
    }
    if (child.props && child.props.children) {
      label += getText(child.props.children);
    }
  });
  return label;
};

export const cleanAnchor = (anchor: Node) => slugify(getText(anchor));

const Code = (props: Props) => <Block>{props.children}</Block>;

const Heading = ({
  element,
  fontType,
  children,
}: {
  element: string,
  fontType: string,
  children: Node,
}) => {
  const [hoverRef, isHovered] = useHover();
  const slug = cleanAnchor(children);
  return (
    <Block as={element} font={fontType} $ref={hoverRef} id={slug}>
      <React.Fragment>
        {children}{' '}
        <Anchor isVisible={isHovered} slug={slug} element={element} />
      </React.Fragment>
    </Block>
  );
};

const ListItem = (props: Props) => (
  <Block as="li" font="font400">
    {props.children}
  </Block>
);

const Paragraph = (props: Props) => (
  <Block as="p" font="font400">
    {props.children}
  </Block>
);

const UnorderedList = (props: Props) => <ul>{props.children}</ul>;

const InlineCode = styled('code', {
  backgroundColor: 'rgba(27, 31, 35, 0.05)',
  borderRadius: '3px',
  fontSize: '85%',
  margin: 0,
  padding: '0.2em 0.4em',
  fontFamily:
    'SFMono-Regular, Consolas, Liberation Mono, Menlo, Courier, monospace;',
});

const Blockquote = styled('blockquote', {
  backgroundColor: 'rgba(27, 31, 35, 0.03)',
  borderRadius: '3px',
  margin: 0,
  padding: '1em 3em',
  ':before': {
    position: 'absolute',
    color: '#ccc',
    content: 'open-quote',
    fontSize: '4em',
    marginLeft: '-0.55em',
    marginTop: '-0.25em',
  },
  ':after': {
    float: 'right',
    color: '#ccc',
    content: 'close-quote',
    fontSize: '4em',
    marginRight: '-0.55em',
    marginTop: '-0.45em',
  },
});

export default {
  code: Code,
  h1: ({children}: {children: Node}) => (
    <Heading element="h1" fontType="font700">
      {children}
    </Heading>
  ),
  h2: ({children}: {children: Node}) => (
    <Heading element="h2" fontType="font600">
      {children}
    </Heading>
  ),
  h3: ({children}: {children: Node}) => (
    <Heading element="h3" fontType="font500">
      {children}
    </Heading>
  ),
  h4: ({children}: {children: Node}) => (
    <Heading element="h4" fontType="font400">
      {children}
    </Heading>
  ),
  h5: ({children}: {children: Node}) => (
    <Heading element="h5" fontType="font400">
      {children}
    </Heading>
  ),
  h6: ({children}: {children: Node}) => (
    <Heading element="h6" fontType="font300">
      {children}
    </Heading>
  ),
  li: ListItem,
  p: Paragraph,
  ul: UnorderedList,
  inlineCode: ({children}: Props) => <InlineCode>{children}</InlineCode>,
  blockquote: ({children}: Props) => <Blockquote>{children}</Blockquote>,
  a: ({children, href}: {children: string, href: string}) => {
    const parts = href.split('#');
    const internal =
      (parts[0] === '' && parts[1] !== '') || !href.includes('http');
    return (
      <Link href={href} prefetch={internal}>
        <a target={internal ? undefined : '_blank'}>{children}</a>
      </Link>
    );
  },
};
