import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import PostWriteForm from "../../components/Post/PostWriteForm";
import { POSTDETAILLOAD_REQUEST } from "../../redux/types";
import { useNavigate, useParams } from "react-router-dom";

const PostEditPage = () => {
  const post = useSelector((state) => state.post);
  const [editPost, setEditPost] = useState({
    title: "",
    category: "",
    contents: "",
  });

  const { id } = useParams();

  const dispatch = useDispatch();

  const handlePostTitleCategoryChange = (e) => {
    setEditPost({
      ...editPost,
      [e.target.name]: e.target.value,
    });
  };

  const handlePostContentsChange = (e) => {
    setEditPost({
      ...editPost,
      contents: e,
    });
  };

  const handlePostSubmit = (e) => {
    e.preventDefault();
    const { title, category, contents } = editPost;
    const token = localStorage.getItem("token");
    const body = { title, category, contents, token };

    /*
    dispatch({
      type: POSTUPLOAD_REQUEST,
      payload: body,
      navigate,
    });
    */
  };

  useEffect(() => {
    setEditPost({
      ...editPost,
      title: post.title,
      category: post.category,
      contents: post.contents,
    });
  }, []);

  console.log(editPost);

  return (
    <PostWriteForm
      handlePostTitleCategoryChange={handlePostTitleCategoryChange}
      handlePostContentsChange={handlePostContentsChange}
      handlePostSubmit={handlePostSubmit}
      post={editPost}
    />
  );
};

export default PostEditPage;
