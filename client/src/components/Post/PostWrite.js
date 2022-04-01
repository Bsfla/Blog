import React from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-editor-classic/src/classiceditor";
import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';

import styled from "styled-components";

const PostWrite = () => {

const editorConfiguration = {
    plugins: [ Essentials, Bold, Italic, Paragraph ],
    toolbar: [ 'bold', 'italic' ]
};
    return (
       <Wrapper>
        <WriteFormGroup>
            <label>Title</label>
            <input />
            <label>Category</label>
            <input />
            <label>Content</label>
            <CKEditor 
              editor={ClassicEditor}
              config={editorConfiguration}
            
            />
            
        </WriteFormGroup>
       </Wrapper>
    )
}

export default PostWrite;




const Wrapper = styled.div`
  width: 70%;
`
const WriteFormGroup = styled.form`
  width: 100%;
  height: 100%;
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
const WriteForm = styled.div`
  
`