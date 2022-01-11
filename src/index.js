import React from "react";
import ReactDOM from "react-dom";
import { Global, ThemeProvider } from "@emotion/react";
import App from "./App";
import reset from "./styles/reset";
import theme from "./styles/theme";
import reportWebVitals from "./reportWebVitals";
import AuthService from "./service/auth_service";
import { firebaseApp } from "./service/firebase";
import ImageUploader from "./service/image_uploader";
import ImageFileInput from "./components/common/image_file_Input/ImageFileInput";
import CardRepository from "./service/card_repository";

const authService = new AuthService(firebaseApp);
const imageUploader = new ImageUploader();
const cardRepository = new CardRepository(firebaseApp);

const FileInput = (props) => (
  <ImageFileInput {...props} imageUploader={imageUploader} />
);

ReactDOM.render(
  <React.StrictMode>
    <Global styles={reset} />
    <ThemeProvider theme={theme}>
      <App
        authService={authService}
        FileInput={FileInput}
        cardRepository={cardRepository}
      />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
