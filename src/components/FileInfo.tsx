import React from 'react';
import styled from 'styled-components/native';

export const FileInfo = () => {
  return (
    <Wrapper>
      <Item numberOfLines={1}>Selected file name: </Item>
      <Item numberOfLines={1}>Selected file path: </Item>
      <Item numberOfLines={1}>Selected file size: </Item>
    </Wrapper>
  );
};

const Wrapper = styled.View`
  text-align: left;
  max-width: 80%;
`;
const Item = styled.Text`

`;