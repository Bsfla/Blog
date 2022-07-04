import React, { useState } from "react";
import Comments from "../../components/Comment/Comments";
import { useSelector, useDispatch } from "react-redux";
import { COMMENTUPLOAD_REQUEST } from "../../redux/types";

const CommentContainer = () => {
  const [contents, setContents] = useState("");
  const { id, name, email } = useSelector((state) => state.auth.user);
  const token = localStorage.getItem("token");
  const dispatch = useDispatch();

  const onChange = (e) => {
    setContents(e.target.value);
  };

  const onSubmit = (e) => {
    console.log(e);
    e.preventDefault();
    const body = { id, userName: name, userId: email, token, contents };
    dispatch({
      type: COMMENTUPLOAD_REQUEST,
      payload: body,
    });
  };

  return <Comments onChange={onChange} onSubmit={onSubmit} />;
};

export default CommentContainer;
