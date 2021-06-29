import Head from 'next/head'
import Header from '../components/header'
import ONasText from '../components/onastext'


export default function Onas() {
    return (
      <div className="container">
        <Head>
          <title>Kup BSV</title>
          <link rel="icon" href="/bsvlogo.svg" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        </Head>

        <Header />
        <ONasText />
        <style jsx> {`

        `} </style>
      </div>
    )
  }