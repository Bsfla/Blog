import React, { useEffect } from "react";
import Spinner from "../components/Spinner/Spinner";
import { useSelector, useDispatch } from "react-redux";
import PostList from "../components/Post/PostCardList";
import { POST_REQUEST } from "../redux/types";

const HomePage = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.post.posts);

  useEffect(() => {
    dispatch({ type: POST_REQUEST, payload: 0 });
  }, [dispatch]);

  return <PostList posts={posts} />;
};

export default HomePage;
