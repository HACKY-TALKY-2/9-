import React from "react";
import styles from "./Card.module.scss";
import { useNavigate } from "react-router-dom";

const MemberCard = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.card}>
      <div className={styles.img_container}>
        <img src="/images/main.jpg" />
      </div>
      <div className={styles.container_info}>
        <div className={styles.title}>모임원 이름</div>
        <div className={styles.detail}>
          우리 함께 즐겁게 코딩해요!
        </div>
        <div className={styles.detail}>재직회사: (주)해키토키</div>
      </div>
    </div>
  );
};

export default MemberCard;
