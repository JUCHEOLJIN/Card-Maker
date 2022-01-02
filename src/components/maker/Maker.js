import styled from "@emotion/styled";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../footer/Footer";
import Header from "../header/Header";

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
      <Header onLogout={onLogout} />
      <Footer />
    </StyledSection>
  );
};

export default Maker;

const StyledSection = styled.section``;
