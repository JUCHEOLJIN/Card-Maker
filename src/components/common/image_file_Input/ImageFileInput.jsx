import React, { useRef, useState } from "react";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

const ImageFileInput = ({ className, imageUploader, name, onFileChange }) => {
  const [loading, setLoading] = useState(false);

  const inputRef = useRef();
  const onButtonClick = (e) => {
    inputRef.current.click();
  };

  const onChange = async (event) => {
    setLoading(true);
    const uploaded = await imageUploader.upload(event.target.files[0]);
    setLoading(false);
    onFileChange({
      name: uploaded.original_filename,
      url: uploaded.url,
    });
  };

  if (loading) {
    return (
      <Wrapper>
        <StyledLoading />
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <StyledInput
        ref={inputRef}
        type="file"
        accept="image/*"
        name="file"
        onChange={onChange}
      />
      <StyledButton
        className={className}
        onClick={onButtonClick}
        type="button"
        name={name}
      >
        {name || "No file"}
      </StyledButton>
    </Wrapper>
  );
};

export default ImageFileInput;

const spin = keyframes`
  0%{
    transform: rotate(0deg)
  }
  100%{
    transform: rotate(360deg)
  }
`;

const StyledLoading = styled.div`
  width: 1.5em;
  height: 1.5em;
  border-radius: 50%;
  border: 3px solid ${({ theme }) => theme.colors.makerLightGrey};
  border-top: 3px solid ${({ theme }) => theme.colors.makerPink};
  animation: ${spin} 2s linear infinite;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.makerBlack};
  border-right: 1px solid ${({ theme }) => theme.makerBlack};
`;

const StyledInput = styled.input`
  display: none;
`;

const StyledButton = styled.button`
  width: 100%;
  height: 100%;
  padding: 0.5em;
  border: 0;
  background: ${({ theme, name }) =>
    name ? theme.colors.makerLightPink : theme.colors.makerLightGrey};
  font-size: 0.8rem;
  font-weight: bold;
  cursor: pointer;
`;
