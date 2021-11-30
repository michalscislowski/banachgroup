import Head from 'next/head'
import Header from '../components/header'
import BlogText from '../components/blogtext'
import ButtonTop from '../components/buttontop'
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme();

export default function Blog() {
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