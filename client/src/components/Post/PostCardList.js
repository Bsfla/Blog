import React from "react";
import styled from "styled-components";
import PostCard from "./PostCard";

const PostList = ({ posts }) => {
  return (
    <Wrapper>
      {posts.map((post) => (
        <PostCard post={post} />
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 90%;
`;

export default PostList;
