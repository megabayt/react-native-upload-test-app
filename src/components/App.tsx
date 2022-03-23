import React from 'react';
import styled from 'styled-components/native';
import { Provider } from 'react-redux';

import { FileInfo } from './FileInfo';
import { FilePickerBtn } from './FilePickerBtn';
import { Progress } from './Progress';
import { UploadBtn } from './UploadBtn';
import { store } from '../store';

export const App = () => {
  return (
    <Provider store={store}>
      <Wrapper>
        <FileInfo />
        <FilePickerBtn />
        <Progress />
        <UploadBtn />
      </Wrapper>
    </Provider>
  );
}

const Wrapper = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: space-around;
`;
