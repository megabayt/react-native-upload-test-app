import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components/native';
import { getPickerResult, pick, pickerSlice } from '../store/pickerSlice';
import { RootState } from '../store/store';

export const FilePickerBtn = () => {
  const dispatch = useDispatch();
  const handlePress = useCallback(() => {
    dispatch(pick());
  }, []);

  return (
    <Wrapper>
      <Button title="Select file" onPress={handlePress} />
    </Wrapper>
  );
};

const Wrapper = styled.View`

`;
const Button = styled.Button`

`;
