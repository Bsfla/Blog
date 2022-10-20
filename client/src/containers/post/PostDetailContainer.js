import React from "react";
import PostDetail from "../../components/Post/PostDetail";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { COMMENTLOAD_REQUEST, POSTDETAILLOAD_REQUEST } from "../../redux/types";

const PostDetailContainer = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();
  const post = useSelector((state) => state.post);
  const comments = useSelector((state) => state.comments);

  useEffect(() => {
    dispatch({
      type: POSTDETAILLOAD_REQUEST,
      payload: id,
      navigate,
    });

    dispatch({
      type: COMMENTLOAD_REQUEST,
      payload: id,
    });
  }, [dispatch, id, navigate]);

  return <PostDetail post={post} comments={comments} />;
};

export default PostDetailContainer;
