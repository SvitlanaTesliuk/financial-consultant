import { useState } from 'react'
import styles from './Contact.module.css'

const Contact = () => {
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [formData, setFormData] = useState({
  name: '',
  phone: '',
  email: '',
  message: '',
})
const [errors, setErrors] = useState({
  name: '',
  phone: '',
  email: '',
  message: '',
})
const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
  e.preventDefault()

  const newErrors = {
    name: '',
    phone: '',
    email: '',
    message: '',
  }

  if (!formData.name.trim()) {
    newErrors.name = "Введіть ваше ім'я"
  }

  if (!formData.phone.trim()) {
    newErrors.phone = 'Введіть ваш телефон'
  }

  if (!formData.email.trim()) {
    newErrors.email = 'Введіть ваш email'
  } else if (!formData.email.includes('@')) {
    newErrors.email = 'Введіть правильний email'
  }

  if (!formData.message.trim()) {
    newErrors.message = 'Напишіть, що вас цікавить'
  }

  setErrors(newErrors)

  if (
    newErrors.name ||
    newErrors.phone ||
    newErrors.email ||
    newErrors.message
  ) {
    return
  }

  console.log(formData)
}
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
              href="tel:+420723973911"
              className={styles.primaryButton}
            >
              📞 Зателефонувати
            </a>

            <a
              href="mailto:svitlana.tesliuk@ovbmail.cz"
              className={styles.secondaryButton}
            >
              ✉️ Написати на email
            </a>

            <button
  type="button"
  className={styles.secondaryButton}
  onClick={() => setIsFormOpen(true)}
>
  💬 Безкоштовна консультація
</button>
{isFormOpen && (
  <form className={styles.form} onSubmit={handleSubmit}>
    <h3>Безкоштовна консультація</h3>

 <input
  type="text"
  placeholder="Ваше ім'я"
  value={formData.name}
  className={errors.name ? styles.inputError : ''}
  onChange={(e) => {
    setFormData({
      ...formData,
      name: e.target.value,
    })

    setErrors({
      ...errors,
      name: '',
    })
  }}
/>
  {errors.name && <span className={styles.error}>{errors.name}</span>}
    <input
  type="tel"
  placeholder="Ваш телефон"
  value={formData.phone}
  className={errors.phone ? styles.inputError : ''}
  onChange={(e) => {
    setFormData({
      ...formData,
      phone: e.target.value,
    })

    setErrors({
      ...errors,
      phone: '',
    })
  }}
/>
  {errors.phone && <span className={styles.error}>{errors.phone}</span>}
    <input
  type="email"
  placeholder="Ваш email"
  value={formData.email}
  className={errors.email ? styles.inputError : ''}
  onChange={(e) => {
    setFormData({
      ...formData,
      email: e.target.value,
    })

    setErrors({
      ...errors,
      email: '',
    })
  }}
/>
  {errors.email && <span className={styles.error}>{errors.email}</span>}
   <textarea
  placeholder="Напишіть, що вас цікавить"
  rows={5}
  value={formData.message}
  className={errors.message ? styles.inputError : ''}
  onChange={(e) => {
    setFormData({
      ...formData,
      message: e.target.value,
    })

    setErrors({
      ...errors,
      message: '',
    })
  }}
/>
  {errors.message && <span className={styles.error}>{errors.message}</span>}
    <button type="submit">
      Надіслати заявку
    </button>

    <button
      type="button"
      onClick={() => setIsFormOpen(false)}
    >
      Закрити
    </button>
  </form>
)}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact