import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import PostWritePage from "../pages/Post/PostWritePage";
import PostDetailPage from "../pages/Post/PostDetailPage";
import PostEditPage from "../pages/Post/PostEditPage";
import CategoryPage from "../pages/CategoryPage";
import SearchPage from "../pages/SearchPage";
import ProfilePage from "../pages/ProfilePage";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/postwrite" element={<PostWritePage />} />
      <Route path="/post/:id" element={<PostDetailPage />} />
      <Route path="/post/:id/edit" element={<PostEditPage />} />
      <Route path="/category/:categoryResult" element={<CategoryPage />} />
      <Route path="/search/:searchResult" element={<SearchPage />} />
      <Route path="/profile" element={<ProfilePage />} />
    </Routes>
  );
};

export default Routing;
