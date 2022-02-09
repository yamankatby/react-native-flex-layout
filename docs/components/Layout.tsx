import React from "react";
import Nav from "./Nav";
import SearchBox from "./SearchBox";
import Sidebar from "./Sidebar";
import Breadcrumbs from "./Breadcrumbs";
import Pager from "./Pager";
import Footer from "./Footer";

const Layout: React.FC = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      <div
        className="fixed w-full lg:w-80 h-screen bg-white dark:bg-gray-900 lg:border-r dark:border-gray-800 overflow-y-scroll">
        <Nav />
        <aside>
          <SearchBox />
          <Sidebar />
        </aside>
      </div>
      <main className="w-full pt-20 lg:pt-0 lg:ml-80 2xl:mr-80">
        <div className="max-w-3xl min-h-screen mx-auto flex flex-col px-4">
          <Breadcrumbs />
          <article className="flex-1 prose dark:prose-invert">
            {children}
          </article>
          <Pager />
          <Footer />
        </div>
      </main>
    </div>
  );
};

export default Layout;
