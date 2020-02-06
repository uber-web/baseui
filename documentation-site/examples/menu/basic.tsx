import * as React from 'react';
import {StatefulMenu} from 'spaceweb/menu';

const ITEMS = [
  {label: 'Item One'},
  {label: 'Item Two'},
  {label: 'Item Three', disabled: true},
  {label: 'Item Four', disabled: true},
  {label: 'Item Five'},
  {label: 'Item Six'},
  {label: 'Item Seven'},
  {label: 'Item Eight'},
  {label: 'Item Nine'},
  {label: 'Item Ten'},
  {label: 'Item Eleven'},
  {label: 'Item Twelve'},
];

export default () => (
  <StatefulMenu
    items={ITEMS}
    onItemSelect={console.log}
    overrides={{
      List: {
        style: {
          height: '250px',
          width: '350px',
        },
      },
      Option: {
        props: {
          getItemLabel: (item: {label: string}) => item.label,
        },
      },
    }}
  />
);
