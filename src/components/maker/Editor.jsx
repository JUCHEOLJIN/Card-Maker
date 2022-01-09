import styled from "@emotion/styled";
import React from "react";
import CardAddForm from "./CardAddForm";
import CardEditForm from "./CardEditForm";

const Editor = ({ cards, addCard, deleteCard, handleChange }) => {
  return (
    <StyledSection>
      <Title>Editor</Title>
      {cards.map((card) => (
        <CardEditForm
          card={card}
          key={card.id}
          deleteCard={deleteCard}
          handleChange={handleChange}
        />
      ))}
      <CardAddForm onAdd={addCard} />
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
