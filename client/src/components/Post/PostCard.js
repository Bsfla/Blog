import React from "react";
import { useNavigate } from "react-router-dom";
import styled, { keyframes } from "styled-components";

const PostCard = ({ post }) => {
  const { title, fileUrl, contents, date, _id } = post;
  const navigate = useNavigate();

  const handleNavigateToPost = () => {
    navigate(`/post/${_id}`);
  };

  return (
    <Card onClick={handleNavigateToPost}>
      <CardImage>
        <img src={fileUrl} alt="postImg" />
      </CardImage>
      <CardInfo>
        <CardTitle>{title}</CardTitle>
        <Carddescription dangerouslySetInnerHTML={{ __html: contents }} />
        <span className="date">{date}</span>
      </CardInfo>
    </Card>
  );
};

const SlideUp = keyframes`
  from {
    opacity:0;
    transform: translateY(5%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Card = styled.div`
  width: 18rem;
  height: 21rem;
  margin-right: 40px;
  margin-top: 37px;
  box-shadow: 5px 5px 5px 5px gray;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.5s;

  &:hover {
    transform: translateY(-10px);
    transition: all 0.5s;
  }
`;
const CardImage = styled.div`
  width: 100%;

  img {
    width: 100%;
    height: 70%;
    border-top-right-radius: 12px;
    border-top-left-radius: 15px;
  }
`;
const CardInfo = styled.div`
  width: 100%;
  height: 100%;
  padding: 6px;

  .date {
    font-size: 12px;
  }
`;

const Carddescription = styled.div`
  margin-top: 10px;
  font-size: 13px;
  height: 3rem;
`;

const CardTitle = styled.span`
  font-weight: bold;
  font-size: 15px;
`;
const CardCommentView = styled.button`
  width: 25em;
  padding: 10px;
  background-color: "#3d5afe";
  color: white;
  display: block;
  margin: 0 auto;
`;

export default PostCard;
