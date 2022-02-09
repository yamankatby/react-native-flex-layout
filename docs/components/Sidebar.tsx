import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { CollectionIcon, CubeIcon, TemplateIcon, ViewBoardsIcon, ViewGridIcon } from "@heroicons/react/outline";
import cx from "classnames";

export const router = [
  { title: "Overview", path: "/" },
  { title: "Getting Started", path: "/getting-started" },
  [
    { title: "Components" },
    { title: "Box", path: "/components/box", icon: <CubeIcon className="w-5" /> },
    { title: "Flex", path: "/components/flex", icon: <TemplateIcon className="w-5" /> },
    { title: "Stack", path: "/components/stack", icon: <ViewBoardsIcon className="w-5" /> },
    { title: "Wrap", path: "/components/wrap", icon: <ViewGridIcon className="w-5" /> },
    { title: "Selector", path: "/components/selector", icon: <CollectionIcon className="w-5" /> },
    { title: "Spacer", path: "/components/spacer" },
    { title: "Divider", path: "/components/divider" },
  ],
  [
    { title: "Guides" },
    { title: "Spacing", path: "/guides/spacing" },
    { title: "TypeScript", path: "/guides/typescript" },
  ],
  [
    { title: "Examples" },
    { title: "Toolbar", path: "/examples/toolbar" },
    { title: "List", path: "/examples/list" },
    { title: "Gallery", path: "/examples/gallery" },
    { title: "Tags", path: "/examples/tags" },
    { title: "Table", path: "/examples/table" },
  ],
  { title: "Acknowledgements", path: "/acknowledgements" },
];

const Sidebar: React.FC = () => {
  return (
    <ul className="m-4">
      {router.map((route, index) => (
        <SidebarItem key={index} route={route} />
      ))}
    </ul>
  );
};

export default Sidebar;

const SidebarGroup: React.FC<any> = ({ routes }) => (
  <>
    <span className="mt-6 mb-3 block uppercase text-xs text-gray-500">{routes[0].title}</span>
    <ul className="pl-3 border-l dark:border-gray-700">
      {routes.slice(1).map((route: any) => (
        <SidebarItem route={route} key={route.path} />
      ))}
    </ul>
  </>
);

const SidebarItem: React.FC<any> = ({ route }) => {
  const { pathname } = useRouter();

  if (Array.isArray(route)) return <SidebarGroup routes={route} />;

  return (
    <li>
      <Link href={route.path}>
        <a
          className={cx(
            "px-3 py-2 flex justify-between items-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 hover:underline ",
            { "bg-primary bg-opacity-10 hover:bg-primary hover:bg-opacity-20 text-primary": pathname === route.path },
          )}
        >
          {route.title}
          {route.icon}
        </a>
      </Link>
    </li>
  );
};
