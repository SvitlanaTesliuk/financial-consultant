import { useState } from 'react'

import styles from './FAQ.module.css'
import { useLanguage } from '../../context/useLanguage'

interface Question {
  question: string
  answer: string
}

const Faq = () => {
  const { translations } = useLanguage()

  const questions: Question[] = [
    {
      question: translations.faq.questions.q1.question,
      answer: translations.faq.questions.q1.answer,
    },
    {
      question: translations.faq.questions.q2.question,
      answer: translations.faq.questions.q2.answer,
    },
    {
      question: translations.faq.questions.q3.question,
      answer: translations.faq.questions.q3.answer,
    },
    {
      question: translations.faq.questions.q4.question,
      answer: translations.faq.questions.q4.answer,
    },
    {
      question: translations.faq.questions.q5.question,
      answer: translations.faq.questions.q5.answer,
    },
    {
      question: translations.faq.questions.q6.question,
      answer: translations.faq.questions.q6.answer,
    },
  ]

  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleQuestion = (index: number) => {
    setOpenIndex(
      openIndex === index ? null : index,
    )
  }

  return (
    <section id="faq" className={styles.faq}>
      <div className={styles.container}>
        <div className={styles.header}>
          <p className={styles.subtitle}>FAQ</p>

          <h2 className={styles.title}>
            {translations.faq.title}
          </h2>

          <p className={styles.description}>
            {translations.faq.description}
          </p>
        </div>

        <div className={styles.list}>
          {questions.map((item, index) => (
            <div
              key={item.question}
              className={`${styles.item} ${
                openIndex === index ? styles.open : ''
              }`}
            >
              <button
                type="button"
                className={styles.question}
                onClick={() => toggleQuestion(index)}
                aria-expanded={openIndex === index}
              >
                <span>{item.question}</span>

                <span className={styles.icon}>
                  {openIndex === index ? '−' : '+'}
                </span>
              </button>

              {openIndex === index && (
                <div className={styles.answer}>
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Faq