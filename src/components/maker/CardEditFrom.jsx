import React from "react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import Button from "../common/button/Button";
import ImageFileInput from "../common/image_file_Input/ImageFileInput";
const CardEditFrom = ({
  card: { name, company, title, email, message, theme, fileName, fileURL },
}) => {
  const onSubmit = (event) => {
    event.preventDefault();
    console.log("submit");
  };
  return (
    <EditForm>
      <Input type="text" name="name" value={name} css={flexStyle} />
      <Input type="text" name="company" value={company} css={flexStyle} />
      <Select name="theme" value={theme} css={flexStyle}>
        <Option>Light</Option>
        <Option>Dark</Option>
        <Option>Colorful</Option>
      </Select>
      <Input type="text" name="title" value={title} css={flexStyle} />
      <Input type="text" name="email" value={email} css={flexStyle} />
      <Textarea name="message" value={message} />
      <div
        css={css`
          flex: 1 1 50%;
        `}
      >
        <ImageFileInput />
      </div>
      <Button name="Delete" onClick={onSubmit} />
    </EditForm>
  );
};

export default CardEditFrom;

const EditForm = styled.form`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin-bottom: 1em;
  border-top: 1px solid ${({ theme }) => theme.makerBlack};
  border-left: 1px solid ${({ theme }) => theme.makerBlack};
`;

const Input = styled.input`
  width: 100%;
  padding: 0.5em;
  border: 0;
  border-bottom: 1px solid ${({ theme }) => theme.makerBlack};
  border-right: 1px solid ${({ theme }) => theme.makerBlack};
  background: ${({ theme }) => theme.colors.makerWhite};
  font-size: 0.8rem;
  outline: none;
`;

const Select = styled.select`
  width: 100%;
  padding: 0.5em;
  border: 0;
  border-bottom: 1px solid ${({ theme }) => theme.makerBlack};
  border-right: 1px solid ${({ theme }) => theme.makerBlack};
  background: ${({ theme }) => theme.colors.makerWhite};
  font-size: 0.8rem;
  outline: none;
`;

const Option = styled.option`
  outline: none;
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 0.5em;
  border: 0;
  border-bottom: 1px solid ${({ theme }) => theme.makerBlack};
  border-right: 1px solid ${({ theme }) => theme.makerBlack};
  background: ${({ theme }) => theme.colors.makerWhite};
  font-size: 0.8rem;
  outline: none;
`;

const flexStyle = css`
  flex: 1 1 30%;
`;
