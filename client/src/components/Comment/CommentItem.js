import React from "react";
import styled from "styled-components";
import { CgProfile } from "react-icons/cg";

const CommentItem = ({ comment }) => {
  const { date, contents, creatorName } = comment;
  return (
    <Wrapper>
      <ProfileContainer>
        <ProfileImg>
          <CgProfile size={46} />
        </ProfileImg>
        <CommentInfo>
          <span className="user_name">{creatorName}</span>
          <span className="date">{date}</span>
        </CommentInfo>
      </ProfileContainer>
      <CommentDescription>{contents}</CommentDescription>
    </Wrapper>
  );
};

export default CommentItem;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  margin-bottom: 30px;
  width: 100%;
`;
const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
`;
const ProfileImg = styled.div`
  border-radius: 50%;
  margin-right: 15px;

  svg {
    background-color: #e0e0e0;
    border-radius: 50%;
  }
`;

const CommentInfo = styled.div`
  display: flex;
  flex-direction: column;

  .user_name {
    font-weight: bold;
    font-size: 15px;
  }

  .date {
    font-size: 12px;
  }
`;

const CommentDescription = styled.div`
  width: 810px;
  height: auto;
  margin-top: 13px;
`;
