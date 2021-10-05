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

import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme();

export default function Home() {
  return (
    <div className="container">
      <ThemeProvider theme={theme}>
        <Head>
          <title>Banach Group</title>
          <link rel="icon" href="/favicon.png"/>
        </Head>
        <Header />
        <section><Bio /></section>
        <section><Description /></section> 
        <section><Team/></section>
        <section><TestContact /></section>
        <ButtonTop />
      </ThemeProvider>
    <style jsx>{`
      section {
        height: 100%;
        text-align: center;
        position: relative;
        overflow:visible;
        scroll-snap-align: start;
        scroll-snap-type: y proximity;
      }
      section:last-child {
        border: none;
      }
      .container {
        scrollbar-color: #606063 #202324;
        -webkit-overflow-scrolling: touch;
      }
      @media only screen and (max-width: 499px) {
        section {
          scroll-snap-align: none;
          scroll-snap-type: none;
        }
      }
    `}</style>
    </div>
  )
}
