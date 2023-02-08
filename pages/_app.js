import '../styles/globals.css'
import Head from 'next/head'
import Image from 'next/image'

function MyApp({ Component, pageProps }) {
    return <>
        <Head>
            <title>TEMPLATENEXT</title>
            <link rel="icon" href="snorlax.gif" type="image/gif" />
        </Head>
        <Component {...pageProps} />
    </>
}

export default MyApp