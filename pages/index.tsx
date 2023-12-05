import React from 'react';

import { Inter } from "next/font/google";
import styled from "styled-components";
import Nav from "./components/Nav";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Nav />
      <main
        className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
      >
       

      </main>
    </>
  );
}
