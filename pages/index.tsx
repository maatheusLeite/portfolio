import '../styles/globals.scss'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/aos/dist/aos.css'

import { useEffect, useState } from 'react'
import { Container, FormGroup, Input, Label } from 'reactstrap'
import Head from "next/head"
import AOS from "aos"

import styles from '../styles/home.module.scss'
import Header from '../src/components/Header'

export default function Home() {
  const [switchTheme, setSwitchTheme] = useState(true)

  useEffect(() => {
    AOS.init()
  }, [])

  function handleSwitchTheme() {
    if (switchTheme) {
      return styles.lightTheme
    }
    else {
      return styles.darkTheme
    }
  }

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

      <main className={`${styles.main} ${handleSwitchTheme()}`}>
        <Header isLightTheme={switchTheme}/>
        <Container className={styles.homeContainer}>
        </Container>

        <footer>
          <Container className={styles.footerContainer}>
            <FormGroup switch>
              <Input
                type="switch"
                checked={switchTheme}
                onClick={() => setSwitchTheme(!switchTheme)}
                style={
                  switchTheme ?
                  {backgroundColor: '#0d0d0d', cursor: 'pointer'}
                  :
                  {backgroundColor: '#e8ecf2', cursor: 'pointer'}
                }
              />

              <Label check> Mudar background </Label>
            </FormGroup>
            <p> Designed and coded by Matheus Leite - 2024 </p>
            <p className={styles.footerDomain}> MATHEUSLT.COM.BR </p>
          </Container>
        </footer>
      </main>


    </>
  )
}
