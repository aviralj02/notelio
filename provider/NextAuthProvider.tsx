"use client";

import React from 'react';
import { SessionProvider } from 'next-auth/react';

type Props = {
    children: React.ReactNode
}

const NextAuthProvider = ({ children }: Props) => {
  return (
    <SessionProvider refetchOnWindowFocus={false}>
        { children }
    </SessionProvider>
  )
}

export default NextAuthProvider;