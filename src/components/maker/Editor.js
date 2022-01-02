import styled from "@emotion/styled";
import React from "react";

const Editor = () => {
  return (
    <StyledSection>
      <Title>Editor</Title>
    </StyledSection>
  );
};

export default Editor;

const StyledSection = styled.section`
  flex-basis: 50%;
  padding: 1em;
  background-color: wheat;
`;

const Title = styled.h1`
  width: 100%;
  margin-bottom: 1em;
  color: ${({ theme }) => theme.colors.makerGreen};
  text-align: center;
`;
