import * as React from 'react';
import {Input, SIZE} from 'baseui/input';
import {useStyletron} from 'baseui';
import Link from 'next/link';
import {StyledLink} from 'baseui/link';
import {Caption1} from 'baseui/typography';

type ThemeEditorProps = {
  componentName: string;
  theme: {[key: string]: string};
  themeInit: {[key: string]: string};
  set: (value: {[key: string]: string}) => void;
};

type ColumnProps = {
  themeKeys: string[];
  theme: {[key: string]: string};
  themeInit: {[key: string]: string};
  set: (value: {[key: string]: string}) => void;
};

const Column: React.FC<ColumnProps> = ({themeKeys, themeInit, theme, set}) => {
  const [css, $theme] = useStyletron();
  return (
    <div
      className={css({
        flexBasis: '50%',
      })}
    >
      {themeKeys.map(key => {
        return (
          <div className={css({display: 'flex', alignItems: 'center'})}>
            <div
              className={css({
                width: '4px',
                height: '36px',
                backgroundColor: theme[key],
              })}
            ></div>
            <Input
              key={key}
              size={SIZE.compact}
              placeholder={themeInit[key]}
              value={theme[key]}
              onChange={e =>
                set({...theme, [key]: (e.target as HTMLInputElement).value})
              }
              overrides={{Root: {style: {width: '100px'}}}}
            />
            <label
              className={css({
                ...($theme.typography.font200 as any),
                color: $theme.colors.foreground,
                marginLeft: $theme.sizing.scale300,
              })}
            >
              {key}
            </label>
          </div>
        );
      })}
    </div>
  );
};

const ThemeEditor: React.FC<ThemeEditorProps> = ({
  theme,
  themeInit,
  set,
  componentName,
}) => {
  const [css] = useStyletron();
  const themeKeys = Object.keys(theme);

  const firstThemeKeys = themeKeys.slice(0, themeKeys.length / 2);
  const secondThemeKeys = themeKeys.slice(themeKeys.length / 2);

  return (
    <React.Fragment>
      <Caption1
        marginLeft="scale200"
        marginRight="scale200"
        marginBottom="scale400"
      >
        Do you want to change {componentName} colors globally? You can customize
        the theme through ThemeProvider and set your own colors.{' '}
        <Link href="/theming/custom-themes/#creating-a-custom-theme">
          <StyledLink href="/theming/custom-themes/#creating-a-custom-theme">
            Learn more
          </StyledLink>
        </Link>
        . Try different values:
      </Caption1>
      <div
        className={css({
          display: 'flex',
          flexDirection: 'column',
          '@media screen and (min-width: 664px)': {
            flexDirection: 'row',
          },
        })}
      >
        <Column
          themeKeys={firstThemeKeys}
          theme={theme}
          themeInit={themeInit}
          set={set}
        />
        <Column
          themeKeys={secondThemeKeys}
          theme={theme}
          themeInit={themeInit}
          set={set}
        />
      </div>
    </React.Fragment>
  );
};

export default ThemeEditor;
