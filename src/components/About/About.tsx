import styles from './About.module.css'

const About = () => {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <div className={styles.imageWrapper}>
          <img
            src="/images/profile/IMG_5942.jpeg"
            alt="Світлана Теслюк — фінансовий консультант"
            className={styles.image}
          />
        </div>

        <div className={styles.content}>
          <p className={styles.subtitle}>ПРО МЕНЕ</p>

          <h2 className={styles.title}>
            Твій провідник у світ фінансів в Чехії
          </h2>

          <p className={styles.text}>
            Мене звати Світлана Теслюк. Я допомагаю українцям у Чехії
            розібратися у фінансових питаннях та знайти рішення,
            яке відповідає їхнім потребам і можливостям.
          </p>

          <p className={styles.text}>
            Маю багаторічний досвід роботи у банківській сфері та
            добре розумію, наскільки складними можуть здаватися
            кредити, страхування, іпотека та інвестиції.
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