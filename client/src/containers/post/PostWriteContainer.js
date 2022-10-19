import React, { useState } from "react";
import { useDispatch } from "react-redux";
import PostWrite from "../../components/Post/PostWrite";
import { POSTUPLOAD_REQUEST } from "../../redux/types";
import { useNavigate } from "react-router-dom";

const PostWriteContainer = () => {
  const [post, setPost] = useState({
    title: "",
    category: "",
    contents: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const handlePostChange = (e) => {
    setPost({
      ...post,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
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

  return (
    <PostWrite
      handlePostChange={handlePostChange}
      post={post}
      setPost={setPost}
      onSubmit={onSubmit}
    />
  );
};

export default PostWriteContainer;
