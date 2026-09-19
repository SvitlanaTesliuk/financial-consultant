import { Link } from 'react-router-dom'
import styles from './Services.module.css'

const Services = () => {
  return (
    <section id="services" className={styles.services}>
      <div className={styles.container}>
        <div className={styles.header}>
          <p className={styles.subtitle}>ПОСЛУГИ</p>

          <h2 className={styles.title}>
            Фінансові рішення для вас
          </h2>

          <p className={styles.description}>
            Допомагаю розібратися у фінансових
            питаннях та знайти оптимальне рішення.
          </p>
        </div>

        <div className={styles.grid}>

          <Link to="/services/life-insurance" className={styles.card}>
            <div className={styles.icon}>❤️</div>

            <h3>Страхування життя</h3>

            <p>
              Захист вас та вашої родини у непередбачуваних ситуаціях.
            </p>

            <span className={styles.link}>
              Дізнатися більше →
            </span>
          </Link>

          <Link to="/services/car-insurance" className={styles.card}>
            <div className={styles.icon}>🚗</div>

            <h3>Страхування автомобіля</h3>

            <p>
              Обов'язкове страхування траспортного засобу.
            </p>

            <span className={styles.link}>
              Дізнатися більше →
            </span>
          </Link>

          <Link to="/services/property-insurance" className={styles.card}>
            <div className={styles.icon}>🏠</div>

            <h3>Страхування майна</h3>

            <p>
              Захист квартири, будинку та вашого майна.
            </p>

            <span className={styles.link}>
              Дізнатися більше →
            </span>
          </Link>

          <Link to="/services/loans" className={styles.card}>
            <div className={styles.icon}>💳</div>

            <h3>Кредити</h3>

            <p>
              Допомога у пошуку кредитного рішення та підготовці заявки.
            </p>

            <span className={styles.link}>
              Дізнатися більше →
            </span>
          </Link>

          <Link to="/services/mortgage" className={styles.card}>
            <div className={styles.icon}>🏡</div>

            <h3>Іпотека</h3>

            <p>
              Допоможу розібратися з можливостями отримання іпотеки у Чехії та підготовкою документів.
            </p>

            <span className={styles.link}>
              Дізнатися більше →
            </span>
          </Link>

          <Link to="/services/investments" className={styles.card}>
            <div className={styles.icon}>📈</div>

            <h3>Інвестиції</h3>

            <p>
              Допоможу підібрати найвигідніший та найнадійніший варіант інвестицій.
            </p>

            <span className={styles.link}>
              Дізнатися більше →
            </span>
          </Link>

        </div>
      </div>
    </section>
  )
}

export default Services