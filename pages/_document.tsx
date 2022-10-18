// pages/_document.js
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <script src='https://api.mapbox.com/mapbox-gl-js/v2.10.0/mapbox-gl.js'></script>
        <link href='https://api.tiles.mapbox.com/mapbox-gl-js/v2.10.0/mapbox-gl.css' rel='stylesheet' />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}