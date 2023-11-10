import React from 'react'
import styles from './Header.module.scss'

const Header = () => {
  return (
    <div className={styles.header}>
        <div className={styles.container}>
            <p>역삼모역</p>
            <div className={styles.nav}>
                <p>소모임</p>
                <p>챌린지</p>
            </div>
        </div>
    </div>
  )
}

export default Header