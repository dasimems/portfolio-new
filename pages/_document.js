import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="robots" content="follow, index" />
        <meta name="Googlebot" content="follow, index" />
        <meta name="application-name" content="Dasimems" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Dasimems" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-tap-highlight" content="no" />
        <meta name="theme-color" content="#3457D5" />
        <link rel="robots" href="/robots.txt" />
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />

        <link rel="manifest" href="/manifest.json" />
        <link rel="shortcut icon" href="/favicon-16x16.png" type="image/png" />
        <link rel="shortcut icon" href="/favicon-32x32.png" type="image/png" />
        <link
          rel="icon"
          href="/favicon-16x16.png"
          type="image/png"
          sizes="16x16"
        />
        <link
          rel="icon"
          href="/favicon-32x32.png"
          type="image/png"
          sizes="32x32"
        />

        {/* <meta
            name="google-site-verification"
            content={process.env.NEXT_PUBLIC_GOOGLE_INDEX_VERIFICATION_ID}
          /> */}
      </Head>
      <body className="bg-primary-100">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
