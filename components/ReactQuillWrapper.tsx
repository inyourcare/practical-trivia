"use client";
import React, { useState } from "react";
import "react-quill/dist/quill.snow.css";
import ReactQuill from "react-quill";

function ReactQuillWrapper() {
  const initialState = {
    text: "",
    modules: {
      toolbar: [
        [{ header: [1, 2, false] }],
        ["bold", "italic", "underline", "strike", "blockquote"],
        [
          { list: "ordered" },
          { list: "bullet" },
          { indent: "-1" },
          { indent: "+1" },
        ],
        ["link", "image"],
        ["clean"],
      ],
    },
    formats: [
      "header",
      "bold",
      "italic",
      "underline",
      "strike",
      "blockquote",
      "list",
      "bullet",
      "indent",
      "link",
      "image",
    ],
  };
  const [state, setState] = useState(initialState);
  const handleChange = (value: string) => {
    setState({ ...state, text: value });
  };
  return (
    <>
      <div className="">
        <ReactQuill
          value={state.text}
          modules={state.modules}
          formats={state.formats}
          onChange={handleChange}
        />
      </div>
    </>
  );
}

export default ReactQuillWrapper;
