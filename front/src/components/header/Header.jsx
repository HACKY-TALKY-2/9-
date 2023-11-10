import React from 'react'
import styles from './Header.module.scss'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className={styles.header}>
        <div className={styles.container}>
          <Link to={'/'} className={styles.link}>역삼모역</Link>
            <div className={styles.nav}>
                <Link to={'/login'} className={styles.link_button}>로그인</Link>
                <Link to={'/signup'} className={styles.link_button}>회원가입</Link>
            </div>
        </div>
    </div>
  )
}

export default Header