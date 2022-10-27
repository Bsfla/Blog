import React from "react";
import styled from "styled-components";
import PostCardList from "../components/Post/PostCardList";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { CATEGORY_REQUEST } from "../redux/types";

const CategoryPage = () => {
  const { categoryResult } = useParams();
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.post.posts);

  useEffect(() => {
    dispatch({
      type: CATEGORY_REQUEST,
      payload: categoryResult,
    });
  }, []);

  return (
    <Wrapper>
      <h1>Category: {categoryResult}</h1>
      <PostCardList posts={posts} />
    </Wrapper>
  );
};

export default CategoryPage;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  h1 {
    position: relative;
    left: 9rem;
    margin-top: 15px;
  }
`;
