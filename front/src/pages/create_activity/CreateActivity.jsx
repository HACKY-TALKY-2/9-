import React, { useState } from 'react'
import Header from '../../components/header/Header'
import styles from './CreateActivity.module.scss'
import { Button, InputLabel, MenuItem, Select, TextField } from '@mui/material'

const CreateActivity = () => {

  const [title, setTitle] = useState('');
  const [detail, setDetail] = useState('');
  const [dis, setDis] = useState('');
  const [cate, setCate] = useState('');
  const [count, setCount] = useState('');

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.header}>
            <div className={styles.title}>신규 생성</div>
            <div className={styles.detail}>사람들과의 만남을 만들어보세요.</div>
          </div>
          <div className={styles.container_input}>
            <TextField
              required
              id="outlined-required"
              label="모임 이름"
              defaultValue=""
              fullWidth
              onChange={(e) => {
                setTitle(e.target.value)
              }}
            />
            <TextField
              required
              id="outlined-required"
              label="소개글"
              defaultValue=""
              fullWidth
              onChange={(e) => {
                setDetail(e.target.value)
              }}
            />
            <div className={styles.container_row}>
              <div className={styles.label}>구분</div>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={dis}
                label="Age"
                onChange={(e) => {
                  setDis(e.target.value)
                }}
                fullWidth
              >
                <MenuItem value={10}>소모임</MenuItem>
                <MenuItem value={20}>챌린지</MenuItem>
              </Select>
            </div>
            <div className={styles.container_row}>
              <div className={styles.label}>카테고리</div>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={cate}
                label="Age"
                onChange={(e) => {
                  setCate(e.target.value)
                }}
                fullWidth
              >
                <MenuItem value={1}>독서</MenuItem>
                <MenuItem value={2}>운동</MenuItem>
                <MenuItem value={3}>공부</MenuItem>
                <MenuItem value={4}>취미</MenuItem>
              </Select>
            </div>
            <div className={styles.container_row}>
              <div className={styles.label}>인원수</div>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={count}
                label="Age"
                onChange={(e) => {
                  setCount(e.target.value)
                }}
                fullWidth
              >
                <MenuItem value={1}>1명</MenuItem>
                <MenuItem value={2}>2명</MenuItem>
                <MenuItem value={3}>3명</MenuItem>
                <MenuItem value={4}>4명</MenuItem>
                <MenuItem value={5}>5명</MenuItem>
                <MenuItem value={6}>6명</MenuItem>
                <MenuItem value={7}>7명</MenuItem>
                <MenuItem value={8}>8명</MenuItem>
                <MenuItem value={9}>9명</MenuItem>
                <MenuItem value={10}>10명</MenuItem>
              </Select>
            </div>
            <Button variant="contained" size='large' fullWidth style={{marginTop:"30px"}}>생성하기</Button>
          </div>

        </div>

      </div>
    </div>
  )
}

export default CreateActivity