import styles from './About.module.css'
import image from '../../assets/images/IMG_STAbout.webp'
import { useLanguage } from '../../context/useLanguage'

const About = () => {
  const { translations } = useLanguage()

  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <div className={styles.imageWrapper}>
          <img
            src={image}
            alt={translations.about.imageAlt}
            className={styles.image}
          />
        </div>

        <div className={styles.content}>
          <p className={styles.subtitle}>
            {translations.about.subtitle}
          </p>

          <h2 className={styles.title}>
            {translations.about.title}
          </h2>

          <p className={styles.text}>
            {translations.about.text1}
          </p>

          <p className={styles.text}>
            {translations.about.text2}
          </p>

          <div className={styles.features}>
            <div className={styles.feature}>
              <span className={styles.icon}>✓</span>
              <span>{translations.about.feature1}</span>
            </div>

            <div className={styles.feature}>
              <span className={styles.icon}>✓</span>
              <span>{translations.about.feature2}</span>
            </div>

            <div className={styles.feature}>
              <span className={styles.icon}>✓</span>
              <span>{translations.about.feature3}</span>
            </div>

            <div className={styles.feature}>
              <span className={styles.icon}>✓</span>
              <span>{translations.about.feature4}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About