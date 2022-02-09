import React, { useMemo } from "react"
import { router } from "./Sidebar";
import { useRouter } from "next/router";
import Link from "next/link";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline";

const Pager: React.FC = () => {
  const { pathname } = useRouter()

  const validRoutes = useMemo(() => router.flat().filter(route => !!route.path), [])

  const prevRoute = useMemo(
    () =>
      validRoutes[validRoutes.findIndex((route) => route.path === pathname) - 1],
    [validRoutes, pathname],
  );

  const nextRoute = useMemo(
    () =>
      validRoutes[validRoutes.findIndex((route) => route.path === pathname) + 1],
    [validRoutes, pathname],
  );

  return (
    <nav className="my-12 py-12 flex border-y dark:border-gray-800">
      <div className="flex-1">
        {prevRoute && (
          <Link href={prevRoute.path!}>
            <a className="h-24 p-4 flex-1 flex items-center rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 group">
              <ChevronLeftIcon className="w-5 text-gray-500" />
              <div className="ml-6 flex flex-col">
                <div className="text-gray-500 text-sm">PREVIOUS</div>
                <div className="mt-0.5 text-primary font-bold group-hover:underline">
                  {prevRoute.title}
                </div>
              </div>
            </a>
          </Link>
        )}
      </div>
      <div className="flex-1">
        {nextRoute && (
          <Link href={nextRoute.path!}>
            <a className="h-24 p-4 flex-1 flex justify-end items-center rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 group">
              <div className="mr-6 flex flex-col items-end">
                <div className="text-gray-500 text-sm">NEXT</div>
                <div className="mt-0.5 text-primary font-bold group-hover:underline">
                  {nextRoute.title}
                </div>
              </div>
              <ChevronRightIcon className="w-5 text-gray-500" />
            </a>
          </Link>
        )}
      </div>
    </nav>
  )
}

export default Pager
