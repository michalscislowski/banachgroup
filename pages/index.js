import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from '../components/header'
import Team from '../components/team'
import Roadmap from '../components/roadmap'
import Partners from '../components/partners'
import Bio from '../components/bio'
import Contact from '../components/contact'
import Description from '../components/description'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Banach Group</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Bio />
      <Description />
      <Roadmap />
      <Team />
      <Contact />
    </div>
  )
}
