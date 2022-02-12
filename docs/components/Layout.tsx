import React, { useState } from "react";
import Nav from "./Nav";
import SearchBox from "./SearchBox";
import Sidebar from "./Sidebar";
import Breadcrumbs from "./Breadcrumbs";
import Pager from "./Pager";
import Footer from "./Footer";
import cx from "classnames";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

const Layout: React.FC = ({ children }) => {
  const [sidebarVisible, setSidebarVisible] = useState(false);
  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      <div
        className="fixed w-full lg:w-80 max-h-full lg:h-screen bg-white dark:bg-gray-900 lg:border-r dark:border-gray-800 overflow-y-scroll">
        <Nav />
        <aside className={cx("border-b lg:border-b-0 dark:border-gray-800", { "hidden lg:block": !sidebarVisible })}>
          <SearchBox />
          <Sidebar />
        </aside>
      </div>
      <main className="w-full pt-28 sm:pt-20 lg:pt-0 lg:ml-80 2xl:mr-80">
        <div className="max-w-3xl min-h-screen mx-auto flex flex-col px-4">
          <Breadcrumbs />
          <article className="flex-1 prose dark:prose-invert max-w-none">{children}</article>
          <Pager />
          <Footer />
        </div>
      </main>
      <button
        className="w-12 h-12 lg:hidden fixed bottom-4 left-4 bg-gray-300 dark:bg-gray-600 rounded-full"
        onClick={() => setSidebarVisible((prevState) => !prevState)}
      >
        {sidebarVisible ? <XIcon className="w-6 h-6 m-auto" /> : <MenuIcon className="w-6 h-6 m-auto" />}
      </button>
    </div>
  );
};

export default Layout;
