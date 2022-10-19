import React, { useState } from "react";
import AddComment from "../../components/Comment/AddComment";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { COMMENTUPLOAD_REQUEST } from "../../redux/types";

const AddCommentContainer = () => {
  const [contents, setContents] = useState("");
  const { userId, userName } = useSelector((state) => state.auth);
  const { id } = useParams();

  const token = localStorage.getItem("token");
  const dispatch = useDispatch();

  const handleCommentChange = (e) => {
    setContents(e.target.value);
  };

  const handleAddComment = (e) => {
    e.preventDefault();

    const body = { id, userName, userId, token, contents };
    dispatch({
      type: COMMENTUPLOAD_REQUEST,
      payload: body,
    });
  };

  return (
    <AddComment
      handleCommentChange={handleCommentChange}
      handleAddComment={handleAddComment}
    />
  );
};

export default AddCommentContainer;
