import { createContext } from 'react'
import { uk } from '../translations/uk'

export type Language = 'uk' | 'cz'

export type LanguageContextType = {
  language: Language
  setLanguage: (language: Language) => void
  translations: typeof uk
}

export const LanguageContext =
  createContext<LanguageContextType | undefined>(undefined)