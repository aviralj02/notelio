"use client";

import NoAccess from "@/components/NoAccess";
import NoteCard from "@/components/NoteCard";
import PageWrapper from "@/components/PageWrapper";
import SearchBar from "@/components/SearchBar";
import getData from "@/firebase/firestore/getData";
import { DocumentData } from "firebase/firestore";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";

type Props = {};

const NotesHome = (props: Props) => {
  const { data: session, status } = useSession();

  const [notes, setNotes] = useState<DocumentData[]>();
  const [search, setSearch] = useState<string>("");

  const fetchData = async () => { 
    if (session){
      const { result, error } = await getData('notes', session?.user?.email!, 'noteList');
      const searchedNotes = result?.filter((note) => {
        return (
          search &&
          note.title.toLowerCase().includes(search) ||
          note.content.toLowerCase().includes(search)
        );
      });
      setNotes(searchedNotes);
      
      if (error){
        console.log(error);
      }
    }
  }
  
  useEffect(() => {
    fetchData();
  }, [session, search]);

  if (status === "unauthenticated") {
    return <NoAccess />;
  }

  return (
    <PageWrapper>
      <SearchBar search={search} setSearch={setSearch} />
      <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center gap-6 mt-3 py-3">
        {notes?.map((note: DocumentData, index: number) => (
          <NoteCard
            key={index}
            _id={note._id}
            title={note.title}
            content={note.content}
            time={note._createdAt}
          />
        ))}
      </div>
      <ToastContainer theme="dark" />
    </PageWrapper>
  );
};

export default NotesHome;
