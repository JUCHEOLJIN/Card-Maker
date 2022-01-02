/** @jsxImportResource @emotion/react */
import React, { useEffect } from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { useNavigate } from "react-router-dom";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import Editor from "./Editor";
import Preview from "./Preview";

const Maker = ({ authService }) => {
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

  return (
    <StyledSection>
      <Header onLogout={onLogout} fontSize="24px" />
      <Contents>
        <Editor />
        <Preview />
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
`;

const Contents = styled.div`
  display: flex;
  flex: 1;
  width: 100%;

  @media screen and (max-width: ${({ theme }) => theme.size.mq}) {
    flex-direction: column;
  } ;
`;

const Content = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.makerWhite};
  color: ${({ theme }) => theme.colors.makerGreen};
  font-size: 24px;
  text-align: center;

  &:first-child {
    border-right: 1px solid ${({ theme }) => theme.colors.makerLightGrey};
  }
`;
