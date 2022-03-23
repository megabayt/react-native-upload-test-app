import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components/native';
import { pick } from '../store/pickerSlice';

export const FilePickerBtn = () => {
  const dispatch = useDispatch();
  const handlePress = useCallback(() => {
    dispatch(pick());
  }, []);

  return (
    <Wrapper>
      <Button title="Select file" testID="select-file" onPress={handlePress} />
    </Wrapper>
  );
};

const Wrapper = styled.View`

`;
const Button = styled.Button`

`;
