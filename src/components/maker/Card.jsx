import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import EmotionTheme from "../../styles/theme";

const DEFAULT_IMAGE = "/images/default_logo.png";

const Card = ({
  card: { name, company, title, email, message, theme, fileName, fileURL },
}) => {
  const url = fileURL ?? DEFAULT_IMAGE;
  return (
    <CardItem css={cardTheme[theme]}>
      <Avatar src={url} alt="profile photo" />
      <InfoWrapper>
        <Name>{name}</Name>
        <Company>{company}</Company>
        <Title>{title}</Title>
        <Email>{email}</Email>
        <Message>{message}</Message>
      </InfoWrapper>
    </CardItem>
  );
};

export default Card;

const CardItem = styled.li`
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 0.5em;
  padding: 0.2em 0;
  border-radius: 1em;
  background-color: yellow;
  box-shadow: 6px 6px 8px 0px ${({ theme }) => theme.colors.makerShadow};
`;

const Avatar = styled.img`
  width: 10em;
  height: 10em;
  padding: 1em;
  margin-left: 0.5em;
  margin-right: 1em;
  border-radius: 50%;
`;

const InfoWrapper = styled.div`
  width: 100%;
`;

const Name = styled.h1`
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 0.2em;
`;

const Company = styled.p`
  margin-bottom: 1em;
  font-size: 0.8rem;

  &::after {
    content: "";
    display: block;
    width: 90%;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.makerWheat};
    transform: translateY(0.5em);
  }
`;

const Title = styled.p`
  font-size: 0.8rem;
  margin-bottom: 0.2em;
`;

const Email = styled.p`
  font-size: 0.8rem;
  margin-bottom: 0.2em;
`;

const Message = styled.p`
  font-size: 0.8rem;
  margin-bottom: 0.2em;
`;

const cardTheme = {
  light: css`
    background-color: ${EmotionTheme.colors.makerWhite};
    color: ${EmotionTheme.colors.makerBlack};
  `,
  dark: css`
    background-color: ${EmotionTheme.colors.makerBlack};
    color: ${EmotionTheme.colors.makerWhite};
  `,
  colorful: css`
    background: ${EmotionTheme.colors.makerColorful};
  `,
};
