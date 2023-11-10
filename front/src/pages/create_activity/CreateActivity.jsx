import React from 'react'
import Header from '../../components/header/Header'
import styles from './CreateActivity.module.scss'
import { Button, InputLabel, MenuItem, Select, TextField } from '@mui/material'

const CreateActivity = () => {

  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

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
            />
            <TextField
              required
              id="outlined-required"
              label="소개글"
              defaultValue=""
              fullWidth
            />
            <div className={styles.container_row}>
              <div className={styles.label}>구분</div>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                label="Age"
                onChange={handleChange}
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
                value={age}
                label="Age"
                onChange={handleChange}
                fullWidth
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </div>
            <div className={styles.container_row}>
              <div className={styles.label}>인원수</div>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                label="Age"
                onChange={handleChange}
                fullWidth
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
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