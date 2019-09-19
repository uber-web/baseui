import * as React from 'react';
import {ListItem, ListItemLabel} from 'baseui/list';
import {useStyletron} from 'baseui';

export default () => {
  const [useCss] = useStyletron();
  return (
    <div className={useCss({width: '375px'})}>
      <ListItem>
        <ListItemLabel>Label One</ListItemLabel>
      </ListItem>
      <ListItem>
        <ListItemLabel>Label Two</ListItemLabel>
      </ListItem>
      <ListItem>
        <ListItemLabel description="description">
          Label Three
        </ListItemLabel>
      </ListItem>
      <ListItem>
        <ListItemLabel description="description">
          Label Four
        </ListItemLabel>
      </ListItem>
    </div>
  );
};
