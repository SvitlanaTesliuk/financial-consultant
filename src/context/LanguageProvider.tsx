import { useMemo, useState } from 'react'
import { uk } from '../translations/uk'
import { cz } from '../translations/cz'
import {
  LanguageContext,
  type Language,
} from './LanguageContext'

export const LanguageProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [language, setLanguage] = useState<Language>('uk')

  const translations = language === 'uk' ? uk : cz

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      translations,
    }),
    [language, translations],
  )

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}