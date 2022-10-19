import React from "react";
import AddCommentContainer from "../../containers/comment/AddCommentContainer";
import styled from "styled-components";

const CommentList = () => {
  return (
    <Wrapper>
      <AddCommentContainer />
    </Wrapper>
  );
};

export default CommentList;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  border-top: solid #ab47bc;
`;
