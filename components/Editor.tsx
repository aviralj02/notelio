"use client"

import dynamic from "next/dynamic";
import React from "react";
import 'react-quill/dist/quill.snow.css';

type Props = {
  content: string;
  setContent: Function;
  editable: boolean;
}


const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const Editor = ({ content, setContent, editable }: Props) => {

  const modules = {
    toolbar: editable
      ? [
          [{ header: "1" }, { header: "2" }],
          ["bold", "italic", "underline", "strike"],
          [{ list: "ordered" }, { list: "bullet" }],
          ["link"],
          ["clean"],
        ]
      : false,
  };
  
  return (
    <div className="mt-6 h-[320px]">
      <ReactQuill
        className="text-white h-full"
        modules={modules}
        theme="snow"
        value={content}
        onChange={(val) => setContent(val!)}
        placeholder="Write here ..."
        readOnly={editable ? false : true}
      />
    </div>
  );
};

export default Editor;
