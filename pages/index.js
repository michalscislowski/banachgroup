import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from '../components/header'
import Team from '../components/team'
import Roadmap from '../components/roadmap'
import Partners from '../components/partners'
import Bio from '../components/bio'
import Contact from '../components/contact'
import Description from '../components/description'
import TestContact from '../components/testcontact'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Banach Group</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <section><Bio /></section>
      <section><Description /></section>
      <section><Team/></section>
      <section><TestContact /></section>
    <style jsx>{`
      section {
        border-bottom: 1px solid white;
        height: 100vh;
        scroll-snap-align: start;
        text-align: center;
        position: relative;
      }
      .container {
        scrollbar-color: #606063 ##202324;
      }
    `}</style>
    </div>
  )
}
