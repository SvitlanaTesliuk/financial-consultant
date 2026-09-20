import { Link } from 'react-router-dom'

import styles from './BackToHome.module.css'
import { useLanguage } from '../../context/useLanguage'

const BackToHome = () => {
  const { translations } = useLanguage()

  return (
    <Link to="/" className={styles.button}>
      ← {translations.footer.home}
    </Link>
  )
}

export default BackToHome