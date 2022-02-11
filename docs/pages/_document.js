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
        
        <meta name="title" content="React Native Flex Layout" />
        <meta name="description" content="Layout primitives for React Native." />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://react-native-flex-layout.js.org/" />
        <meta property="og:title" content="React Native Flex Layout" />
        <meta property="og:description" content="Layout primitives for React Native." />
        <meta property="og:image" content="/cover.png" />

        <meta property="twitter:card" content="/cover.png" />
        <meta property="twitter:url" content="https://react-native-flex-layout.js.org/" />
        <meta property="twitter:title" content="React Native Flex Layout" />
        <meta property="twitter:description" content="Layout primitives for React Native." />
        <meta property="twitter:image" content="/cover.png" />
      </Head>
      <body>
      <Main />
      <NextScript />
      </body>
    </Html>
  );
}
