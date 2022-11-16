import styled from "styled-components";
import { Background } from "./assets";
import { Route, Routes } from "react-router-dom";
import { RegistrationPage } from "./pages/notice/RegistrationPage";
import { StyleProvider } from "./styles";
import { Header } from "./components/header";
import { HomePage } from "./pages/HomePage";
import { CompnayManagementPage } from "./pages/company/ManagementPage";
import { ReportManagementPage } from "./pages/report/ManagementPage";

export const App = () => {
  return (
    <_Background>
      <StyleProvider>
        <_Wrapper>
          <div>
            <Header />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route
                path="/notice/registration"
                element={<RegistrationPage />}
              />
              <Route
                path="/company/management"
                element={<CompnayManagementPage />}
              />
              <Route
                path="/report/management"
                element={<ReportManagementPage />}
              />
            </Routes>
          </div>
        </_Wrapper>
      </StyleProvider>
    </_Background>
  );
};

const _Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: columns;
  > div {
    width: 1420px;
  }
`;

const _Background = styled.div`
  background-image: url(${Background});
  height: 100vh;
  background-size: cover;
`;
