import { Link } from 'react-router-dom'
import styles from './Services.module.css'
import { useLanguage } from '../../context/useLanguage'

const Services = () => {
  const { translations } = useLanguage()

  return (
    <section id="services" className={styles.services}>
      <div className={styles.container}>
        <div className={styles.header}>
          <p className={styles.subtitle}>
            {translations.services.subtitle}
          </p>

          <h2 className={styles.title}>
            {translations.services.title}
          </h2>

          <p className={styles.description}>
            {translations.services.description}
          </p>
        </div>

        <div className={styles.grid}>

          <Link
            to="/services/life-insurance"
            className={styles.card}
          >
            <div className={styles.icon}>❤️</div>

            <h3>{translations.services.lifeInsurance.title}</h3>

            <p>
              {translations.services.lifeInsurance.description}
            </p>

            <span className={styles.link}>
              {translations.services.learnMore}
            </span>
          </Link>

          <Link
            to="/services/car-insurance"
            className={styles.card}
          >
            <div className={styles.icon}>🚗</div>

            <h3>{translations.services.carInsurance.title}</h3>

            <p>
              {translations.services.carInsurance.description}
            </p>

            <span className={styles.link}>
              {translations.services.learnMore}
            </span>
          </Link>

          <Link
            to="/services/property-insurance"
            className={styles.card}
          >
            <div className={styles.icon}>🏠</div>

            <h3>
              {translations.services.propertyInsurance.title}
            </h3>

            <p>
              {translations.services.propertyInsurance.description}
            </p>

            <span className={styles.link}>
              {translations.services.learnMore}
            </span>
          </Link>

          <Link
            to="/services/loans"
            className={styles.card}
          >
            <div className={styles.icon}>💳</div>

            <h3>{translations.services.loans.title}</h3>

            <p>
              {translations.services.loans.description}
            </p>

            <span className={styles.link}>
              {translations.services.learnMore}
            </span>
          </Link>

          <Link
            to="/services/mortgage"
            className={styles.card}
          >
            <div className={styles.icon}>🏡</div>

            <h3>{translations.services.mortgage.title}</h3>

            <p>
              {translations.services.mortgage.description}
            </p>

            <span className={styles.link}>
              {translations.services.learnMore}
            </span>
          </Link>

          <Link
            to="/services/investments"
            className={styles.card}
          >
            <div className={styles.icon}>📈</div>

            <h3>{translations.services.investments.title}</h3>

            <p>
              {translations.services.investments.description}
            </p>

            <span className={styles.link}>
              {translations.services.learnMore}
            </span>
          </Link>

        </div>
      </div>
    </section>
  )
}

export default Services
