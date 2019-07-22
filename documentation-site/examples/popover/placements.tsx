import * as React from 'react';
import {styled} from 'baseui';
import {Block} from 'baseui/block';
import {Button} from 'baseui/button';
import {
  StatefulPopover,
  PLACEMENT,
  TRIGGER_TYPE,
} from 'baseui/popover';
import {Paragraph1} from 'baseui/typography';

export default () => (
  <Block
    display="flex"
    flexDirection="column"
    justifyContent="center"
    flexWrap
    height="560px"
  >
    {Object.keys(PLACEMENT).map((key, index) => (
      <Block padding="scale700" key={index}>
        <StatefulPopover
          placement={PLACEMENT[key]}
          triggerType={TRIGGER_TYPE.hover}
          content={
            <Paragraph1 padding="scale300">{`PLACEMENT.${
              PLACEMENT[key]
            }`}</Paragraph1>
          }
          accessibilityType={'tooltip'}
        >
          <Button>{PLACEMENT[key]}</Button>
        </StatefulPopover>
      </Block>
    ))}
  </Block>
);
