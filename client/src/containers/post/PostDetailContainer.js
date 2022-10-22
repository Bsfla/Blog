import React from "react";
import PostDetail from "../../components/Post/PostDetail";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  COMMENTLOAD_REQUEST,
  POSTDELETE_REQUEST,
  POSTDETAILLOAD_REQUEST,
} from "../../redux/types";

const PostDetailContainer = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = useSelector((state) => state.post);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: POSTDETAILLOAD_REQUEST,
      payload: id,
      navigate,
    });
  }, [dispatch, id, navigate]);

  const handlePostDelete = () => {
    const token = localStorage.getItem("token");
    const body = {
      id,
      token,
    };

    dispatch({
      type: POSTDELETE_REQUEST,
      payload: body,
      navigate,
    });
  };

  return <PostDetail post={post} handlePostDelete={handlePostDelete} id={id} />;
};

export default PostDetailContainer;
