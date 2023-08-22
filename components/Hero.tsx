"use client";

import React from 'react';
import { signIn } from 'next-auth/react';

type Props = {}

const Hero = (props: Props) => {
  return (
    <div onClick={() => signIn()}>Sign in</div>
  )
}

export default Hero;