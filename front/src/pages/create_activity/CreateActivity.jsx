import React from 'react'
import Header from '../../components/header/Header'
import styles from './CreateActivity.module.scss'

const CreateActivity = () => {
  return (
    <div>
      <Header/>
      <div className={styles.wrapper}>
        <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.title}>신규 생성</div>
          <div className={styles.detail}>사람들과의 만남을 만들어보세요.</div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default CreateActivity