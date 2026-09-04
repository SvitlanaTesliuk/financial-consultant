import { useState } from 'react'

import styles from './FAQ.module.css'

interface Question {
  question: string
  answer: string
}

const questions: Question[] = [
  {
    question: 'Чи можу я отримати іпотеку в Чехії як українець?',
    answer:
      'Можливість отримання іпотеки залежить від вашої ситуації, типу дозволу на перебування, доходу, трудового статусу та вимог конкретного банку. На консультації можемо оцінити вашу ситуацію.',
  },
  {
    question: 'Скільки потрібно мати власних коштів для іпотеки?',
    answer:
      'Для нашого орієнтовного калькулятора ми використовуємо 20% власних коштів. Фактичні умови можуть залежати від віку, типу нерухомості та вимог банку.',
  },
  {
    question: 'Чи допомагаєте ви зі страхуванням автомобіля?',
    answer:
      'Так. Можемо розглянути варіанти страхування автомобіля та підібрати рішення відповідно до вашої ситуації.',
  },
  {
    question: 'Чи можна отримати консультацію онлайн?',
    answer:
      'Так. Консультацію можна провести онлайн, тому вам не обов’язково приїжджати особисто.',
  },
  {
    question: 'Скільки коштує перша консультація?',
    answer:
      'Перша консультація є безкоштовною. Ви можете описати свою ситуацію та отримати інформацію про можливі варіанти.',
  },
  {
    question: 'Які документи потрібні для консультації?',
    answer:
      'Залежно від питання можуть знадобитися документи про доходи, трудовий статус, проживання або вже наявні фінансові зобов’язання. Точний список визначимо після короткої розмови.',
  },
]

const FAQ = () => {
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
            Часті запитання
          </h2>

          <p className={styles.description}>
            Відповіді на найпоширеніші питання про фінансові
            послуги в Чехії.
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

export default FAQ