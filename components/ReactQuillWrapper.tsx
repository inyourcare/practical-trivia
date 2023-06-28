"use client";
import React, { useEffect, useRef, useState } from "react";
import "react-quill/dist/quill.snow.css";
import ReactQuill from "react-quill";
import Markdown from "markdown-to-jsx";
import { tagDict } from "./util/tag/tagToKr";

// 이미지 태그 <img src='/api/aws/s3/get?key=test/3.png' width={500} height={500} alt={""} />

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
    id: "",
    // tagDict: tagDict,
  };
  const [html, setHTML] = useState(true);
  const [tagSelected,setTagSelected] = useState<Set<string>>(new Set([]));
  const [category,setCategory] = useState('');
  const [state, setState] = useState(initialState);
  const handleChange = (value: string) => {
    setState({ ...state, content: value });
  };
  function handleIdChange(event: React.ChangeEvent<HTMLInputElement>) {
    event.preventDefault();
    setState({ ...state, id: event.target.value });
  }
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
      id: state.id,
      title: state.title,
      content: state.content,
      tags: Array.from(tagSelected.values()),
      category: category,
      // isDraft: false,
      // isPublished: false
      //id title desc tagSelected category
    };
    console.log(requestObj)
    // fetch("/api/posts", {
    //   method: "POST",
    //   body: JSON.stringify(requestObj),
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log(data);
    //   });
  }

  const tagItemsRef = useRef<HTMLSpanElement[]>([]);
  useEffect(() => {
    tagItemsRef.current.map((ref) => {
      ref.addEventListener("click", (e) => {
        const val = ref.innerText;
        if (tagSelected?.has(val)) {
          ref.style.color = "black";
          tagSelected.delete(val);
        } else {
          ref.style.color = "red";
          tagSelected?.add(val);
        }
      });
    });
  }, [tagSelected]);

  return (
    <>
      <div className="flex flex-row">
        <div className="w-1/2">
          <form onSubmit={(e) => submitHandler(e)}>
            <label htmlFor="id">Id</label>
            <input
              className="border ml-1"
              type="text"
              value={state.id}
              name="id"
              placeholder="id -> 1"
              onChange={(e) => handleIdChange(e)}
              required
            />
            <br />
            <label htmlFor="title">Title</label>
            <input
              className="border ml-1"
              type="text"
              value={state.title}
              name="title"
              placeholder="Enter a title"
              onChange={(e) => handleTitleChange(e)}
              required
            />
            <br />
            <label htmlFor="desc">Description</label>
            <input
              className="border ml-1"
              type="text"
              value={state.desc}
              name="desc"
              placeholder="Enter a desc"
              onChange={(e) => handleDescChange(e)}
              required
            />
            <br />
            {/* {`${state.tagDict}`} */}
            <div className="w-full">
              tags:
              <div className="w-full flex flex-row flex-wrap">
                {Object.entries(tagDict).map((entry, i) => (
                  <span
                    key={i}
                    ref={(elem) => {
                      tagItemsRef.current[i] = elem as HTMLSpanElement;
                    }}
                    // className={`cursor-pointer ${tagSelected.has(entry[0])?'text-red':'text-black'}`}
                    className={`cursor-pointer px-1`}
                    // onClick={(e) => {}}
                  >
                    {entry[0]}
                  </span>
                ))}
              </div>
            </div>
            category: 
            <select
              className="shadow appearance-none border rounded w-11/12 py-2 px-1 text-black"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              name="kindKey"
              required
            >
              <option value={""}>선택없음</option>
              {/* {Array.from(tagSelected.values()).map((tag,i)=>{return (<option key={i} value={tag}>{tag}</option>)})} */}
              {Object.entries(tagDict).map((tag,i)=>{return (<option key={i} value={tag[0]}>{tag[0]}</option>)})}
            </select>
            <br/>
            <nav className="gap-3 sm:gap-5 md:gap-10 lg:gap-10 xl:gap-10 2xl:gap-10 inline-flex justify-center sm:justify-center md:justify-right mt-5 sm:mt-5 md:mt-0 lg:mt-0 xl:mt-0 2xl:mt-0  items-start text-black text-left font-medium">
              <div className="cursor-pointer" onClick={() => setHTML(!html)}>
                html
              </div>
            </nav>
            {html === true ? (
              <>
                <textarea
                  className="w-full border h-[600px]"
                  value={state.content}
                  onChange={(e) => handleChange(e.target.value)}
                />
              </>
            ) : (
              <>
                <ReactQuill
                  value={state.content}
                  modules={state.modules}
                  formats={state.formats}
                  onChange={handleChange}
                />
              </>
            )}

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
