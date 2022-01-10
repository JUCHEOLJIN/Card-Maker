import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import styled from "@emotion/styled";
import Login from "./components/login/Login";
import Maker from "./components/maker/Maker";

function App({ authService, FileInput }) {
  return (
    <Container>
      <Router>
        <Routes>
          <Route path="/" element={<Login authService={authService} />} />
          <Route
            path="/maker"
            element={<Maker authService={authService} FileInput={FileInput} />}
          />
        </Routes>
      </Router>
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
