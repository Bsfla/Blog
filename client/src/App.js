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
  flex-direction: column;
  align-items: center;
  position: relative;
  padding-left: 70px;
  padding-right: 70px;
  padding-bottom: 10rem;
  min-height: 100%;
  background-color: #eeeeee;
`;

export default App;
