import React from "react";
import styled from "styled-components";
import PostCard from "./PostCard";

const PostList = ({ posts }) => {
  return (
    <Wrapper>
      {posts.map((post) => (
        <PostCard post={post} key={post._id} />
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  margin-top: 40px;
  width: 90%;
`;

export default PostList;
