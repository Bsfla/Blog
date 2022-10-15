import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMouse } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const PostCard = ({ post }) => {
  const { title, fileUrl, contents, date } = post;
  return (
    <Card>
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

const Card = styled.div`
  width: 18rem;
  height: 21rem;
  margin-right: 20px;
  box-shadow: 5px 5px 5px 5px gray;
  border-radius: 12px;
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
