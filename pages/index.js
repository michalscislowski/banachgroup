import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from '../components/header'
import Team from '../components/team'
import Roadmap from '../components/roadmap'
import Partners from '../components/partners'
import Bio from '../components/bio'
import Description from '../components/description'
import TestContact from '../components/testcontact'
import ButtonTop from '../components/buttontop'

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
      <ButtonTop />
    <style jsx>{`
      section {
        border-bottom: 1px solid white;
        height: 100%;
        scroll-snap-align: start;
        text-align: center;
        position: relative;
      }
      .container {
        scrollbar-color: #606063 ##202324;
      }
      @media only screen and (max-width: 499px) {
        .container {
          scroll-snap-type: y mandatory
        }
    `}</style>
    </div>
  )
}
