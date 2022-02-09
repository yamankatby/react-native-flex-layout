import React from "react"
import Logo from "./Logo";
import Link from "next/link";

const Footer: React.FC = () => (
  <footer className="mt-6 mb-24 flex flex-col items-center">
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
)

export default Footer;
