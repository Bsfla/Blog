import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import PostWritePage from "../pages/Post/PostWritePage";
import PostDetailPage from "../pages/Post/PostDetailPage";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/postwrite" element={<PostWritePage />}></Route>
      <Route path="/post/:id" element={<PostDetailPage />} />
    </Routes>
  );
};

export default Routing;
