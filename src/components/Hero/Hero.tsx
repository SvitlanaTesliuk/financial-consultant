import styles from './Hero.module.css'
import image from '../../assets/images/IMG_STHero.webp'
import { useLanguage } from '../../context/useLanguage'

const Hero = () => {
  const { translations } = useLanguage()

  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <p className={styles.subtitle}>
            {translations.hero.subtitle}
          </p>

          <h1 className={styles.title}>
            {translations.hero.title}
          </h1>

          <p className={styles.position}>
            {translations.hero.position}
          </p>

          <p className={styles.description}>
            {translations.hero.description}
          </p>

          <div className={styles.actions}>
            <a href="#contact" className={styles.primaryButton}>
              {translations.hero.consultation}
            </a>

            <a
              href="tel:+420723973911"
              className={styles.secondaryButton}
            >
              {translations.hero.call}
            </a>
          </div>
        </div>

        <div className={styles.imageWrapper}>
          <img
            src={image}
            alt={translations.hero.imageAlt}
            className={styles.image}
          />
        </div>
      </div>
    </section>
  )
}

export default Hero