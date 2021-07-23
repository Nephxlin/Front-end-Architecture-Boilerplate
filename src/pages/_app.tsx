import type { AppProps } from 'next/app'
import Head from 'next/head'
import { GlobalStyles } from 'styles/global'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Nephxlin boilerplate 2021</title>
        <link rel="shortcut icon" href="/img/icon.png" />
        <link rel="apple-touch-icon" href="/img/icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta
          name="description"
          content="Nephxlin new modern boilerplate - 2021"
        />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

export default App
