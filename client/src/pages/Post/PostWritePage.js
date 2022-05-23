import React from "react";
import styled from "styled-components";
import PostWriteContainer from "../../containers/post/PostWriteContainer";

const PostWritePage = () => {
  return (
    <Wrapper>
      <PostWriteContainer />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
  margin-bottom: 70px;
`;

export default PostWritePage;
