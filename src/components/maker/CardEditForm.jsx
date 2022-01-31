import React from "react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import Button from "../common/button/Button";

const CardEditForm = ({
  card,
  card: { name, company, title, email, message, theme, fileName },
  deleteCard,
  CreateOrUpdateCard,
  FileInput,
}) => {
  const onSubmit = (event) => {
    event.preventDefault();
    deleteCard(card);
  };

  const onChange = (event) => {
    if (event.currentTarget == null) {
      return;
    }
    CreateOrUpdateCard({
      ...card,
      [event.target.name]: event.target.value,
    });
  };

  const onFileChange = (file) => {
    CreateOrUpdateCard({ ...card, fileName: file.name, fileURL: file.url });
  };

  return (
    <EditForm>
      <Input
        type="text"
        name="name"
        value={name}
        css={flexStyle}
        onChange={onChange}
      />
      <Input
        type="text"
        name="company"
        value={company}
        css={flexStyle}
        onChange={onChange}
      />
      <Select name="theme" value={theme} css={flexStyle} onChange={onChange}>
        <Option>light</Option>
        <Option>dark</Option>
        <Option>colorful</Option>
      </Select>
      <Input
        type="text"
        name="title"
        value={title}
        css={flexStyle}
        onChange={onChange}
      />
      <Input
        type="text"
        name="email"
        value={email}
        css={flexStyle}
        onChange={onChange}
      />
      <Textarea name="message" value={message} onChange={onChange} />
      <div
        css={css`
          flex: 1 1 50%;
        `}
      >
        <FileInput onFileChange={onFileChange} name={fileName} />
      </div>
      <Button name="Delete" onClick={onSubmit} />
    </EditForm>
  );
};

export default CardEditForm;

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
