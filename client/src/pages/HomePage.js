import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import useInfiniteScroll from "../hooks/useInfiniteScroll";
import PostList from "../components/Post/PostCardList";
import { POST_REQUEST } from "../redux/types";
import CategoryList from "../components/Category/CategoryList";

const HomePage = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.post.posts);
  const categories = useSelector((state) => state.post.categories);
  const { loadMoreRef } = useInfiniteScroll();

  useEffect(() => {
    dispatch({ type: POST_REQUEST, payload: 0 });
  }, [dispatch]);

  return (
    <>
      <CategoryList categories={categories} />
      <PostList posts={posts} ref={loadMoreRef} />
    </>
  );
};

export default HomePage;
