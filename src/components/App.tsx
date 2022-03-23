import React from 'react';
import styled from 'styled-components/native';
import { FileInfo } from './FileInfo';
import { FilePickerBtn } from './FilePickerBtn';
import { Progress } from './Progress';
import { UploadBtn } from './UploadBtn';

export const App = () => {
  return (
    <Wrapper>
      <FileInfo />
      <FilePickerBtn />
      <Progress />
      <UploadBtn />
    </Wrapper>
  );
}

const Wrapper = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: space-around;
`;
