import ThemeToggleButton from "../ThemeToggleButton"
import styles from "./styles.module.scss"

export default function Footer() {
    return (
        <footer className={styles.footerContainer}>
            <ThemeToggleButton />
            <span> Designed and coded by Matheus Leite - 2025 </span>
            <span className={styles.letterSpacing}> MATHEUSLT.COM.BR </span>
        </footer>
    )
}
