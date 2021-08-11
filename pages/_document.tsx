import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class CustomDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />
          <script async src={GA_URL}></script>
          <script dangerouslySetInnerHTML={{ __html: GA }}></script>
          <meta
            name="description"
            content="Thing maker, software developer, designer, and photographer based in Melbourne, Australia."
          />
          <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no" />
          <meta name="language" content="en-au" />
          <link rel="icon" href="/favicon.ico" />
          <link
            href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;900&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

const GA_URL = `https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`;
const GA = `window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');`;
