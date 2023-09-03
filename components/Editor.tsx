"use client"

import dynamic from "next/dynamic";
import React, { useMemo } from "react";
import 'react-quill/dist/quill.snow.css';

type Props = {
  content: string;
  setContent: Function;
}


const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const Editor = ({ content, setContent }: Props) => {

  const modules = {
    toolbar: [
      [{ 'header': '1' }, { 'header': '2' }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      ['link'],
      ['clean']
    ]
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
      />
    </div>
  );
};

export default Editor;
