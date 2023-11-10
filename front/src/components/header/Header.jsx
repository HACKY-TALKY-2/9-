import React, { useState } from 'react'
import styles from './Header.module.scss'
import { Link } from 'react-router-dom'
import useLogin from '../../hooks/useLogin'

const Header = () => {

  const [isLogin, setIsLogin] = useState(localStorage.getItem('id') !== '');

  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <Link to={'/'} className={styles.link}>역삼모역</Link>
        {
          isLogin ? <div className={styles.nav}>
            <p onClick={()=>{
              localStorage.setItem('id', '');
              setIsLogin(false);
            }}>로그아웃</p>
          </div> :
            <div className={styles.nav}>
              <Link to={'/login'} className={styles.link_button}>로그인</Link>
              <Link to={'/signup'} className={styles.link_button}>회원가입</Link>
            </div>
        }

      </div>
    </div>
  )
}

export default Header