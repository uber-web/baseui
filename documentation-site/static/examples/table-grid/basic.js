import React from 'react';
import {useStyletron} from 'baseui/styles';
import {
  Unstable_StyledTable as StyledTable,
  Unstable_StyledHeadCell as StyledHeadCell,
  Unstable_StyledBodyCell as StyledBodyCell,
} from 'baseui/table-grid';

const data = Array(100)
  .fill(2)
  .map(() => [
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
     labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut`,
    'Cell two',
    'Cell three',
    'Cell four',
    'Cell five',
    'Cell six',
  ]);

export default function() {
  const [css] = useStyletron();
  return (
    <div className={css({height: '750px', width: '900px'})}>
      <StyledTable $gridTemplateColumns="minmax(400px, max-content) 200px 200px 200px 200px 200px">
        <StyledHeadCell>Column 1</StyledHeadCell>
        <StyledHeadCell>Column 2</StyledHeadCell>
        <StyledHeadCell>Column 3</StyledHeadCell>
        <StyledHeadCell>Column 4</StyledHeadCell>
        <StyledHeadCell>Column 5</StyledHeadCell>
        <StyledHeadCell>Column 6</StyledHeadCell>
        {data.map(row => {
          return (
            <>
              <StyledBodyCell>{row[0]}</StyledBodyCell>
              <StyledBodyCell>{row[1]}</StyledBodyCell>
              <StyledBodyCell>{row[2]}</StyledBodyCell>
              <StyledBodyCell>{row[3]}</StyledBodyCell>
              <StyledBodyCell>{row[4]}</StyledBodyCell>
              <StyledBodyCell>{row[5]}</StyledBodyCell>
            </>
          );
        })}
      </StyledTable>
    </div>
  );
}
