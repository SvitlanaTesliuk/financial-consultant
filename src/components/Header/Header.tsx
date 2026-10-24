
import { useState } from 'react'
import styles from './Header.module.css'
import { useLanguage } from '../../context/useLanguage'

const Header = () => {
  const { language, setLanguage, translations } = useLanguage()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const closeMenu = () => setIsMenuOpen(false)

  const changeLanguage = (lang: 'uk' | 'cz') => {
    setLanguage(lang)
    closeMenu()
  }

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <a href="/" className={styles.logo} onClick={closeMenu}>
          Svitlana Tesliuk
        </a>

        <nav
          id="main-navigation"
          className={`${styles.nav} ${
            isMenuOpen ? styles.navOpen : ''
          }`}
        >
          <a href="#about" onClick={closeMenu}>
            {translations.header.about}
          </a>

          <a href="#services" onClick={closeMenu}>
            {translations.header.services}
          </a>

          <a href="#calculator" onClick={closeMenu}>
            {translations.header.calculator}
          </a>

          <a href="#contact" onClick={closeMenu}>
            {translations.header.contact}
          </a>

          <div className={styles.mobileActions}>
            <div className={styles.languageSwitcher}>
              <button
                type="button"
                className={
                  language === 'uk' ? styles.activeLanguage : ''
                }
                onClick={() => changeLanguage('uk')}
              >
                UA
              </button>

              <span>|</span>

              <button
                type="button"
                className={
                  language === 'cz' ? styles.activeLanguage : ''
                }
                onClick={() => changeLanguage('cz')}
              >
                CZ
              </button>
            </div>

            <a
              href="tel:+420723973911"
              className={styles.phone}
              onClick={closeMenu}
            >
              {translations.header.call}
            </a>
          </div>
        </nav>

        <div className={styles.actions}>
          <div className={styles.languageSwitcher}>
            <button
              type="button"
              className={
                language === 'uk' ? styles.activeLanguage : ''
              }
              onClick={() => setLanguage('uk')}
            >
              UA
            </button>

            <span>|</span>

            <button
              type="button"
              className={
                language === 'cz' ? styles.activeLanguage : ''
              }
              onClick={() => setLanguage('cz')}
            >
              CZ
            </button>
          </div>

          <a href="tel:+420723973911" className={styles.phone}>
            {translations.header.call}
          </a>
        </div>

        <button
          type="button"
          className={`${styles.burger} ${
            isMenuOpen ? styles.burgerOpen : ''
          }`}
          onClick={() => setIsMenuOpen((open) => !open)}
          aria-label={isMenuOpen ? 'Закрити меню' : 'Відкрити меню'}
          aria-expanded={isMenuOpen}
          aria-controls="main-navigation"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}

export default Header