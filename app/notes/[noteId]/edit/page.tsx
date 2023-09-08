"use client"

import Editor from "@/components/Editor";
import NoAccess from "@/components/NoAccess";
import PageWrapper from "@/components/PageWrapper";
import editData from "@/firebase/firestore/editData";
import getNoteDoc from "@/firebase/firestore/getNoteDoc";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

type Props = {
  params: { noteId: string };
};

const EditNote = ({ params }: Props) => {
  const noteId = params.noteId;
  const { data: session, status } = useSession();

  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const router = useRouter();

  const successUpdate = () => {
    toast.success("Note Updated!", { position: toast.POSITION.BOTTOM_RIGHT });
  }

  const fetchNote = async () => {
    if (session) {
      const { result, error } = await getNoteDoc(
        "notes",
        session?.user?.email!,
        "noteList",
        noteId
      );
      setTitle(result?.title);
      setContent(result?.content);

      if (error) {
        console.log(error);
      }
    }
  };

  const handleUpdate = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const updatedNote: Note = {
      _createdAt: new Date(),
      title: title,
      content: content,
    }
    const { result, error } = await editData('notes', session?.user?.email!, "noteList", noteId, updatedNote);
    console.log(result);
    
    if (error) {
      return console.log(error);
    }

    setTitle("");
    setContent("");

    router.push("/notes");
  }

  useEffect(() => {
    fetchNote();
  }, [session]);

  if (status === "unauthenticated") {
    return <NoAccess />;
  }
  return (
    <PageWrapper>
        <form onSubmit={handleUpdate} className="flex flex-col gap-5">
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

          <Editor content={content} setContent={setContent} editable={true} />
        </div>

        <button
          onClick={successUpdate}
          type="submit"
          className="bg-[#1f1f1f] px-2 py-1 text-gray-500 hover:text-white transition-all rounded-lg"
        >
          Save
        </button>
      </form>
    </PageWrapper>
  );
};

export default EditNote;
