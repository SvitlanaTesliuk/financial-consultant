import styles from './Contact.module.css'

const Contact = () => {
  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <div className={styles.header}>
          <p className={styles.subtitle}>КОНТАКТИ</p>

          <h2 className={styles.title}>
            Маєте запитання?
          </h2>

          <p className={styles.description}>
            Не вагайтеся, зв’яжіться зі мною, щоб обговорити вашу ситуацію
            та знайти відповідне фінансове рішення.
          </p>
        </div>

        <div className={styles.content}>
          <div className={styles.info}>
            <h3>
              Буду рада вам допомогти
            </h3>

            <p>
              Консультація безкоштовна.
              Ви можете зателефонувати, написати мені
              на email або залишити заявку на консультацію.
            </p>

            <div className={styles.contacts}>
              <a
                href="tel:+420723973911"
                className={styles.contactItem}
              >
                <span className={styles.icon}>📞</span>

                <span>
                  <small>Телефон</small>
                  <strong>+420 723 973 911</strong>
                </span>
              </a>

              <a
                href="mailto:svitlana.tesliuk@ovbmail.cz"
                className={styles.contactItem}
              >
                <span className={styles.icon}>✉️</span>

                <span>
                  <small>Email</small>
                  <strong>svitlana.tesliuk@ovbmail.cz</strong>
                </span>
              </a>
            </div>
          </div>

          <div className={styles.actions}>
            <a
              href="tel:+420XXXXXXXXX"
              className={styles.primaryButton}
            >
              📞 Зателефонувати
            </a>

            <a
              href="mailto:example@email.com"
              className={styles.secondaryButton}
            >
              ✉️ Написати на email
            </a>

            <a
              href="mailto:example@email.com?subject=Безкоштовна консультація"
              className={styles.secondaryButton}
            >
              💬 Безкоштовна консультація
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact