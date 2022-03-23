import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components/native';
import { getPickerResult } from '../store/pickerSlice';
import { getFileSize } from '../utils/helpers';

export const FileInfo = () => {
  const pickerResult = useSelector(getPickerResult);
  const fileName = pickerResult?.name ?? '';
  const filePath = pickerResult?.uri ?? '';
  const fileSize = getFileSize(pickerResult?.size ?? 0);
  
  return (
    <Wrapper>
      <Item numberOfLines={1}>Selected file name: {fileName}</Item>
      <Item numberOfLines={1}>Selected file path: {filePath}</Item>
      <Item numberOfLines={1}>Selected file size: {fileSize}</Item>
    </Wrapper>
  );
};

const Wrapper = styled.View`
  text-align: left;
  max-width: 80%;
`;
const Item = styled.Text`

`;