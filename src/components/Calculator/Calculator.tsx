
import { useState } from 'react'

import styles from './Calculator.module.css'
import { useLanguage } from '../../context/useLanguage'

const Calculator = () => {
  const { translations } = useLanguage()

  const [propertyPrice, setPropertyPrice] =
    useState<string>('5000000')

  const [downPaymentPercent, setDownPaymentPercent] =
    useState<string>('20')

  const [years, setYears] = useState<string>('30')

  const interestRate = 5.5

  const propertyPriceNumber =
    Number(propertyPrice) || 0

  const downPaymentPercentNumber =
    Number(downPaymentPercent) || 0

  const yearsNumber = Number(years) || 0

  const downPayment =
    propertyPriceNumber *
    (downPaymentPercentNumber / 100)

  const loanAmount =
    propertyPriceNumber - downPayment

  const monthlyRate =
    interestRate / 100 / 12

  const numberOfPayments = yearsNumber * 12

  const monthlyPayment =
    numberOfPayments > 0 && loanAmount > 0
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

  const removeLeadingZeros = (value: string) => {
    return value.replace(/^0+(?=\d)/, '')
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
                type="text"
                inputMode="numeric"
                value={propertyPrice}
                onChange={(event) => {
                  const value = event.target.value

                  if (!/^\d*$/.test(value)) return

                  setPropertyPrice(
                    removeLeadingZeros(value),
                  )
                }}
              />

              <span>{translations.calculator.currency}</span>
            </div>

            <div className={styles.field}>
              <label htmlFor="downPayment">
                {translations.calculator.downPayment}
              </label>

              <input
                id="downPayment"
                type="text"
                inputMode="numeric"
                value={downPaymentPercent}
                onChange={(event) => {
                  const value = event.target.value

                  if (!/^\d*$/.test(value)) return

                  const cleanValue =
                    removeLeadingZeros(value)

                  if (cleanValue === '') {
                    setDownPaymentPercent('')
                    return
                  }

                  if (Number(cleanValue) <= 80) {
                    setDownPaymentPercent(cleanValue)
                  }
                }}
                onBlur={() => {
                  if (downPaymentPercent === '') {
                    setDownPaymentPercent('0')
                  }
                }}
              />

              <span>%</span>
            </div>

            <div className={styles.field}>
              <label htmlFor="years">
                {translations.calculator.term}
              </label>

              <input
                id="years"
                type="text"
                inputMode="numeric"
                value={years}
                onChange={(event) => {
                  const value = event.target.value

                  if (!/^\d*$/.test(value)) return

                  const cleanValue =
                    removeLeadingZeros(value)

                  if (
                    cleanValue === '' ||
                    Number(cleanValue) <= 30
                  ) {
                    setYears(cleanValue)
                  }
                }}
                onBlur={() => {
                  if (years === '') {
                    setYears('0')
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
                  {formatCurrency(propertyPriceNumber)}
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

                <strong>{interestRate} %</strong>
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
