import React from 'react';
import styled from "styled-components/native";

export const Progress = () => {
  return (
    <Wrapper>
      <Background>
        <Bar progress={50} />
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
  right: ${({ progress = 0 }: { progress?: number }) => progress}%;
  background: #50ab9f;
`;
