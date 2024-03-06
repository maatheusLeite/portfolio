import '../styles/globals.scss'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/aos/dist/aos.css'

import { useEffect } from 'react'
import Header from '../src/components/Header'
import Footer from '../src/components/Footer'

import Head from "next/head"
import AOS from "aos"
import styles from '../styles/home.module.scss'
import { Container } from 'reactstrap'

export default function Home() {
  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <>
      <Head>
        <title> MatheusLT </title>
        <link rel="shortcut icon" href="./favicon.ico" type="image/x-icon" />
        <meta property="og:title" content="MatheusLT" key="title" />
        <meta
          name="description"
          content="Seja bem vindo ao meu portifólio pessoal!"
        />
      </Head>

      <main className={styles.main}>
        <Header />
        <Container className={styles.homeContainer}>
        </Container>
        <Footer />
      </main>
    </>
  )
}
