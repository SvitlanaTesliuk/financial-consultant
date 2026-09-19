import styles from './Header.module.css'

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <a href="/" className={styles.logo}>
          Svitlana Tesliuk
        </a>

        <nav className={styles.nav}>
          <a href="#about">Про мене</a>
          <a href="#services">Послуги</a>
          <a href="#calculator">Калькулятор</a>
          <a href="#contact">Контакти</a>
        </nav>

        <a
          href="tel:+420723973911"
          className={styles.phone}
        >
          Зателефонувати
        </a>
      </div>
    </header>
  )
}

export default Header