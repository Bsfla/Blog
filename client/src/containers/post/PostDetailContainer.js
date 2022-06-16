import React from "react";
import PostDetail from "../../components/Post/PostDetail";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { POSTDETAILLOAD_REQUEST } from "../../redux/types";

const PostDetailContainer = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(
      {
        type: POSTDETAILLOAD_REQUEST,
        payload: id,
        navigate,
      },
      []
    );
  });
  return <PostDetail />;
};

export default PostDetailContainer;
