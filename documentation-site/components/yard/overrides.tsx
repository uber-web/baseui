import * as React from 'react';
import {Accordion, Panel} from 'baseui/accordion';
import {Caption1} from 'baseui/typography';
import Link from 'next/link';
import {StyledLink} from 'baseui/link';
import {useStyletron} from 'baseui';

import Override, {getHighlightStyles} from './override';

type TOverridesProps = {
  set: any;
  overrides: any;
  componentName: string;
};

const Overrides: React.FC<TOverridesProps> = ({
  overrides,
  set,
  componentName,
}) => {
  const [, theme] = useStyletron();
  const isLightTheme = theme.name === 'light-theme';
  if (
    !overrides.meta ||
    !overrides.meta.names ||
    overrides.meta.names.length === 0
  ) {
    return null;
  }

  const overridesObj: {
    [key: string]: {
      style: any;
    };
  } = {};

  overrides.meta.names.forEach((key: string) => {
    if (overrides.value && overrides.value[key]) {
      overridesObj[key] = overrides.value[key];
    } else {
      overridesObj[key] = {
        style: null,
      };
    }
  });

  const handleChange = ({expanded}: {expanded: (string | number)[]}) => {
    const returnValue: any = {...overrides.value};
    if (overrides.value) {
      Object.keys(overrides.value).forEach(key => {
        returnValue[key]['active'] = false;
      });
    }
    expanded.forEach(key => {
      if (overridesObj[key].style === null) {
        returnValue[key] = {
          style: getHighlightStyles(isLightTheme, []),
        };
      } else {
        returnValue[key] = {
          style: overridesObj[key].style,
        };
      }
      returnValue[key]['active'] = true;
    });
    set(Object.keys(returnValue).length > 0 ? returnValue : undefined);
  };

  return (
    <React.Fragment>
      <Caption1
        marginLeft="scale200"
        marginRight="scale200"
        marginBottom="scale400"
      >
        Additionally, you can fully customize any part of the {componentName}{' '}
        through the overrides prop (
        <Link href="/theming/understanding-overrides/">
          <StyledLink href="/theming/understanding-overrides/">
            learn more
          </StyledLink>
        </Link>
        ). Try to update different <b>style overrides</b> in the explorer
        bellow:
      </Caption1>
      <Accordion
        initialState={{
          expanded: overrides.value ? Object.keys(overrides.value) : [],
        }}
        onChange={handleChange}
        accordion={false}
      >
        {Object.keys(overridesObj).map(overrideKey => (
          <Panel
            key={overrideKey}
            title={overrideKey}
            overrides={{Content: {style: {backgroundColor: 'transparent'}}}}
          >
            <Override
              key={overrideKey}
              overrideKey={overrideKey}
              overridesObj={overridesObj}
              overrides={overrides}
              set={set}
            />
          </Panel>
        ))}
      </Accordion>
    </React.Fragment>
  );
};

export default Overrides;
