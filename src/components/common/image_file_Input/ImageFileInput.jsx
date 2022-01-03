import React from "react";
import styled from "@emotion/styled";

const ImageFileInput = ({ className }) => {
  return <StyledButton className={className}>Image</StyledButton>;
};

export default ImageFileInput;

const StyledButton = styled.button`
  width: 100%;
  padding: 0.5em;
  border: 0;
  border-bottom: 1px solid ${({ theme }) => theme.makerBlack};
  border-right: 1px solid ${({ theme }) => theme.makerBlack};
  background: ${({ theme }) => theme.colors.makerWhite};
  font-size: 0.8rem;
`;
