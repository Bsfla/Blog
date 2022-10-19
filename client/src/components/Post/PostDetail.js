import React from "react";
import styled from "styled-components";
import { FaPen, FaMouse } from "react-icons/fa";
import CommentList from "../Comment/CommentList";
import AddCommentContainer from "../../containers/comment/AddCommentContainer";
import { Link } from "react-router-dom";

const PostDetail = ({ post }) => {
  return (
    <Wrapper>
      <ButtonGroup>
        <Link to={"/"}>
          <Button>Home</Button>
        </Link>
        <Button>Edit</Button>
        <Button>Delete</Button>
      </ButtonGroup>
      <PostInfo>
        <CategoryTitle>
          <Category>{post.category}</Category>
          <Title>{post.title}</Title>
        </CategoryTitle>
        <Writer>{post.creatorId}</Writer>
      </PostInfo>
      <DateViews>
        <Date>
          <FaPen />
          {post.date}
        </Date>
        <Views>
          <FaMouse />
          {post.views}
        </Views>
      </DateViews>
      <PostContent dangerouslySetInnerHTML={{ __html: post.postDetail }} />
      <CommentSection>
        <AddCommentContainer />
      </CommentSection>
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

const CommentSection = styled.div`
  width: 100%;
  height: 100%;
  border-top: solid #ab47bc;
`;
export default PostDetail;
