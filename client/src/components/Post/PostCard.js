import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMouse } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const PostCard = () => {
  return (
    <Card>
      <CardImage>
        <img src="https://source.unsplash.com/random/301x201" />
      </CardImage>
      <CardInfo>
        <CardTitle>
          <span>안녕 오늘의 날씨</span>
          <span>
            <FontAwesomeIcon icon={faMouse} />
            <span>10</span>
          </span>
        </CardTitle>
        <CardCommentView>More</CardCommentView>
      </CardInfo>
    </Card>
  );
};

const Card = styled.div`
  width: 22em;
  height: 8em;
  background-color: black;
`;
const CardImage = styled.div`
  width: 100%;
  height: 19em;
  background-color: blue;

  img {
    width: 100%;
    height: 100%;
  }
`;
const CardInfo = styled.div`
  width: 100%;
  height: 100%;
  background-color: red;
  padding: 20px 0px;
`;

const CardTitle = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0px 20px;
  margin-bottom: 20px;
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
