import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { POSTDELETE_REQUEST, POSTDETAILLOAD_REQUEST } from "../../redux/types";
import styled from "styled-components";
import { FaPen, FaMouse } from "react-icons/fa";
import Comments from "../../containers/comment/Comments";
import { Link } from "react-router-dom";

const PostDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { category, title, creatorId, date, views, contents } = useSelector(
    (state) => state.post
  );
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

  return (
    <Wrapper>
      <ButtonGroup>
        <Link to={"/"}>
          <Button>Home</Button>
        </Link>
        <Link to={`/post/${id}/edit`}>
          <Button>Edit</Button>
        </Link>
        <Button onClick={handlePostDelete}>Delete</Button>
      </ButtonGroup>
      <PostInfo>
        <CategoryTitle>
          <Category>{category}</Category>
          <Title>{title}</Title>
        </CategoryTitle>
        <Writer>{creatorId}</Writer>
      </PostInfo>
      <DateViews>
        <Date>
          <FaPen />
          {date}
        </Date>
        <Views>
          <FaMouse />
          {views}
        </Views>
      </DateViews>
      <PostContent dangerouslySetInnerHTML={{ __html: contents }} />
      <Comments />
    </Wrapper>
  );
};
const Wrapper = styled.article`
  display: flex;
  flex-direction: column;
`;
const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 30px;
  border-bottom: solid;
  border-bottom-color: #ab47bc;
  padding-bottom: 30px;
  margin-bottom: 10px;
`;

const Button = styled.button`
  background-color: #3d5afe;
  width: 15rem;
  padding: 10px;
  border: none;
  color: white;
  border-radius: 5px;
  margin-right: 30px;
  cursor: pointer;
`;

const PostInfo = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 13px;
  justify-content: space-between;
  align-items: center;
  border-bottom: solid;
  border-bottom-color: #ab47bc;
  padding-bottom: 5px;
`;

const CategoryTitle = styled.div`
  display: flex;
  align-items: center;
`;
const Category = styled.button`
  width: 5em;
  height: 30px;
  padding-left: 10px;
  padding-right: 10px;
  border: none;
  background: #0097a7;
  color: white;
  margin-right: 15px;
`;

const Title = styled.span`
  font-weight: bold;
`;

const Writer = styled.span`
  font-weight: bold;
  font-size: 13px;
  margin-right: 30px;
`;

const DateViews = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
`;

const Date = styled.span`
  display: flex;
  align-items: center;
  margin-right: 10px;
`;

const Views = styled.span`
  display: flex;
  align-items: center;
`;

const PostContent = styled.div`
  width: 100%;
  min-height: 20em;
  font-weight: bold;
  border-bottom-color: #ab47bc;
  padding-bottom: 50px;
`;

export default PostDetailPage;
