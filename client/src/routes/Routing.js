import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

const HomePage = lazy(() => import("../pages/HomePage"));
const PostWritePage = lazy(() => import("../pages/Post/PostWritePage"));
const PostDetailPage = lazy(() => import("../pages/Post/PostDetailPage"));
const PostEditPage = lazy(() => import("../pages/Post/PostEditPage"));
const CategoryPage = lazy(() => import("../pages/CategoryPage"));
const SearchPage = lazy(() => import("../pages/SearchPage"));
const ProfilePage = lazy(() => import("../pages/ProfilePage"));

const Routing = () => {
  return (
    <Suspense fallback={<div>Loading</div>}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/postwrite" element={<PostWritePage />} />
        <Route path="/post/:id" element={<PostDetailPage />} />
        <Route path="/post/:id/edit" element={<PostEditPage />} />
        <Route path="/category/:categoryResult" element={<CategoryPage />} />
        <Route path="/search/:searchResult" element={<SearchPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </Suspense>
  );
};

export default Routing;
