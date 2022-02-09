import React from "react";
import Link from "next/link";

const router = [
  { title: 'Overview', path: '/' },
  { title: 'Getting Started', path: '/getting-started' },
  [
    { title: 'Components' },
    { title: 'Box', path: '/components/box' },
    { title: 'Flex', path: '/components/flex' },
    { title: 'Stack', path: '/components/stack' },
    { title: 'Wrap', path: '/components/wrap' },
    { title: 'Selector', path: '/components/selector' },
    { title: 'Spacer', path: '/components/spacer' },
    { title: 'Divider', path: '/components/divider' },
  ],
  [
    { title: 'Guides' },
    { title: 'Spacing', path: '/guides/spacing' },
    { title: 'TypeScript', path: '/guides/typescript' },
  ],
  [
    { title: 'Examples' },
    { title: 'Toolbar', path: '/examples/toolbar' },
    { title: 'List', path: '/examples/list' },
    { title: 'Gallery', path: '/examples/gallery' },
    { title: 'Tags', path: '/examples/tags' },
    { title: 'Table', path: '/examples/table' },
  ],
  { title: 'Acknowledgements', path: '/acknowledgements' },
]

const Sidebar: React.FC = () => {
  return (
    <ul className="my-4 mx-4">
      {router.map((route, index) => <SidebarItem key={index} route={route} />)}
    </ul>
  )
}

export default Sidebar;

const SidebarGroup: React.FC<any> = ({ routes }) => (
  <>
    <span className="mt-6 mb-3 block uppercase text-xs text-gray-500">{routes[0].title}</span>
    <ul className="pl-3 border-l dark:border-gray-700">
      {routes.slice(1).map((route: any) => <SidebarItem route={route} key={route.path} />)}
    </ul>
  </>
)

const SidebarItem: React.FC<any> = ({ route }) => {
  if (Array.isArray(route)) return <SidebarGroup routes={route} />
  return (
    <li>
      <Link href={route.path}>
        <a className="px-3 py-2 flex rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 hover:underline">
          {route.title}
        </a>
      </Link>
    </li>
  )
}
