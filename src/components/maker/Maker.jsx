import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import Editor from "./Editor";
import Preview from "./Preview";

const Maker = ({ authService }) => {
  const [cards, setCards] = useState({
    1: {
      id: "1",
      name: "eden",
      company: "Shopl",
      theme: "light",
      title: "Front-End Developer",
      email: "eden.j0303@gmail.com",
      message: "go for it",
      fileName: "file",
      fileURL: null,
    },
    2: {
      id: "2",
      name: "bae",
      company: "kakao",
      theme: "dark",
      title: "Front-End Developer",
      email: "bae0313@gmail.com",
      message: "go for it",
      fileName: "file",
      fileURL: null,
    },
    3: {
      id: "3",
      name: "jay",
      company: "toss",
      theme: "colorful",
      title: "Front-End Developer",
      email: "jay1107@gmail.com",
      message: "go for it",
      fileName: "file",
      fileURL: null,
    },
  });

  const navigate = useNavigate();
  const onLogout = () => {
    authService.logout();
  };

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (!user) {
        navigate("/");
      }
    });
  });

  const CreateOrUpdateCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      updated[card.id] = card;
      return updated;
    });
  };

  const deleteCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      delete updated[card.id];
      return updated;
    });
  };

  return (
    <StyledSection>
      <Header onLogout={onLogout} fontSize="24px" />
      <Contents>
        <Editor
          cards={cards}
          CreateOrUpdateCard={CreateOrUpdateCard}
          deleteCard={deleteCard}
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
  height: 100%;
  background-color: ${({ theme }) => theme.colors.makerWhite};
`;

const Contents = styled.div`
  display: flex;
  flex: 1;
  width: 100%;

  @media screen and (max-width: ${({ theme }) => theme.size.mq}) {
    flex-direction: column;
  } ;
`;
