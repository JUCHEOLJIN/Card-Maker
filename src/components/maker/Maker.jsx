import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { useNavigate, useLocation } from "react-router-dom";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import Editor from "./Editor";
import Preview from "./Preview";

const Maker = ({ authService, FileInput, cardRepository }) => {
  const location = useLocation();
  const locationState = location?.state;
  const [cards, setCards] = useState({});
  const [userId, setUserId] = useState(locationState && locationState.id);

  const navigate = useNavigate();

  const onLogout = () => {
    authService.logout();
  };

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (user) {
        setUserId(user.uid);
      } else {
        navigate("/");
      }
    });
  }, []);

  const CreateOrUpdateCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      updated[card.id] = card;
      return updated;
    });
    cardRepository.saveCard(userId, card);
  };

  const deleteCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      delete updated[card.id];
      return updated;
    });
    cardRepository.removeCard(userId, card);
  };

  return (
    <StyledSection>
      <Header onLogout={onLogout} fontSize="24px" />
      <Contents>
        <Editor
          cards={cards}
          CreateOrUpdateCard={CreateOrUpdateCard}
          deleteCard={deleteCard}
          FileInput={FileInput}
        />
        <Preview cards={cards} />
      </Contents>
      <Footer fontSize="24px" />
    </StyledSection>
  );
};

export default Maker;

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 80rem;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.makerWhite};
`;

const Contents = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  min-height: 0;

  @media screen and (max-width: ${({ theme }) => theme.size.mq}) {
    flex-direction: column;
  } ;
`;
