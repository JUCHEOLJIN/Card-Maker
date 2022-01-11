import styled from "@emotion/styled";
import React from "react";
import CardAddForm from "./CardAddForm";
import CardEditForm from "./CardEditForm";

const Editor = ({ cards, CreateOrUpdateCard, deleteCard, FileInput }) => {
  return (
    <StyledSection>
      <Title>Editor</Title>
      {Object.keys(cards).map((key) => (
        <CardEditForm
          card={cards[key]}
          key={key}
          deleteCard={deleteCard}
          CreateOrUpdateCard={CreateOrUpdateCard}
          FileInput={FileInput}
        />
      ))}
      <CardAddForm
        CreateOrUpdateCard={CreateOrUpdateCard}
        FileInput={FileInput}
      />
    </StyledSection>
  );
};

export default Editor;

const StyledSection = styled.section`
  flex-basis: 50%;
  padding: 1em 3em;
  border-right: 1px solid ${({ theme }) => theme.colors.makerLightGrey};
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
