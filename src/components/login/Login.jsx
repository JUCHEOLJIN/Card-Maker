import React, { useEffect } from "react";
import styled from "@emotion/styled";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import { useNavigate } from "react-router-dom";

const Login = ({ authService }) => {
  const navigate = useNavigate();

  const goToMaker = (userId) => {
    navigate("/maker", { state: { id: userId } });
  };

  const onLogin = (event) => {
    authService //
      .login(event.currentTarget.textContent)
      .then((data) => goToMaker(data.user.uid));
  };

  useEffect(() => {
    authService.onAuthChange((user) => {
      user && goToMaker(user.id);
    });
  });

  return (
    <Container>
      <Header />
      <LoginSection>
        <h1>Login</h1>
        <ul>
          <li>
            <button onClick={onLogin}>Google</button>
          </li>
          <li>
            <button onClick={onLogin}>Github</button>
          </li>
        </ul>
      </LoginSection>
      <Footer />
    </Container>
  );
};

export default Login;

const Container = styled.section`
  width: 30em;
`;

const LoginSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.makerWhite};

  h1 {
    font-size: 20px;
    font-weight: bold;
  }

  ul {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 0.5rem;
  }

  li {
    margin-bottom: 1rem;
  }

  button {
    width: 100%;
    height: 2.5rem;
    border: 2px solid ${({ theme }) => theme.colors.makerGreen};
    border-radius: 24px;
    background: transparent;
    color: ${({ theme }) => theme.colors.makerBlack};
    font-size: 16px;
    cursor: pointer;

    &:hover {
      background-color: ${({ theme }) => theme.colors.makerLightPink};
    }
  }
`;
