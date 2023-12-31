import React, { useEffect, useState } from 'react'
import styles from './Main.module.scss';
import Header from '../../components/header/Header';
import Card from '../../components/card/Card';
import Button from '../../components/ui/button/Button';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Main = () => {

  const navigate = useNavigate();

  const [hobbies, setHobbies] = useState([]);
  const [challenges, setChallenges] = useState([]);

  useEffect(()=>{
    axios.get('/gathering/hobby').then((res) => {
      console.log(res.data.data);
      setHobbies(res.data.data);
    }).catch(err=>{
      console.log(err);
    });

    axios.get('/gathering/challenge').then((res) => {
      console.log(res.data.data);
      setChallenges(res.data.data);
    }).catch(err=>{
      console.log(err);
    });
  }, []);

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
      <div className={styles.image_container}>
            <img src='/images/main.jpg' />
          </div>
        <div className={styles.container}>
          <div className={styles.button}>
          <Button text='생성하기+' onClick={()=>{
            if (localStorage.getItem('id') == ''){
              alert("로그인이 필요합니다.");
              return;
            }
            navigate("/activity/create")}}/>
          </div>
          <div className={styles.card_container}>
            <div className={styles.card_container_header}>
              <div className={styles.title}>소모임</div>
              <div className={styles.detail}>소모임을 확인할 수 있습니다.</div>
            </div>
            <div className={styles.content}>
              {
                hobbies.map((item) => (
                  <Card id = {item.id} title = {item.title} introduce = {item.introduction}/>
                ))
              }
            </div>
          </div>
          <div className={styles.button}>
          {/* <Button text='더보기+' /> */}
          </div>  
          <div className={styles.card_container}>
            <div className={styles.card_container_header}>
              <div className={styles.title}>챌린지</div>
              <div className={styles.detail}>매일매일 챌린지에 도전하세요.</div>
            </div>
            <div className={styles.content}>
            {
                challenges.map((item) => (
                  <Card id = {item.id} title = {item.title} introduce = {item.introduction}/>
                ))
              }
            </div>
          </div>
          <div className={styles.button}>
          </div>  
        </div>
        
      </div>
    </div>
  )
}

export default Main