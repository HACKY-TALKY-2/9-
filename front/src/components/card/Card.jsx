import React from 'react'
import styles from './Card.module.scss'
import { useNavigate } from 'react-router-dom'

const Card = (props) => {

  const navigate = useNavigate();

  return (
    <div className={styles.card} onClick={()=>{
      navigate(`/activity/home/${props.id}`);
      window.scrollTo(0, 0);
    }}>
        <div className={styles.img_container}>
            <img src='/images/img_1.png'/>
        </div>
        <div className={styles.container_info}>
            <div className={styles.title}>{props.title}</div>
            <div className={styles.detail}>{props.introduce}</div>
        </div>
    </div>
  )
}

export default Card