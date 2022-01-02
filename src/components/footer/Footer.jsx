import styled from "@emotion/styled";
import React from "react";

const Footer = ({ fontSize = "18px" }) => {
  return (
    <StyeldFooter>
      <Title fontSize={fontSize}>Code your dream</Title>
    </StyeldFooter>
  );
};

export default Footer;

const StyeldFooter = styled.footer`
  width: 100%;
  padding: 0.5rem;
  background-color: ${({ theme }) => theme.colors.makerGreen};
  text-align: center;
`;

const Title = styled.p`
  color: ${({ theme }) => theme.colors.makerWhite};
  font-size: ${({ fontSize }) => fontSize};
`;
