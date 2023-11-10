import React from 'react'
import styles from './Header.module.scss'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className={styles.header}>
        <div className={styles.container}>
          <Link to={'/'} className={styles.link}>역삼모역</Link>
            <div className={styles.nav}>
                <p>소모임</p>
                <p>챌린지</p>
            </div>
        </div>
    </div>
  )
}

export default Header