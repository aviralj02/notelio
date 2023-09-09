"use client";

import Editor from "@/components/Editor";
import PageWrapper from "@/components/PageWrapper";
import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import NoAccess from "@/components/NoAccess";
import getNoteDoc from "@/firebase/firestore/getNoteDoc";
import Link from "next/link";
import deleteNoteDoc from "@/firebase/firestore/deleteNoteDoc";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

type Props = {
  params: { noteId: string };
};

const ViewNote = ({ params }: Props) => {
  const noteId = params.noteId;
  const { data: session, status } = useSession();

  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const router = useRouter();

  const fetchNote = async () => {
    if (session) {
      const { result, error } = await getNoteDoc("notes", session?.user?.email!, "noteList", noteId);
      setTitle(result?.title);
      setContent(result?.content);

      if (error){
        console.log(error);
      }
    }
  };

  const successDelete = () => {
    toast.success("Note Deleted!", { position: toast.POSITION.BOTTOM_RIGHT });
  }

  const handleDelete = async () => {
    const { result, error } = await deleteNoteDoc("notes", session?.user?.email!, "noteList", noteId);
    if (error){
      console.log(error);
    }

    router.push("/notes");
    successDelete();
  }


  useEffect(() => {
    fetchNote();
  }, [session]);

  if (status === "unauthenticated") {
    return <NoAccess />;
  }

  return (
    <PageWrapper>
      <div className="flex flex-col gap-4">
        <div className="bg-[#1f1f1f] mt-8 h-[500px] px-4 py-3 rounded-md">
          <h2 className="bg-inherit w-full text-white text-3xl py-3 px-2 border-0 border-[#414040] border-b-2 outline-none focus:ring-0 focus:border-gray-500 transition-all">
            {title}
          </h2>

          <Editor content={content} setContent={setContent} editable={false} />
        </div>

        <div className="flex gap-2">
          <Link
            href={`/notes/${noteId}/edit`}
            className="bg-[#1f1f1f] px-2 py-1 text-gray-500 hover:text-white transition-all rounded-lg w-full text-center"
          >
            Edit
          </Link>
          <button onClick={handleDelete} className="bg-[#1f1f1f] px-2 py-1 text-gray-500 hover:text-white transition-all rounded-lg w-full text-center">
            Delete
          </button>
        </div>
      </div>
    </PageWrapper>
  );
};

export default ViewNote;
