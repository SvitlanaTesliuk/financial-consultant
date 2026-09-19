import styles from './Hero.module.css'
import image from '../../assets/images/IMG_STHero.webp'

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <p className={styles.subtitle}>
            Твій фінансовий менеджер
          </p>

          <h1 className={styles.title}>
            Світлана Теслюк
          </h1>

          <p className={styles.position}>
            Finanční konzultant
          </p>

          <p className={styles.description}>
           Комплексне фінансове консультування та супровід
          </p>

          <div className={styles.actions}>
            <a href="#contact" className={styles.primaryButton}>
              Безкоштовна консультація
            </a>

            <a href="tel:+420723973911" className={styles.secondaryButton}>
              Зателефонувати
            </a>
          </div>
        </div>

        <div className={styles.imageWrapper}>
          <img
            src={image}
            alt="Світлана Теслюк — фінансовий консультант"
            className={styles.image}
          />
        </div>
      </div>
    </section>
  )
}

export default Hero