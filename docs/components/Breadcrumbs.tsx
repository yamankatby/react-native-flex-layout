import React from "react"
import Logo from "./Logo";
import { ChevronRightIcon } from "@heroicons/react/outline";
import Link from "next/link";

const Breadcrumbs: React.FC = () => {
  return (
    <nav className="my-6 flex items-center">
      <Link href="/">
        <a>
          <Logo className="w-4" />
        </a>
      </Link>
      <ChevronRightIcon className="mx-4 w-5" />
    </nav>
  )
}

export default Breadcrumbs
