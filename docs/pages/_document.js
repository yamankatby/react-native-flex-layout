import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-PQTP3P9QQW"
        />

        <script
          dangerouslySetInnerHTML={{
            __html: `function gtag(){dataLayer.push(arguments)}window.dataLayer=window.dataLayer||[],gtag("js",new Date),gtag("config","G-PQTP3P9QQW");`
          }}
        />
      </Head>
      <body>
      <Main />
      <NextScript />
      </body>
    </Html>
  );
}
