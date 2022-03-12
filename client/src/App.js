import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import AppNavBar from "./components/AppNavBar/AppNavBar";
import Modal from "./components/Modal/Modal";
import GlobalStyle from "./styles/GlobalStyle";
import { useState } from "react";

function App() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <GlobalStyle />
      <AppNavBar />
      <Header />
      <button onClick={() => setOpen(true)}></button>
      {open ? <Modal /> : null}
      <h1>Hello Boddy</h1>
      <Footer />
    </>
  );
}

export default App;
