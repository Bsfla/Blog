import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import AppNavBar from "./components/AppNavBar/AppNavBar";
import GlobalStyle from "./styles/GlobalStyle";
import { useState } from "react";

function App() {
  return (
    <>
      <GlobalStyle />
      <AppNavBar />
      <Header />
      <h1>Hello Boddy</h1>
      <Footer />
    </>
  );
}

export default App;
