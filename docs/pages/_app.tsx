import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Link from 'next/link'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <div>
        <ul>
          <li>
            <Link href="/components/box">
              <a>Box</a>
            </Link>
            <Link href="/components/flex">
              <a>Flex</a>
            </Link>
            <Link href="/components/stack">
              <a>Stack</a>
            </Link>
            <Link href="/components/wrap">
              <a>Wrap</a>
            </Link>
            <Link href="/components/selector">
              <a>Selector</a>
            </Link>
          </li>
        </ul>
      </div>
        <div className="prose prose-slate mx-auto">
          <Component {...pageProps} />
        </div>
    </>
  )
}

export default MyApp
