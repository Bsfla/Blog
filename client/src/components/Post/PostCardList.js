import React from "react";
import styled from "styled-components";
import PostCard from "./PostCard";

const PostList = () => {
    return (
        <Wrapper>
            <PostCard />
        </Wrapper>
    )
}

const Wrapper = styled.div`
   width: 90%;
   height: 100vh;
`

export default PostList;