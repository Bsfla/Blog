import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import PostWrite from "../../components/Post/PostWrite";

const PostWriteContainer = () => {
  const [form, setForm] = useState({
    title: "",
    category: "",
    description: "",
  });

  const dispatch = useDispatch();
  const onChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { title, category, description } = form;
    const token = localStorage.getItem("token");
    const body = { title, category, description, token };
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
