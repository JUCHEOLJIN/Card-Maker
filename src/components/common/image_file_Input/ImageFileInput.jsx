import React, { useRef } from "react";
import styled from "@emotion/styled";

const ImageFileInput = ({ className, imageUploader, name, onFileChange }) => {
  const inputRef = useRef();
  const onButtonClick = (e) => {
    inputRef.current.click();
  };

  const onChange = async (event) => {
    const uploaded = await imageUploader.upload(event.target.files[0]);
    onFileChange({
      name: uploaded.original_filename,
      url: uploaded.url,
    });
  };

  return (
    <Wrapper>
      <StyledInput
        ref={inputRef}
        type="file"
        accept="image/*"
        name="file"
        onChange={onChange}
      />
      <StyledButton className={className} onClick={onButtonClick} type="button">
        {name ?? "No file"}
      </StyledButton>
    </Wrapper>
  );
};

export default ImageFileInput;

const Wrapper = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
`;

const StyledInput = styled.input`
  display: none;
`;

const StyledButton = styled.button`
  width: 100%;
  padding: 0.5em;
  border: 0;
  border-bottom: 1px solid ${({ theme }) => theme.makerBlack};
  border-right: 1px solid ${({ theme }) => theme.makerBlack};
  background: ${({ theme }) => theme.colors.makeLightGrey};
  font-size: 0.8rem;
  font-weight: bold;
  cursor: pointer;
`;
