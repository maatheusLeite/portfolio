import Footer from "@/components/Footer"
import styles from "./page.module.scss"
import Header from "@/components/Header"
import Image from "next/image"

export default function Home() {
  return (
    <div className={styles.outsideContainer}>

      <Header />

      <Image
        src="/images/matheusLeite.png" alt="A picture of Matheus Leite."
        width={1280}
        height={1280}
        className={styles.photo}
      />

      <Footer />
    </div>
  )
}
