import React from "react";
import Spinner from "../components/Spinner/Spinner";
import PostListContainer from "../containers/post/PostListContainer";
import styled from "styled-components";

const HomePage = () => {
    return (
        <Wrapper>
          <PostListContainer />
        </Wrapper>
    )
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`

export default HomePage;