import * as React from 'react';
import {
  Label1,
  Label2,
  Caption1,
  Caption2,
  Paragraph1,
  Paragraph2,
} from 'baseui/typography';

const bodyString =
  "Never in all their history have men been able truly to conceive of the world as one: a single sphere, a globe, having the qualities of a globe, a round earth in which all the directions eventually meet, in which there is no center because every point, or none, is center — an equal earth which all men occupy as equals. The airman's earth, if free men make it, will be truly round: a globe in practice, not in theory.";

export default () => (
  <React.Fragment>
    <Label2>Label2</Label2>
    <Paragraph2>{`Paragraph2 - ${bodyString}`}</Paragraph2>
    <Label1>Label1</Label1>
    <Paragraph1>{`Paragraph1 - ${bodyString}`}</Paragraph1>
    <Caption2>Caption2</Caption2>
    <Caption1>{`Caption1 - ${bodyString}`}</Caption1>
  </React.Fragment>
);
