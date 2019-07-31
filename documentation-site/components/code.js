/*
Copyright (c) 2018-2019 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
// @flow
import * as React from 'react';
import {useStyletron} from 'baseui';
import Highlight, {defaultProps} from 'prism-react-renderer';
import lightTheme from './yard/light-theme';
import darkTheme from './yard/dark-theme';
import CodeBox from './yard/code-box';

type PropsT = {
  children: string,
  language: string,
};

const Code = ({children, language}: PropsT) => {
  const [, theme] = useStyletron();
  return (
    <CodeBox>
      <Highlight
        {...defaultProps}
        code={children.replace(/[\r\n]+$/, '')}
        language={language}
        theme={theme.name === 'light-theme' ? lightTheme : darkTheme}
      >
        {({style, tokens, getLineProps, getTokenProps}) => (
          <pre style={{...style, padding: '10px 10px'}}>
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({line, key: i})}>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({token, key})} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </CodeBox>
  );
};

Code.defaultProps = {
  language: 'jsx',
};

export default Code;
