import React from "react";
import styled from "styled-components";
import PostCardList from "../components/Post/PostCardList";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { SEARCH_REQUEST } from "../redux/types";

const SearchPage = () => {
  const { searchResult } = useParams();
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.post.posts);

  useEffect(() => {
    dispatch({
      type: SEARCH_REQUEST,
      payload: searchResult,
    });
  }, [dispatch, searchResult]);

  return (
    <Wrapper>
      <h1>검색 결과: {searchResult}</h1>
      <PostCardList posts={posts} />
    </Wrapper>
  );
};

export default SearchPage;

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
