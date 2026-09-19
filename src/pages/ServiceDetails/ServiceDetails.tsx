import { Link, useParams } from 'react-router-dom'

import { services } from '../../data/services'
import BackToHome from '../../components/BackToHome/BackToHome'

import styles from './ServiceDetails.module.css'

const ServiceDetails = () => {
  const { service } = useParams()

  const currentService = services.find(
    (item) => item.slug === service,
  )

  if (!currentService) {
    return (
      <main className={styles.page}>
        <div className={styles.container}>
          <h1 className={styles.title}>
            Послугу не знайдено
          </h1>

          <Link to="/" className={styles.button}>
            На головну
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <BackToHome />

        <p className={styles.subtitle}>
          ПОСЛУГА
        </p>

        <h1 className={styles.title}>
          {currentService.title}
        </h1>

        <p className={styles.description}>
          {currentService.description}
        </p>

        <div className={styles.benefits}>
          <h2>Що ви отримаєте?</h2>

          <ul>
            {currentService.benefits.map((benefit) => (
              <li key={benefit}>
                {benefit}
              </li>
            ))}
          </ul>
        </div>

        <Link to="/#contact" className={styles.button}>
          Безкоштовна консультація
        </Link>
      </div>
    </main>
  )
}

export default ServiceDetails