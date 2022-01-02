import styled from "@emotion/styled";
import React from "react";

const Preview = () => {
  return (
    <StyledSection>
      <Title>Preview</Title>
    </StyledSection>
  );
};

export default Preview;

const StyledSection = styled.section`
  flex-basis: 50%;
  padding: 1em;
  background-color: pink;
`;

const Title = styled.h1`
  width: 100%;
  margin-bottom: 1em;
  color: ${({ theme }) => theme.colors.makerGreen};
  text-align: center;
`;
