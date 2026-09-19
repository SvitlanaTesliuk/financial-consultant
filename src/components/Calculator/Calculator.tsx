import { useState } from 'react'

import styles from './Calculator.module.css'

const Calculator = () => {
  const [propertyPrice, setPropertyPrice] = useState<number>(5000000)
  const [downPaymentPercent, setDownPaymentPercent] =
    useState<number>(20)
  const [years, setYears] = useState<string>('30')

  const interestRate = 5.5

  const downPayment =
    propertyPrice * (downPaymentPercent / 100)

  const loanAmount =
    propertyPrice - downPayment

  const monthlyRate =
    interestRate / 100 / 12

  const numberOfPayments =
    Number(years) * 12

  const monthlyPayment =
    Number(years) > 0
      ? loanAmount *
        (monthlyRate *
          Math.pow(1 + monthlyRate, numberOfPayments)) /
        (Math.pow(1 + monthlyRate, numberOfPayments) - 1)
      : 0

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('cs-CZ', {
      style: 'currency',
      currency: 'CZK',
      maximumFractionDigits: 0,
    }).format(value)
  }

  return (
    <section
      id="calculator"
      className={styles.calculator}
    >
      <div className={styles.container}>

        <div className={styles.header}>
          <p className={styles.subtitle}>
            КРЕДИТНИЙ КАЛЬКУЛЯТОР
          </p>

          <h2 className={styles.title}>
            Розрахуйте орієнтовний платіж за іпотекою
          </h2>

          <p className={styles.description}>
            Введіть параметри нерухомості та отримайте
            приблизний розрахунок щомісячного платежу.
          </p>
        </div>

        <div className={styles.calculatorBox}>

          <div className={styles.form}>

            <div className={styles.field}>
              <label htmlFor="propertyPrice">
                Вартість нерухомості
              </label>

              <input
                id="propertyPrice"
                type="number"
                min="500000"
                step="100000"
                value={propertyPrice}
                onChange={(event) =>
                  setPropertyPrice(Number(event.target.value))
                }
              />

              <span>Кč</span>
            </div>

            <div className={styles.field}>
              <label htmlFor="downPayment">
                Перший внесок
              </label>

              <input
                id="downPayment"
                type="number"
                min="20"
                max="80"
                value={downPaymentPercent}
                onChange={(event) =>
                  setDownPaymentPercent(
                    Math.max(
                      20,
                      Math.min(80, Number(event.target.value)),
                    ),
                  )
                }
              />

              <span>%</span>
            </div>

            <div className={styles.field}>
              <label htmlFor="years">
                Термін іпотеки
              </label>

              <input
                id="years"
                type="number"
                min="0"
                max="30"
                value={years}
                onChange={(event) => {
                  const value = event.target.value

                  if (value === '') {
                    setYears('0')
                    return
                  }

                  const cleanValue = value.replace(/^0+(?=\d)/, '')
                  const numberValue = Number(cleanValue)

                  if (numberValue <= 30) {
                    setYears(value)
                  }
                }}
              />

              <span>років</span>
            </div>

          </div>

          <div className={styles.result}>

            <p className={styles.resultLabel}>
              Орієнтовний щомісячний платіж
            </p>

            <div className={styles.payment}>
              {formatCurrency(monthlyPayment)}
            </div>

            <div className={styles.details}>

              <div>
                <span>Вартість нерухомості</span>
                <strong>
                  {formatCurrency(propertyPrice)}
                </strong>
              </div>

              <div>
                <span>Перший внесок</span>
                <strong>
                  {formatCurrency(downPayment)}
                </strong>
              </div>

              <div>
                <span>Сума іпотеки</span>
                <strong>
                  {formatCurrency(loanAmount)}
                </strong>
              </div>

              <div>
                <span>Процентна ставка</span>
                <strong>
                  {interestRate} %
                </strong>
              </div>

            </div>

            <p className={styles.note}>
              Розрахунок є орієнтовним. Фактична процентна
              ставка, умови кредиту та щомісячний платіж
              залежать від конкретного банку та вашої
              фінансової ситуації.
            </p>

          </div>

        </div>

      </div>
    </section>
  )
}

export default Calculator