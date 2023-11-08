"use client";

import NoAccess from "@/components/NoAccess";
import NoteCard from "@/components/NoteCard";
import PageWrapper from "@/components/PageWrapper";
import SearchBar from "@/components/SearchBar";
import SkeletonCard from "@/components/skeletons/SkeletonCard";
import getData from "@/firebase/firestore/getData";
import { DocumentData } from "firebase/firestore";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { ToastContainer } from "react-toastify";

type Props = {};

const NotesHome = (props: Props) => {
  const { data: session, status } = useSession();

  const [notes, setNotes] = useState<DocumentData[]>();
  const [search, setSearch] = useState<string>("");

  const fetchData = async () => {
    if (session) {
      const { result, error } = await getData(
        "notes",
        session?.user?.email!,
        "noteList"
      );
      const searchedNotes = result?.filter((note) => {
        return (
          (search && note.title.toLowerCase().includes(search)) ||
          note.content.toLowerCase().includes(search)
        );
      });
      setNotes(searchedNotes);

      if (error) {
        console.log(error);
      }
    }
  };

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
        {!notes &&
          [1, 2, 3, 4].map((skeleton) => <SkeletonCard key={skeleton} />)}

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

      {notes?.length === 0 && (
        <div className="flex flex-col items-center">
          <h1 className="text-lg sm:text-xl text-[#a4a2a2] mt-5 w-full text-center">No notes to display 🥲</h1>
          <h1 className="text-lg sm:text-xl text-[#a4a2a2] mt-5 w-full text-center">
            <Link href={"/notes/create"} className="underline hover:text-white transition-all">Click here</Link>{" "}
            to create <br className="block sm:hidden" /> a new note
          </h1>
        </div>
      )}

      <ToastContainer theme="dark" />
    </PageWrapper>
  );
};

export default NotesHome;
