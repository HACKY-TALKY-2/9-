import React from 'react'
import styles from './Main.module.scss';
import Header from '../../components/header/Header';
import Card from '../../components/card/Card';

const Main = () => {
  return (
    <div>
      <Header/>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.image_container}>
            <img src='/images/main.jpg'/>
          </div>
          <div className={styles.content}>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main