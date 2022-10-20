import React from "react";
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
