import React from "react";
import QuilEditor from "../Editor/QuilEditor";



import styled from "styled-components";

const PostWrite = () => {
    return (
       <Wrapper>
        <WriteFormGroup>
            <label>Title</label>
            <input />
            <label>Category</label>
            <input />
            <label>Content</label>
            <QuilEditor />
            <AddPostButton>제출하기</AddPostButton>
        </WriteFormGroup>
       </Wrapper>
    )
}

export default PostWrite;




const Wrapper = styled.div`
  width: 70%;
  height: auto;
`
const WriteFormGroup = styled.form`
  width: 100%;
  position: relative;
  label {
      margin-top: 20px;
      display: block;
      font-weight: bold;
      margin-bottom: 20px;
  }
  input {
      width: 100%;
      height: 30px;
  }
`
const AddPostButton = styled.button`
  width: 15em;
  background-color: green;
  color: white;
  padding: 5px;
  position: absolute;
  right: 0;
  cursor: pointer;
  margin-top: 20px;
`