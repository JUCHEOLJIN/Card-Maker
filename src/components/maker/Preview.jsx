import styled from "@emotion/styled";
import React from "react";
import Card from "./Card";

const Preview = ({ cards }) => {
  return (
    <StyledSection>
      <Title>Card Preview</Title>
      <CardList>
        {Object.keys(cards).map((key) => (
          <Card card={cards[key]} key={key} />
        ))}
      </CardList>
    </StyledSection>
  );
};

export default Preview;

const StyledSection = styled.section`
  flex-basis: 50%;
  padding: 1em 3em;
  overflow-y: auto;
`;

const Title = styled.h1`
  width: 100%;
  margin-bottom: 1em;
  color: ${({ theme }) => theme.colors.makerGreen};
  font-size: 1.2rem;
  font-weight: bold;
  text-align: center;
`;

const CardList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
`;
