import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import {
  HOME_PAGE,
  POST_DETAIL,
  POST_EDIT,
  POST_WRITE,
  PROFILE,
  CATEGORY_RESULT,
  SEARCH_RESULT,
} from "../consts";
import Spinner from "../components/Spinner/Spinner";

const HomePage = lazy(() => import("../pages/HomePage"));
const PostWritePage = lazy(() => import("../pages/Post/PostWritePage"));
const PostDetailPage = lazy(() => import("../pages/Post/PostDetailPage"));
const PostEditPage = lazy(() => import("../pages/Post/PostEditPage"));
const CategoryPage = lazy(() => import("../pages/CategoryPage"));
const SearchPage = lazy(() => import("../pages/SearchPage"));
const ProfilePage = lazy(() => import("../pages/ProfilePage"));

const Routing = () => {
  return (
    <Suspense fallback={<Spinner />}>
      <Routes>
        <Route path={HOME_PAGE} element={<HomePage />} />
        <Route path={POST_WRITE} element={<PostWritePage />} />
        <Route path={POST_DETAIL} element={<PostDetailPage />} />
        <Route path={POST_EDIT} element={<PostEditPage />} />
        <Route path={CATEGORY_RESULT} element={<CategoryPage />} />
        <Route path={SEARCH_RESULT} element={<SearchPage />} />
        <Route path={PROFILE} element={<ProfilePage />} />
        <Route path="*" element={<div>Not Found</div>} />
      </Routes>
    </Suspense>
  );
};

export default Routing;
