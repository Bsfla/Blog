import React, { useState } from "react";
import { useDispatch } from "react-redux";
import PostWriteForm from "../../components/Post/PostWriteForm";
import { POSTUPLOAD_REQUEST } from "../../redux/types";
import { useNavigate } from "react-router-dom";

const PostEditPage = () => {
  const [post, setPost] = useState({
    title: "",
    category: "",
    contents: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handlePostTitleCategoryChange = (e) => {
    setPost({
      ...post,
      [e.target.name]: e.target.value,
    });
  };

  const handlePostContentsChange = (e) => {
    setPost({
      ...post,
      contents: e,
    });
  };

  const handlePostSubmit = (e) => {
    e.preventDefault();
    const { title, category, contents } = post;
    const token = localStorage.getItem("token");
    const body = { title, category, contents, token };

    dispatch({
      type: POSTUPLOAD_REQUEST,
      payload: body,
      navigate,
    });
  };

  return <div>안녕하세여</div>;
};

export default PostEditPage;
