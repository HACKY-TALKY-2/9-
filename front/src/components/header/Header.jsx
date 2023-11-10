import React, { useState } from 'react'
import styles from './Header.module.scss'
import { Link } from 'react-router-dom'
import Button from "@mui/material/Button";

const Header = () => {

  const [isLogin, setIsLogin] = useState(localStorage.getItem('id') !== '');

  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <Link to={"/"} className={styles.link}>
          역삼모역
        </Link>
        {!isLogin ? <div className={styles.nav}>
          <p>소모임</p>
          <p>챌린지</p>
          <Link to={"/login"} className={styles.link}>
            <Button variant="outlined">로그인</Button>
          </Link>
          <Link to={"/signup"} className={styles.link}>
            <Button variant="outlined">회원가입</Button>
          </Link>
        </div> : 
        <div className={styles.nav}>
        <p>소모임</p>
        <p>챌린지</p>
          <Button variant="outlined" onClick={()=>{
            localStorage.setItem('id', '');
            setIsLogin(false);
          }}>로그아웃</Button>
      </div>
        }
        
      </div>
    </div>
  );
};

export default Header;
