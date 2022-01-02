import styled from "@emotion/styled";
import Login from "./components/login/Login";

function App({ authService }) {
  return (
    <Container>
      <Login authService={authService} />
    </Container>
  );
}

export default App;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.makerGrey};
`;
