import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import PostWritePage from "../pages/Post/PostWritePage";
import PostDetailPage from "../pages/Post/PostDetailPage";
import PostEditPage from "../pages/Post/PostEditPage";
import CategoryPage from "../pages/CategoryPage";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/postwrite" element={<PostWritePage />} />
      <Route path="/post/:id" element={<PostDetailPage />} />
      <Route path="/post/:id/edit" element={<PostEditPage />} />
      <Route path="/category/:categoryResult" element={<CategoryPage />} />
    </Routes>
  );
};

export default Routing;
