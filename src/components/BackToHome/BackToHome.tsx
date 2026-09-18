import { Link } from 'react-router-dom'

import styles from './BackToHome.module.css'

const BackToHome = () => {
  return (
    <Link to="/" className={styles.button}>
      ← На головну
    </Link>
  )
}

export default BackToHome