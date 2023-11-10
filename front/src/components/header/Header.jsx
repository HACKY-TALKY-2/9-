import React from "react";
import styles from "./Header.module.scss";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
//import { PersonOutline, AssignmentInd } from "@mui/icons-material";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <Link to={"/"} className={styles.link}>
          역삼모역
        </Link>
        <div className={styles.nav}>
          <p>소모임</p>
          <p>챌린지</p>
          <Link to={"/login"} className={styles.link}>
            <Button variant="outlined">로그인</Button>
          </Link>
          <Link to={"/signup"} className={styles.link}>
            <Button variant="outlined">회원가입</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
