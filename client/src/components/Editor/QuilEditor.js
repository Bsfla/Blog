import React, { Component } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import styled from "styled-components";

const QuilEditor = ({ setForm, form }) => {
  const modules = {
    toolbar: {
      container: [
        ["bold", "italic", "underline", "strike", "blockquote"],
        [{ size: ["small", false, "large", "huge"] }, { color: [] }],
        [
          { list: "ordered" },
          { list: "bullet" },
          { indent: "-1" },
          { indent: "+1" },
          { align: [] },
        ],
      ],
    },
  };

  return (
    <>
      <ReactQuillEditor
        modules={modules}
        theme="snow"
        name="contents"
        onChange={(e) =>
          setForm({
            ...form,
            contents: e,
          })
        }
      />
    </>
  );
};

const ReactQuillEditor = styled(ReactQuill)`
  .ql-container {
    height: 20em;
  }
`;

export default QuilEditor;
