import { Inter } from "next/font/google";
import styled from "styled-components";
import Nav from "./components/Nav";

const inter = Inter({ subsets: ["latin"] });

export const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #bf4f74;
`;

export const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

export default function Home() {
  return (
    <>
      <Nav />
      <main
        className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
      >
        <Wrapper>
          <Title>Hello World!</Title>
        </Wrapper>
      </main>
    </>
  );
}
