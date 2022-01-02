/** @jsxImportResource @emotion/react */
import React from "react";
import styled from "@emotion/styled";

const Header = ({ onLogout }) => {
  return (
    <StyledHeader>
      {onLogout && <LogoutBtn onClick={onLogout}>Logout</LogoutBtn>}
      <Logo src="/images/logo.png" />
      <Title>Business Card Maker</Title>
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.header`
  position: relative;
  width: 100%;
  padding: 0.5rem;
  background-color: ${({ theme }) => theme.colors.makerGreen};
  text-align: center;
`;

const LogoutBtn = styled.button`
  position: absolute;
  right: 3em;
  top: 1em;
  padding: 0.8em;
  border-radius: 20%;
  background-color: ${({ theme }) => theme.colors.makerBlack};
  color: ${({ theme }) => theme.colors.makerWhite};
  outline: none;
  border: 0;
  cursor: pointer;
`;

const Logo = styled.img`
  width: 3em;
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.makerWhite};
  font-size: 18px;
`;
