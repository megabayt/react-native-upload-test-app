import React from 'react';
import { useSelector } from 'react-redux';
import styled from "styled-components/native";
import { getUploadProgress } from '../store/uploadSlice';

export const Progress = () => {
  const progress = useSelector(getUploadProgress);
  return (
    <Wrapper>
      <Background testID="bar-background">
        <Bar testID="bar" progress={progress} />
      </Background>
    </Wrapper>
  );
};

const Wrapper = styled.View`
  width: 50%;
`;
const Background = styled.View`
  position: relative;
  width: 100%;
  height: 15px;
  background: #d9dee2;
`;
const Bar = styled.View`
  position: absolute;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: ${({ progress = 0 }: { progress?: number }) => 100 - progress}%;
  background: #50ab9f;
`;
