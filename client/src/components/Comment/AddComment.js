import React from "react";
import styled from "styled-components";

const AddComment = ({ onChange, onSubmit }) => {
  return (
    <Container>
      <Title>Add Comment</Title>
      <CommentInput onChange={(e) => onChange(e)} />
      <SumitButton onClick={(e) => onSubmit(e)}>Submit</SumitButton>
    </Container>
  );
};

export default AddComment;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  margin-bottom: 20px;
  width: 100%;
`;
const Title = styled.span`
  font-weight: bold;
  font-size: 12px;
  margin-bottom: 13px;
`;
const CommentInput = styled.textarea`
  width: 100%;
  height: 5em;
  resize: none;
  border: solid black;
`;

const SumitButton = styled.button`
  width: 6em;
  height: 3em;
  background-color: #42a5f5;
  border: none;
  border-radius: 10px;
  color: white;
  margin-top: 15px;
  position: relative;
  left: 55em;
  cursor: pointer;
`;
