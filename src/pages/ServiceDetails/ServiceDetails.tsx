import { Link, useParams } from 'react-router-dom'
import styles from './ServiceDetails.module.css'

const ServiceDetails = () => {
  const { service } = useParams()

  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <Link to="/" className={styles.backLink}>
          ← На головну
        </Link>

        <p className={styles.subtitle}>ПОСЛУГА</p>

        <h1 className={styles.title}>
          {service}
        </h1>

        <p className={styles.description}>
          Тут буде детальна інформація про цю послугу.
          Ми пояснимо основні умови, переваги та як я можу
          допомогти вам знайти відповідне фінансове рішення.
        </p>

        <Link to="/#contact" className={styles.button}>
          Безкоштовна консультація
        </Link>
      </div>
    </main>
  )
}

export default ServiceDetails