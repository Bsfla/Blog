import React from "react";
import styled from "styled-components";
import AddComment from "./AddComment";

const Comments = ({ onChange, onSubmit }) => {
  return (
    <Wrapper>
      <AddComment onChange={onChange} onSubmit={onSubmit} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  border-top: solid #ab47bc;
`;

export default Comments;
