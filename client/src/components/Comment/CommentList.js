import React from "react";
import styled from "styled-components";
import CommentItem from "./CommentItem";

const CommentList = ({ comments }) => {
  return (
    <>
      {comments.map((comment) => (
        <CommentItem comment={comment} key={comment._id} />
      ))}
    </>
  );
};

export default CommentList;
