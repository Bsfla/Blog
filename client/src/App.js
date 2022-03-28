import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import AppNavBar from "./components/AppNavBar/AppNavBar";
import GlobalStyle from "./styles/GlobalStyle";
import Routing from "./routes/Routing";

function App() {
  return (
    <>
      <GlobalStyle />
      <AppNavBar />
      <Header />
      <Routing />
      <Footer />
    </>
  );
}

export default App;
