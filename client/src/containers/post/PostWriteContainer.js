import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import PostWrite from "../../components/Post/PostWrite";

const PostWriteContainer = () => {
  const [form, setForm] = useState({
    title: "",
    category: "",
    content: "",
  });
  const auth = useSelector(state => state.user);
  const dispatch = useDispatch();
  const onChange = (e) => {
     setForm({
         ...form,
         [e.target.name] : e.target.value
     })
  }

};
