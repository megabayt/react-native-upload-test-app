import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components/native';
import { upload } from '../store/uploadSlice';

export const UploadBtn = () => {
  const dispatch = useDispatch();
  const handlePress = useCallback(() => {
    dispatch(upload());
  }, []);

  return (
    <Wrapper>
      <Button title="Upload selected file" testID="upload-file" onPress={handlePress} />
    </Wrapper>
  );
};

const Wrapper = styled.View`

`;
const Button = styled.Button`

`;
