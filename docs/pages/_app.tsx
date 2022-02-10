import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from 'next-themes'
import Layout from "../components/Layout";

import "@docsearch/css";

function MyApp({ Component, pageProps }: AppProps) {
  return (<ThemeProvider><Layout>{<Component {...pageProps} />}</Layout></ThemeProvider>);
}

export default MyApp;
