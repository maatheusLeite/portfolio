import { Container } from 'reactstrap'
import styles from './styles.module.scss'

export default function index() {
    return (
        <>
            <Container className={styles.footerContainer}>
                <img
                    src='./assets/images/logo.png'
                    alt="Logo MatheusLT"
                    className={styles.footerLogo}
                />
                <p> Designed and coded by Matheus Leite - 2024 </p>
                <span className={styles.footerDomain}> MATHEUSLT.COM.BR </span>
            </Container>
        </>
    )
}
