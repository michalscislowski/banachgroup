import Head from 'next/head'
import Header from '../components/header'
import BlogText from '../components/blogtext'
import ButtonTop from '../components/buttontop'
import { ThemeProvider, createMuiTheme } from '@mui/material/styles';

const theme = createMuiTheme();

export default function Onas() {
    return (
      <div className="container">
        <ThemeProvider theme={theme}>
          <Head>
            <title>Banach Group</title>
            <link rel="icon" href="/bsvlogo.svg" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
          </Head>

          <Header />
          <BlogText />
          <ButtonTop />
        </ThemeProvider>
        <style jsx> {`
        .container {
          background-color: black;
          color: white;
        }
        `} </style>
      </div>
    )
  }