import Nav from "./Nav";
import SearchBox from "./SearchBox";
import Sidebar from "./Sidebar";

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      <div
        className="fixed w-full lg:w-80 h-screen bg-white dark:bg-gray-900 lg:border-r dark:border-gray-800 overflow-y-scroll">
        <Nav />
        <SearchBox />
        <Sidebar />
      </div>
    </div>
  );
};

export default Layout;
