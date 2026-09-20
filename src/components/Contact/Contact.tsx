import { useState } from 'react'
import styles from './Contact.module.css'
import { useLanguage } from '../../context/useLanguage'

const Contact = () => {
  const { translations } = useLanguage()

  const [isFormOpen, setIsFormOpen] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [isError, setIsError] = useState(false)

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

  const handleSubmit = async (
    e: React.SubmitEvent<HTMLFormElement>,
  ) => {
    e.preventDefault()

    setIsError(false)

    const newErrors = {
      name: '',
      phone: '',
      email: '',
      message: '',
    }

    if (!formData.name.trim()) {
      newErrors.name = translations.contact.errors.name
    }

    if (!formData.phone.trim()) {
      newErrors.phone = translations.contact.errors.phone
    }

    if (!formData.email.trim()) {
      newErrors.email = translations.contact.errors.email
    } else if (!formData.email.includes('@')) {
      newErrors.email = translations.contact.errors.emailInvalid
    }

    if (!formData.message.trim()) {
      newErrors.message = translations.contact.errors.message
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

    try {
      const response = await fetch(
        'http://localhost:5000/api/contact',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        },
      )

      const data = await response.json()

      if (data.success) {
        setIsFormOpen(false)
        setIsSuccess(true)

        setFormData({
          name: '',
          phone: '',
          email: '',
          message: '',
        })

        setErrors({
          name: '',
          phone: '',
          email: '',
          message: '',
        })

        setTimeout(() => {
          setIsSuccess(false)
        }, 5000)
      } else {
        setIsError(true)
      }
    } catch (error) {
      console.error(
        'Помилка при відправленні форми:',
        error,
      )

      setIsError(true)
    }
  }

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <div className={styles.header}>
          <p className={styles.subtitle}>
            {translations.contact.subtitle}
          </p>

          <h2 className={styles.title}>
            {translations.contact.title}
          </h2>

          <p className={styles.description}>
            {translations.contact.description}
          </p>
        </div>

        <div className={styles.content}>
          <div className={styles.info}>
            <h3>{translations.contact.infoTitle}</h3>

            <p>{translations.contact.infoText}</p>

            <div className={styles.contacts}>
              <a
                href="tel:+420723973911"
                className={styles.contactItem}
              >
                <span className={styles.icon}>📞</span>

                <span>
                  <small>
                    {translations.contact.phone}
                  </small>

                  <strong>
                    +420 723 973 911
                  </strong>
                </span>
              </a>

              <a
                href="mailto:svitlana.tesliuk@ovbmail.cz"
                className={styles.contactItem}
              >
                <span className={styles.icon}>✉️</span>

                <span>
                  <small>
                    {translations.contact.email}
                  </small>

                  <strong>
                    svitlana.tesliuk@ovbmail.cz
                  </strong>
                </span>
              </a>
            </div>
          </div>

          <div className={styles.actions}>
            <a
              href="tel:+420723973911"
              className={styles.primaryButton}
            >
              📞 {translations.contact.call}
            </a>

            <a
              href="mailto:svitlana.tesliuk@ovbmail.cz"
              className={styles.secondaryButton}
            >
              ✉️ {translations.contact.emailButton}
            </a>

            <button
              type="button"
              className={styles.secondaryButton}
              onClick={() => setIsFormOpen(true)}
            >
              💬 {translations.contact.consultation}
            </button>

            {isFormOpen && (
              <form
                className={styles.form}
                onSubmit={handleSubmit}
              >
                <h3>
                  {translations.contact.consultation}
                </h3>

                <input
                  type="text"
                  placeholder={
                    translations.contact.form.name
                  }
                  value={formData.name}
                  className={
                    errors.name
                      ? styles.inputError
                      : ''
                  }
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

                {errors.name && (
                  <span className={styles.error}>
                    {errors.name}
                  </span>
                )}

                <input
                  type="tel"
                  placeholder={
                    translations.contact.form.phone
                  }
                  value={formData.phone}
                  className={
                    errors.phone
                      ? styles.inputError
                      : ''
                  }
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

                {errors.phone && (
                  <span className={styles.error}>
                    {errors.phone}
                  </span>
                )}

                <input
                  type="email"
                  placeholder={
                    translations.contact.form.email
                  }
                  value={formData.email}
                  className={
                    errors.email
                      ? styles.inputError
                      : ''
                  }
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

                {errors.email && (
                  <span className={styles.error}>
                    {errors.email}
                  </span>
                )}

                <textarea
                  placeholder={
                    translations.contact.form.message
                  }
                  rows={5}
                  value={formData.message}
                  className={
                    errors.message
                      ? styles.inputError
                      : ''
                  }
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

                {errors.message && (
                  <span className={styles.error}>
                    {errors.message}
                  </span>
                )}

                <button type="submit">
                  {translations.contact.form.submit}
                </button>

                <button
                  type="button"
                  onClick={() =>
                    setIsFormOpen(false)
                  }
                >
                  {translations.contact.form.close}
                </button>
              </form>
            )}

            {isSuccess && (
              <div className={styles.successMessage}>
                {translations.contact.success}
              </div>
            )}

            {isError && (
              <div className={styles.errorMessage}>
                {translations.contact.serverError}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact