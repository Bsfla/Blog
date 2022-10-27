import React, { useState } from "react";
import useInput from "../../hooks/useInput";
import { useDispatch } from "react-redux";
import PostWriteForm from "../../components/Post/PostWriteForm";
import { POSTUPLOAD_REQUEST } from "../../redux/types";
import { useNavigate } from "react-router-dom";

const PostWriteContainer = () => {
  const [{ title, category }, handlePostTitleCategoryChange] = useInput({
    title: "",
    category: "",
  });
  
  const [contents, setContents] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handlePostContentsChange = (e) => {
    setContents(e);
  };

  const handlePostSubmit = (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token");
    const body = { title, category, contents, token };

    dispatch({
      type: POSTUPLOAD_REQUEST,
      payload: body,
      navigate,
    });
  };

  return (
    <PostWriteForm
      handlePostTitleCategoryChange={handlePostTitleCategoryChange}
      handlePostContentsChange={handlePostContentsChange}
      handlePostSubmit={handlePostSubmit}
      post={{ title, category, contents }}
    />
  );
};

export default PostWriteContainer;
