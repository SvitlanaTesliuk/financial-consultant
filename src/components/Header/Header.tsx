import styles from './Header.module.css'
import { useLanguage } from '../../context/useLanguage'

const Header = () => {
  const { language, setLanguage, translations } = useLanguage()

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <a href="/" className={styles.logo}>
          Svitlana Tesliuk
        </a>

        <nav className={styles.nav}>
          <a href="#about">{translations.header.about}</a>
          <a href="#services">{translations.header.services}</a>
          <a href="#calculator">{translations.header.calculator}</a>
          <a href="#contact">{translations.header.contact}</a>
        </nav>

        <div className={styles.actions}>
          <div className={styles.languageSwitcher}>
            <button
              type="button"
              className={language === 'uk' ? styles.activeLanguage : ''}
              onClick={() => setLanguage('uk')}
            >
              UA
            </button>

            <span>|</span>

            <button
              type="button"
              className={language === 'cz' ? styles.activeLanguage : ''}
              onClick={() => setLanguage('cz')}
            >
              CZ
            </button>
          </div>

          <a
            href="tel:+420723973911"
            className={styles.phone}
          >
            {translations.header.call}
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header