"use client";
import React, { useState } from "react";
import "react-quill/dist/quill.snow.css";
import ReactQuill from "react-quill";
import Markdown from "markdown-to-jsx";

function ReactQuillWrapper() {
  const initialState = {
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
    title: "",
    content: "",
    desc: "",
  };
  const [state, setState] = useState(initialState);
  const handleChange = (value: string) => {
    setState({ ...state, content: value });
  };
  function handleTitleChange(event: React.ChangeEvent<HTMLInputElement>) {
    event.preventDefault();
    setState({ ...state, title: event.target.value });
  }
  function handleDescChange(event: React.ChangeEvent<HTMLInputElement>) {
    event.preventDefault();
    setState({ ...state, desc: event.target.value });
  }
  function submitHandler(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const requestObj = {
      id: new Date().toISOString(),
      title: state.title,
      content: state.content,
      // isDraft: false,
      // isPublished: false
    };

    fetch("/api/posts", {
      method: "POST",
      body: JSON.stringify(requestObj),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  }
  return (
    <>
      <div className="flex flex-row">
        <div className="w-1/2">
          <form onSubmit={(e) => submitHandler}>
            <label htmlFor="title">Title</label>
            <input
              type="text"
              value={state.title}
              name="title"
              placeholder="Enter a title"
              onChange={(e) => handleTitleChange(e)}
              required
            />
            <label htmlFor="desc">Description</label>
            <input
              type="text"
              value={state.desc}
              name="desc"
              placeholder="Enter a desc"
              onChange={(e) => handleDescChange(e)}
              required
            />
            {/* <ReactQuill
              value={state.content}
              modules={state.modules}
              formats={state.formats}
              onChange={handleChange}
            /> */}
            <textarea
              className="w-full border h-[600px]"
              value={state.content}
              onChange={(e) => handleChange(e.target.value)}
            />
            <button>Save</button>
            {/* <p>{state.content}</p> */}
          </form>
        </div>
        {/* <div className="w-1/2">{state.content}</div> */}
        <div className="w-1/2 flex justify-center">
          <div className=" prose prose-stone">
            <Markdown>{state.content}</Markdown>
          </div>
        </div>
        {/* <div className="w-1/2 prose prose-stone" dangerouslySetInnerHTML={{ __html: state.content }}></div> */}
      </div>
    </>
  );
}

export default ReactQuillWrapper;