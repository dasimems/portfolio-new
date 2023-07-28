import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  const schema = {
    "@context": "https://schema.org/",
    "@type": "Person",
    name: "Duyil Ayomid",
    url: "https://dasimems.com",
    image: "https://dasimems.com/meta_image.png",
    sameAs: [
      "https://facebook.com/dasimems",
      "https://twitter.com/dasimems",
      "https://instagram.com/dasimems",
      "https://linkedin.com/in/dasimems",
      "https://github.com/dasimems",
      "https://dasimems.com"
    ],
    jobTitle: "Software Developer",
    additionalName: [
      "MEMS",
      "Dasimems",
      "Duyil",
      "Duyil Ayomid",
      "Duyilemi",
      "Duyilemi Ayomid",
      "Ayomidimeji",
      "Duyil Ayomidimeji"
    ],
    familyName: "Omonimewa",
    gender: "Male",
    givenName: "Isaac",
    email: "dasimems@gmail.com",
    telephone: "+(234) 903 3663 4645",

    worksFor: {
      "@type": "Organization",
      name: "Special Technology A Giants",
      email: "1team.stag@gmail.com",
      url: "https://stagofficial.com"
    }
  };
  return (
    <Html lang="en">
      <Head>
        <meta name="robots" content="follow, index, noarchive" />
        <meta name="Googlebot" content="follow, index, noarchive" />
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
        <meta
          name="keywords"
          content="Duyil, Ayomid, Duyilemi, Ayomide, Duyil Ayomide, Duyil Ayomid, Duyilemi Ayomid, Duyilemi Ayomide, Ayomidimeji, Mems"
        />
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
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
