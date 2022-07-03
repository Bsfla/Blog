import React, { useState } from "react";
import { useDispatch } from "react-redux";
import PostWrite from "../../components/Post/PostWrite";
import { POSTUPLOAD_REQUEST } from "../../redux/types";
import { useNavigate } from "react-router-dom";

const PostWriteContainer = () => {
  const [form, setForm] = useState({
    title: "",
    category: "",
    contents: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { title, category, contents } = form;
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
      onChange={onChange}
      form={form}
      setForm={setForm}
      onSubmit={onSubmit}
    />
  );
};

export default PostWriteContainer;
