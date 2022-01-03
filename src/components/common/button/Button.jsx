import React from "react";
import styled from "@emotion/styled";

const Button = ({ name, onClick }) => {
  return <StyledButton onClick={onClick}>{name}</StyledButton>;
};

export default Button;

const StyledButton = styled.button`
  flex: 1 1 50%;
  padding: 0.5em;
  background-color: ${({ theme }) => theme.colors.makerGreen};
  color: ${({ theme }) => theme.colors.makerWhite};
  font-size: 0.8rem;
  font-weight: bold;

  &:hover {
    opacity: 0.8;
  }
`;
