import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import AppNavBar from "./components/AppNavBar/AppNavBar";
import GlobalStyle from "./styles/GlobalStyle";
import Routing from "./routes/Routing";
import styled from "styled-components";

function App() {
  return (
    <>
      <GlobalStyle />
      <AppNavBar />
      <Header />
      <Wrapper>
        <Routing />
      </Wrapper>
      <Footer />
    </>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-left: 70px;
  padding-right: 70px;
`;

export default App;
