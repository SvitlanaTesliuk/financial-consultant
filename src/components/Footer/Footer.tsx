import {Link} from 'react-router-dom'

import styles from './Footer.module.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>

        <div className={styles.main}>

          <div className={styles.about}>
            <Link to="/" className={styles.logo}>
              Svitlana Tesliuk
            </Link>

            <p>
              Фінансовий консультант для вас та вашої родини.
            </p>

            <p>
              Підбір та офрмлення страхування, кредитів та інвестицій.
              Працюю під ČNB.</p>
          </div>

          <div className={styles.navigation}>
            <h3>Навігація</h3>

            <Link to="/#about">
              Про мене
            </Link>

            <Link to="/#services">Послуги</Link>

            <Link to="/#calculator">
              Калькулятор
            </Link>

            <Link to="/#faq">
              FAQ
            </Link>

            <Link to="/#contact">
              Контакти
            </Link>
          </div>

          <div className={styles.services}>
            <h3>Послуги</h3>

            <Link to="/services/life-insurance">
              Страхування життя
            </Link>

            <Link to="/services/car-insurance">
              Страхування автомобіля
            </Link>

            <Link to="/services/property-insurance">
              Страхування майна
            </Link>

            <Link to="/services/loans">
              Кредити
            </Link>

            <Link to="/services/mortgage">
              Іпотека
            </Link>

            <Link to="/services/investments">
              Інвестиції
            </Link>
          </div>

          <div className={styles.contact}>
            <h3>Контакти</h3>

            <a href="tel:+420723973911">
              +420 723 973 911
            </a>

            <a href="mailto:svitlana.tesliuk@ovbmail.cz">
              svitlana.tesliuk@ovbmail.cz
            </a>

            <a href="/#contact">
              Безкоштовна консультація
            </a>
          </div>

        </div>

        <div className={styles.bottom}>
          <p>
            © {currentYear} Svitlana Tesliuk. Всі права захищені.
          </p>

          <Link to="/" 
          className={styles.homeButton}
          onClick={() => window.scrollTo(0, 0)}>
            ↑ На головну
          </Link>
        </div>

      </div>
    </footer>
  )
}

export default Footer