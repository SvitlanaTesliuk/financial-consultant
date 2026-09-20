import { Link } from 'react-router-dom'

import styles from './Footer.module.css'
import { useLanguage } from '../../context/useLanguage'

const Footer = () => {
  const { translations } = useLanguage()

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
              {translations.footer.description}
            </p>

            <p>
              {translations.footer.servicesDescription}
            </p>
          </div>

          <div className={styles.navigation}>
            <h3>{translations.footer.navigationTitle}</h3>

            <Link to="/#about">
              {translations.header.about}
            </Link>

            <Link to="/#services">
              {translations.header.services}
            </Link>

            <Link to="/#calculator">
              {translations.header.calculator}
            </Link>

            <Link to="/#faq">
              FAQ
            </Link>

            <Link to="/#contact">
              {translations.header.contact}
            </Link>
          </div>

          <div className={styles.services}>
            <h3>{translations.footer.servicesTitle}</h3>

            <Link to="/services/life-insurance">
              {translations.services.lifeInsurance.title}
            </Link>

            <Link to="/services/car-insurance">
              {translations.services.carInsurance.title}
            </Link>

            <Link to="/services/property-insurance">
              {translations.services.propertyInsurance.title}
            </Link>

            <Link to="/services/loans">
              {translations.services.loans.title}
            </Link>

            <Link to="/services/mortgage">
              {translations.services.mortgage.title}
            </Link>

            <Link to="/services/investments">
              {translations.services.investments.title}
            </Link>
          </div>

          <div className={styles.contact}>
            <h3>{translations.footer.contactTitle}</h3>

            <a href="tel:+420723973911">
              +420 723 973 911
            </a>

            <a href="mailto:svitlana.tesliuk@ovbmail.cz">
              svitlana.tesliuk@ovbmail.cz
            </a>

            <a href="/#contact">
              {translations.footer.consultation}
            </a>
          </div>

        </div>

        <div className={styles.bottom}>
          <p>
            © {currentYear} Svitlana Tesliuk.{' '}
            {translations.footer.rights}
          </p>

          <Link
            to="/"
            className={styles.homeButton}
            onClick={() => window.scrollTo(0, 0)}
          >
            ↑ {translations.footer.home}
          </Link>
        </div>

      </div>
    </footer>
  )
}

export default Footer