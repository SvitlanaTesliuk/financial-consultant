import styles from './About.module.css'
import image from '../../assets/images/IMG_STAbout.webp'

const About = () => {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <div className={styles.imageWrapper}>
          <img
            src={image}
            alt="Світлана Теслюк — фінансовий консультант"
            className={styles.image}
          />
        </div>

        <div className={styles.content}>
          <p className={styles.subtitle}>ПРО МЕНЕ</p>

          <h2 className={styles.title}>
            Ваш надійний провідник у світ фінансів
          </h2>

          <p className={styles.text}>
            Мене звати Світлана Теслюк. Я допомагаю людям
            розібратися у повсякденних фінансових питаннях та знайти рішення,
            яке відповідає їхнім потребам і можливостям.
          </p>

          <p className={styles.text}>
            Користуючись своїм багаторічним досвідом у банківській сфері, допомагаю
            індивідуально підібрати фінансову чи страхову послугу, адже розумію,
            наскільки складними та незрозумілими можуть здаватися
            кредити, страхування та іпотека, особливо в іншій країні.
          </p>

          <div className={styles.features}>
            <div className={styles.feature}>
              <span className={styles.icon}>✓</span>
              <span>Більше 10 років досвіду у банківській сфері</span>
            </div>

            <div className={styles.feature}>
              <span className={styles.icon}>✓</span>
              <span>Індивідуальний підхід</span>
            </div>

            <div className={styles.feature}>
              <span className={styles.icon}>✓</span>
              <span>Пояснюю складне простими словами</span>
            </div>

            <div className={styles.feature}>
              <span className={styles.icon}>✓</span>
              <span>Допомога українцям у Чехії безкоштовно</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About