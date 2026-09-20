import { useState } from 'react'

import styles from './Calculator.module.css'
import { useLanguage } from '../../context/useLanguage'

const Calculator = () => {
  const { translations } = useLanguage()

  const [propertyPrice, setPropertyPrice] =
    useState<number>(5000000)

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
            {translations.calculator.subtitle}
          </p>

          <h2 className={styles.title}>
            {translations.calculator.title}
          </h2>

          <p className={styles.description}>
            {translations.calculator.description}
          </p>
        </div>

        <div className={styles.calculatorBox}>

          <div className={styles.form}>

            <div className={styles.field}>
              <label htmlFor="propertyPrice">
                {translations.calculator.propertyPrice}
              </label>

              <input
                id="propertyPrice"
                type="number"
                min="500000"
                step="100000"
                value={propertyPrice}
                onChange={(event) =>
                  setPropertyPrice(
                    Number(event.target.value),
                  )
                }
              />

              <span>{translations.calculator.currency}</span>
            </div>

            <div className={styles.field}>
              <label htmlFor="downPayment">
                {translations.calculator.downPayment}
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
                      Math.min(
                        80,
                        Number(event.target.value),
                      ),
                    ),
                  )
                }
              />

              <span>%</span>
            </div>

            <div className={styles.field}>
              <label htmlFor="years">
                {translations.calculator.term}
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

                  const cleanValue =
                    value.replace(/^0+(?=\d)/, '')

                  const numberValue =
                    Number(cleanValue)

                  if (numberValue <= 30) {
                    setYears(value)
                  }
                }}
              />

              <span>{translations.calculator.years}</span>
            </div>

          </div>

          <div className={styles.result}>

            <p className={styles.resultLabel}>
              {translations.calculator.monthlyPayment}
            </p>

            <div className={styles.payment}>
              {formatCurrency(monthlyPayment)}
            </div>

            <div className={styles.details}>

              <div>
                <span>
                  {translations.calculator.propertyPrice}
                </span>

                <strong>
                  {formatCurrency(propertyPrice)}
                </strong>
              </div>

              <div>
                <span>
                  {translations.calculator.downPaymentLabel}
                </span>

                <strong>
                  {formatCurrency(downPayment)}
                </strong>
              </div>

              <div>
                <span>
                  {translations.calculator.loanAmount}
                </span>

                <strong>
                  {formatCurrency(loanAmount)}
                </strong>
              </div>

              <div>
                <span>
                  {translations.calculator.interestRate}
                </span>

                <strong>
                  {interestRate} %
                </strong>
              </div>

            </div>

            <p className={styles.note}>
              {translations.calculator.note}
            </p>

          </div>

        </div>

      </div>
    </section>
  )
}

export default Calculator



