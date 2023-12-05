import "@/styles/globals.css";
import { Inter } from 'next/font/google'
 
// If loading a variable font, you don't need to specify the font weight
import { Roboto } from 'next/font/google'
import { AppProps } from 'next/app';
 
const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

export default function App({Component, pageProps } : AppProps) {
  return(

  <main className={roboto.className}>
    <Component {...pageProps} />
  </main>);
}
