<p align="center">
  <a href="https://baseweb.design">
    <img src="https://res.cloudinary.com/dawr8pobn/image/upload/v1556920604/base-web.svg">
  </a>
</p>

<h1 align="center">Base Web</h1>

[![Build status](https://badge.buildkite.com/92a7500cd98f619621c4801833d8b358c2fd79efc9b98f1b98.svg?branch=master)](https://buildkite.com/uberopensource/baseui)

**Base** is a design system comprised of modern, responsive, living components. Base Web is the React implementation of Base.

[![](https://res.cloudinary.com/dawr8pobn/image/upload/v1556920685/base-web-showcase.png)](https://baseweb.design)

## Usage

On npm, you can find Base Web as `baseui`.

Add `baseui` and its peer dependencies to your project:

```bash
# using yarn
yarn add baseui styletron-react styletron-engine-atomic

# using npm
npm install baseui styletron-react styletron-engine-atomic
```

```javascript
import {Client as Styletron} from 'styletron-engine-atomic';
import {Provider as StyletronProvider} from 'styletron-react';
import {LightTheme, ThemeProvider, styled} from 'baseui';
import {StatefulInput} from 'baseui/input';

const engine = new Styletron();

const Centered = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%',
});

export default function Hello() {
  return (
    <StyletronProvider value={engine}>
      <ThemeProvider theme={LightTheme}>
        <Centered>
          <StatefulInput />
        </Centered>
      </ThemeProvider>
    </StyletronProvider>
  );
}
```

## Docs

* [Creating custom themes](https://baseweb.design/theming/custom-themes/)
* [Event handler usage](docs/event-handlers.md)
* [Docs by Storybook](https://baseui.netlify.com/)

## Contributing

[Contributing](CONTRIBUTING.md)

## Shoutouts 🙏

<img src="https://raw.githubusercontent.com/tajo/react-movable/master/assets/browserstack-logo.png?raw=true" height="80" title="BrowserStack Logo" alt="BrowserStack Logo" />

Big thanks to [BrowserStack](https://www.browserstack.com) for letting the maintainers use their service to debug browser issues.
