import * as React from 'react';

import {ChevronRight, Search} from 'spaceweb/icon';
import {StatefulMenu} from 'spaceweb/menu';
import {
  ListItemLabel,
  MenuAdapter,
  ARTWORK_SIZES,
} from 'spaceweb/list';

const ITEMS = [...new Array(10)].map(() => ({
  title: 'Jane Smith',
  subtitle: 'Senior Engineering Manager',
  icon: Search,
}));

export default () => {
  return (
    <StatefulMenu
      items={ITEMS}
      onItemSelect={() => console.log('select')}
      overrides={{
        List: {
          style: {
            height: '300px',
            width: '450px',
          },
        },
        Option: {
          props: {
            overrides: {
              ListItem: {
                component: React.forwardRef((props: any, ref) => (
                  <MenuAdapter
                    {...props}
                    ref={ref}
                    artwork={props.item.icon}
                    artworkSize={ARTWORK_SIZES.LARGE}
                    endEnhancer={() => <ChevronRight />}
                  >
                    <ListItemLabel
                      description={props.item.subtitle}
                    >
                      {props.item.title}
                    </ListItemLabel>
                  </MenuAdapter>
                )),
              },
            },
          },
        },
      }}
    />
  );
};
