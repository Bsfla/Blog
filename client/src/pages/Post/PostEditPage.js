import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PostWriteForm from "../../components/Post/PostWriteForm";
import { POSTDETAILLOAD_REQUEST } from "../../redux/types";
import { useNavigate, useParams } from "react-router-dom";

const PostEditPage = () => {
  const [editPost, setEditPost] = useState({
    title: "",
    category: "",
    contents: "",
  });

  const post = useSelector((state) => state.post);

  console.log(post);

  const dispatch = useDispatch();
  const navigate = useNavigate();

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

    console.log(body);

    /*
    dispatch({
      type: POSTUPLOAD_REQUEST,
      payload: body,
      navigate,
    });
    */
  };

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
