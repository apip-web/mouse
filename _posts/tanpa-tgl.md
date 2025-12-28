---
layout: post
title: Postingan baru
date: 2025-01-10 21:30:00 +0700
author: Onta
---

# JS

```js
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              console.log("Script komentar jalan!");
              // Misal script Disqus, Utterances, dll bisa ditaruh di sini
            `,
          }}
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
```
