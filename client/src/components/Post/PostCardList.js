import React, { forwardRef } from "react";
import styled from "styled-components";
import PostCard from "./PostCard";

const PostList = forwardRef((props, ref) => {
  return (
    <Wrapper>
      <PostListWrapper>
        {props?.posts.map((post) => (
          <PostCard post={post} key={post._id} />
        ))}
      </PostListWrapper>
      <div className="observer" ref={ref} />
    </Wrapper>
  );
});

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
  width: 100%;
  height: 100%;
  position: relative;

  .observer {
    position: relative;
    bottom: 0;
  }
`;

const PostListWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
`;

export default PostList;
