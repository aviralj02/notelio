"use client";

import React, { ChangeEvent, FormEvent, useState } from "react";
import PageWrapper from "@/components/PageWrapper";
import Editor from "@/components/Editor";
import NoAccess from "@/components/NoAccess";
import { useSession } from "next-auth/react";
import addData from "@/firebase/firestore/addData";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

type Props = {};

const Create = (props: Props) => {
  const { data: session, status } = useSession();

  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");

  const router = useRouter();
  const successCreation = () => {
    toast.success("Note Created!", { position: toast.POSITION.BOTTOM_RIGHT });
  };

  const handleCreate = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newNote: Note = {
      _createdAt: new Date(),
      title: title,
      content: content,
    }
    const { result, error } = await addData('notes', session?.user?.email!, "noteList", newNote);

    if (error) {
      return console.log(error);
    }

    setTitle("");
    setContent("");

    router.push("/notes");
  }

  if (status === "unauthenticated"){
    return <NoAccess />;
  }

  return (
    <PageWrapper>
      <form onSubmit={handleCreate} className="flex flex-col gap-5">
        <div className="bg-[#1f1f1f] mt-8 h-[500px] px-4 py-3 rounded-md">
          <input
            type="text"
            className="bg-inherit w-full text-white text-xl border-0 border-[#414040] border-b-2 outline-none focus:ring-0 focus:border-gray-500 transition-all"
            placeholder="Title ..."
            value={title}
            required
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setTitle(e.target.value)
            }
          />

          <Editor content={content} setContent={setContent} />
        </div>

        <button
          onClick={successCreation}
          type="submit"
          className="bg-[#1f1f1f] px-2 py-1 text-gray-500 hover:text-white transition-all rounded-lg"
        >
          Save
        </button>
      </form>
    </PageWrapper>
  );
};

export default Create;
