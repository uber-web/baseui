/* global document */
import * as React from 'react';
import {Layer} from 'baseui/layer';
import {Block} from 'baseui/block';
import {Button} from 'baseui/button';

const layerRef = React.createRef();

function BlockComponent(props) {
  return (
    <Block
      position="fixed"
      top={props.offset || '46%'}
      left={props.offset || '46%'}
      width="200px"
      paddingTop="20px"
      paddingBottom="20px"
      paddingLeft="20px"
      paddingRight="20px"
      backgroundColor={props.color}
      overrides={{
        Block: {
          style: {
            textAlign: 'center',
          },
        },
      }}
    >
      {props.children}
    </Block>
  );
}
export default () => {
  const [isBlueOpen, setIsBlueOpen] = React.useState(false);
  const [isPinkOpen, setIsPinkOpen] = React.useState(false);
  return (
    <>
      <Button onClick={() => setIsBlueOpen(true)}>Render Red Layer</Button>
      {isBlueOpen ? (
        <Layer>
          <BlockComponent color="rgba(255, 190, 190, 0.86)">
            <Button onClick={() => setIsBlueOpen(false)}>Close</Button>
          </BlockComponent>
        </Layer>
      ) : null}
      <Block padding="5px" />
      <Button onClick={() => setIsPinkOpen(true)}>Render Orange Layer</Button>
      {isPinkOpen ? (
        <Layer>
          <BlockComponent color="rgba(255, 212, 135, 0.86)" offset="48%">
            <Button onClick={() => setIsPinkOpen(false)}>Close</Button>
          </BlockComponent>
        </Layer>
      ) : null}
    </>
  );
};
