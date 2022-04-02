import React from "react";
import styled from "styled-components";
import PostWrite from "../../components/Post/PostWrite";

const PostWritePage = () => {
    return (
        <Wrapper>
           <PostWrite />
        </Wrapper>
    )
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
  margin-bottom: 70px;
`

export default PostWritePage;