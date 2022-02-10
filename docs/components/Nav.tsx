import React, { useEffect } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "@heroicons/react/outline";
import Logo from "./Logo";
import GitHub from "./GitHub";
import Twitter from "./Twitter";

const TWITTER_URL = "https://twitter.com/rn_material";
const GITHUB_URL = "https://github.com/yamankatby/react-native-flex-layout";

const Nav: React.FC = () => {
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    if (typeof window === "undefined") return;

    const classList = ["dark", "bg-gray-900", "text-white"];
    if (theme === "dark") document.body.classList.add(...classList);
    else document.body.classList.remove(...classList);
  }, [theme]);

  return (
    <nav
      className="px-3 py-4 flex flex-col sm:flex-row lg:flex-col justify-between sm:items-center lg:items-stretch border-b lg:border-b-0 dark:border-gray-800">
      <div className="inline-flex lg:flex lg:justify-between items-start">
        <Link href="/">
          <a className="px-3 py-2 inline-flex rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 group">
            <Logo className="w-4" />
            <span className="ml-4 text-lg group-hover:underline">react-native-flex-layout</span>
          </a>
        </Link>
        <span className="ml-1 lg:ml-0 px-1.5 py-0.5 bg-primary bg-opacity-10 rounded-full text-xs text-primary">
          v1.0.0
        </span>
      </div>
      <div className="lg:mt-1 flex items-center">
        <a
          className="h-10 px-3 flex items-center hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg hover:underline"
          href={GITHUB_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHub className="w-5 mr-3" />
          GitHub
        </a>
        <a
          className="h-10 px-3 flex items-center hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg hover:underline"
          href={TWITTER_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Twitter className="w-5 mr-3" />
          Twitter
        </a>
        <button
          className="w-10 h-10 ml-auto flex justify-center items-center hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          {theme === 'dark' ? <SunIcon className="w-5" /> : <MoonIcon className="w-5" />}
        </button>
      </div>
    </nav>
  );
};

export default Nav;
