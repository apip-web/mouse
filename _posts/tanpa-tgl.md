---
layout: post
title: Postingan baru
date: {{ "now" | date: "%Y-%m-%d %H:%M:%S %z" }}
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
