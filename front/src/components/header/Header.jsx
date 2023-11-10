import React from 'react'
import styles from './Header.module.scss'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className={styles.header}>
        <div className={styles.container}>
          <Link to={'/'} className={styles.link}>역삼모역</Link>
            <div className={styles.nav}>
                <p>로그인</p>
                <p>회원가입</p>
            </div>
        </div>
    </div>
  )
}

export default Header