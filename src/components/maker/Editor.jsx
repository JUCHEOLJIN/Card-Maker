import styled from "@emotion/styled";
import React from "react";
import CardEditFrom from "./CardEditFrom";

const Editor = ({ cards }) => {
  return (
    <StyledSection>
      <Title>Editor</Title>
      {cards.map((card) => (
        <CardEditFrom card={card} key={card.id} />
      ))}
    </StyledSection>
  );
};

export default Editor;

const StyledSection = styled.section`
  flex-basis: 50%;
  padding: 1em 3em;
  border-right: 1px solid ${({ theme }) => theme.colors.makerLightGrey};
`;

const Title = styled.h1`
  width: 100%;
  margin-bottom: 1em;
  color: ${({ theme }) => theme.colors.makerGreen};
  font-size: 1.2rem;
  font-weight: bold;
  text-align: center;
`;
