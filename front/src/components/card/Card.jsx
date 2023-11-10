import React from 'react'
import styles from './Card.module.scss'

const Card = () => {
  return (
    <div className={styles.card}>
        <div className={styles.img_container}>
            <img src='/images/img_1.png'/>
        </div>
        <div className={styles.container_info}>
            <div className={styles.title}>모임 제목</div>
            <div className={styles.detail}>모임 설명입니다.모임 설명입니다.모임 설명입니다.</div>
        </div>
    </div>
  )
}

export default Card