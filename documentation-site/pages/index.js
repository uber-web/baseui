/*
Copyright (c) 2018 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
// @flow
/* global process */

import React from 'react';
import {Block} from 'baseui/block';
import {Button} from 'baseui/button';
import {H4, H6} from 'baseui/typography';
import {Card, StyledBody, StyledAction} from 'baseui/card';
import fetch from 'isomorphic-fetch';

import Layout from '../components/layout';
import Contributors from '../components/contributors';
import Markdown from '../components/markdown-elements';

type Contributor = {
  avatar_url: string,
  html_url: string,
  login: string,
  type: 'Bot' | 'User',
};

const cardOverrides = {
  Root: {
    style: ({$theme}) => ({
      marginRight: $theme.sizing.scale500,
      marginBottom: $theme.sizing.scale500,
      width: '340px',
    }),
  },
};

const Index = (props: {contributors: Contributor[]}) => (
  <Layout>
    <H4>Base Web React Components</H4>
    <Markdown.p>
      Base Web is a foundation, a basis for initiating, evolving, and unifying
      web products. The system is designed to be fully responsive and device
      agnostic providing designers and developers with a unique catalog of
      components.
    </Markdown.p>

    <H6>Getting started with Base Web</H6>

    <Block display="flex" flexWrap>
      <Card title="Installing Base Web" overrides={cardOverrides}>
        <StyledBody>
          Base Web is distributed as an npm package. As Base Web is built on top
          of a CSS-in-JS engine, all you need is the dependencies from npm. Let
          {"'"}s add Base to your project!
        </StyledBody>
        <StyledAction>
          <Block
            $as="a"
            href="/getting-started/installation"
            $style={{textDecoration: 'none'}}
          >
            <Button style={{width: '100%'}}>Install Base Web</Button>
          </Block>
        </StyledAction>
      </Card>

      <Card title="Learning Base Web" overrides={cardOverrides}>
        <StyledBody>
          Probably the best way to learn Base Web is by start building an
          application using it. On this page, you
          {"'"}
          ll find a simple and a more complex app built using Base Web.
        </StyledBody>
        <StyledAction>
          <Block
            $as="a"
            href="/getting-started/learn"
            $style={{textDecoration: 'none'}}
          >
            <Button style={{width: '100%'}}>Learn more</Button>
          </Block>
        </StyledAction>
      </Card>
    </Block>

    <Contributors contributors={props.contributors} />
  </Layout>
);

Index.getInitialProps = async () => {
  const res = await fetch(
    `https://api.github.com/repos/uber-web/baseui/contributors?access_token=${process
      .env.GITHUB_AUTH_TOKEN || ''}`,
  );
  const contributors = await res.json();

  if (Array.isArray(contributors)) {
    return {contributors};
  }
  return {contributors: []};
};

export default Index;
