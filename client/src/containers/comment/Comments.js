import AddCommentContainer from "./AddCommentContainer";
import CommentList from "../../components/Comment/CommentList";
import { COMMENTLOAD_REQUEST } from "../../redux/types";
import styled from "styled-components";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const Comments = () => {
  const dispatch = useDispatch();
  const comments = useSelector((state) => state.comments.comments);
  const { id } = useParams();

  useEffect(() => {
    dispatch({
      type: COMMENTLOAD_REQUEST,
      payload: id,
    });
  }, [dispatch, id]);

  return (
    <Wrapper>
      <AddCommentContainer />
      <CommentList comments={comments} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  border-top: solid #ab47bc;
`;

export default React.memo(Comments);
