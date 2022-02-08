import "../styles/globals.css";
import type { AppProps } from "next/app";
import Link from "next/link";
import { useRouter } from "next/router";
import { useMemo } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline";

const navigation = [
  { label: "Overview", path: "/" },
  { label: "Getting Started", path: "/getting-started" },
  { label: "Box", path: "/components/box" },
  { label: "Flex", path: "/components/flex" },
  { label: "Stack", path: "/components/stack" },
  { label: "Wrap", path: "/components/wrap" },
  { label: "Selector", path: "/components/selector" },
];

function Pager() {
  const { asPath } = useRouter();

  const prevRoute = useMemo(
    () =>
      navigation[navigation.findIndex((route) => route.path === asPath) - 1],
    [asPath],
  );

  const nextRoute = useMemo(
    () =>
      navigation[navigation.findIndex((route) => route.path === asPath) + 1],
    [asPath],
  );

  return (
    <nav className="my-12 py-12 flex border-y">
      <div className="flex-1">
        {prevRoute && (
          <Link href={prevRoute.path}>
            <a className="h-24 p-4 flex-1 flex items-center rounded-xl hover:bg-gray-50">
              <ChevronLeftIcon className="w-5 text-gray-500" />
              <div className="ml-6 flex flex-col">
                <div className="text-gray-500 text-sm">PREVIOUS</div>
                <div className="mt-0.5 text-primary font-bold">{prevRoute.label}</div>
              </div>
            </a>
          </Link>
        )}
      </div>
      <div className="flex-1">
        {nextRoute && (
          <Link href={nextRoute.path}>
            <a className="h-24 p-4 flex-1 flex justify-end items-center rounded-xl hover:bg-gray-50">
              <div className="mr-6 flex flex-col items-end">
                <div className="text-gray-500 text-sm">NEXT</div>
                <div className="mt-0.5 text-primary font-bold">{nextRoute.label}</div>
              </div>
              <ChevronRightIcon className="w-5 text-gray-500" />
            </a>
          </Link>
        )}
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="mt-6 mb-24 flex flex-col items-center">
      react-native-flex-layout
      <ul className="mt-6 flex">
        <li>
          <a href="https://github.com/yamankatby/react-native-flex-layout">
            Source code
          </a>
        </li>
        <li className="ml-8">
          <a href="https://github.com/yamankatby/react-native-flex-layout/issues">
            Report issue
          </a>
        </li>
        <li className="ml-8">
          <a href="https://github.com/yamankatby/react-native-flex-layout/discussions">
            Ask question
          </a>
        </li>
      </ul>
      <p className="mt-6">
        Made with ❤️ by <a href="https://twitter.com/yamankatby">Yaman KATBY</a>
      </p>
    </footer>
  );
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      <div className="fixed w-full lg:w-80 h-20 lg:h-screen" />
      <main className="w-full pt-20 lg:pt-0 lg:ml-80 2xl:mr-80">
        <div className="max-w-2xl min-h-screen mx-auto flex flex-col px-4">
          <nav className="my-4">asdf</nav>
          <article className="flex-1 prose" />
          <Pager />
          <Footer />
        </div>
      </main>
    </div>
  );
}

export default MyApp;
