"use client";

import NoteCard from '@/components/NoteCard';
import PageWrapper from '@/components/PageWrapper';
import SearchBar from '@/components/SearchBar';
import { useSession } from 'next-auth/react';
import React from 'react';

type Props = {}

const NotesHome = (props: Props) => {
  const { data: session } = useSession();

  return (
    <PageWrapper>
        <SearchBar />
        <NoteCard />
    </PageWrapper>
  )
}

export default NotesHome;