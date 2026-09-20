import { Link, useParams } from 'react-router-dom'

import {
  services,
  type ServiceSlug,
} from '../../data/services'
import BackToHome from '../../components/BackToHome/BackToHome'

import styles from './ServiceDetails.module.css'
import { useLanguage } from '../../context/useLanguage'

const ServiceDetails = () => {
  const { service } = useParams<{ service: ServiceSlug }>()
  const { translations } = useLanguage()

  const currentService = services.some(
    (item) => item.slug === service,
  )

  if (!currentService || !service) {
    return (
      <main className={styles.page}>
        <div className={styles.container}>
          <h1 className={styles.title}>
            {translations.serviceDetails.notFound}
          </h1>

          <Link to="/" className={styles.button}>
            {translations.serviceDetails.home}
          </Link>
        </div>
      </main>
    )
  }

  const translatedService =
    translations.serviceDetails.services[
      service as ServiceSlug
    ]

  if (!translatedService) {
    return (
      <main className={styles.page}>
        <div className={styles.container}>
          <h1 className={styles.title}>
            {translations.serviceDetails.notFound}
          </h1>

          <Link to="/" className={styles.button}>
            {translations.serviceDetails.home}
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
          {translations.serviceDetails.subtitle}
        </p>

        <h1 className={styles.title}>
          {translatedService.title}
        </h1>

        <p className={styles.description}>
          {translatedService.description}
        </p>

        <div className={styles.benefits}>
          <h2>{translations.serviceDetails.benefitsTitle}</h2>

          <ul>
            {translatedService.benefits.map((benefit) => (
              <li key={benefit}>
                {benefit}
              </li>
            ))}
          </ul>
        </div>

        <Link to="/#contact" className={styles.button}>
          {translations.serviceDetails.consultation}
        </Link>
      </div>
    </main>
  )
}

export default ServiceDetails



