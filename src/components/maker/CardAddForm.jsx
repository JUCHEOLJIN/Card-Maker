import React, { useRef } from "react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import Button from "../common/button/Button";
import ImageFileInput from "../common/image_file_Input/ImageFileInput";
const CardAddForm = ({ onAdd }) => {
  const formRef = useRef();
  const nameRef = useRef();
  const companyRef = useRef();
  const themeRef = useRef();
  const titleRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const card = {
      id: Date.now(), //uuid
      name: nameRef.current.value || "",
      company: companyRef.current.value || "",
      theme: themeRef.current.value,
      title: titleRef.current.value || "",
      email: emailRef.current.value || "",
      message: messageRef.current.value || "",
      fileName: "",
      fileURL: null,
    };
    formRef.current.reset();
    onAdd(card);
  };
  return (
    <EditForm ref={formRef}>
      <Input
        type="text"
        name="name"
        ref={nameRef}
        placeholder="name"
        css={flexStyle}
      />
      <Input
        type="text"
        name="company"
        ref={companyRef}
        placeholder="company"
        css={flexStyle}
      />
      <Select name="theme" ref={themeRef} placeholder="theme" css={flexStyle}>
        <Option>light</Option>
        <Option>dark</Option>
        <Option>colorful</Option>
      </Select>
      <Input
        type="text"
        name="title"
        ref={titleRef}
        placeholder="title"
        css={flexStyle}
      />
      <Input
        type="text"
        name="email"
        ref={emailRef}
        placeholder="email"
        css={flexStyle}
      />
      <Textarea name="message" ref={messageRef} placeholder="message" />
      <div
        css={css`
          flex: 1 1 50%;
        `}
      >
        <ImageFileInput />
      </div>
      <Button name="Add" onClick={handleSubmit} />
    </EditForm>
  );
};

export default CardAddForm;

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
