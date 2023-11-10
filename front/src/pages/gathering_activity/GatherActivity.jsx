import React from 'react'
import styles from '../activity_home/ActivityHome.module.scss'
import Header from "../../components/header/Header";
import Avatar from '@mui/material/Avatar';
import styled from "styled-components";
import {
  Container,
  Stack,
  Typography,
  TextField,
  Button,
  Grid,
  Paper,
  Box,
  Chip,
} from "@mui/material";

const StyledImage = styled.img`
  width: 80%;
  height: auto;
  border-radius: 8px;
`;

const GatherActivity = () => {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <div className={styles.image_container}>
          <img src="/images/main.jpg" />
        </div>
        <div className={styles.container_title}>
          <Avatar
            alt="Remy Sharp"
            src="/images/grouphead.jpg"
            sx={{ width: 100, height: 100 }}
          />
          <div className={styles.title}>모임 이름</div>
        </div>
        <div className={styles.container_content}>
          <div style={{ margin: "20px" }}></div>
          <Typography variant="h4" gutterBottom align="center">
            모임 소개글 제목을 작성해주세요
          </Typography>
          <Typography variant="subtitle1" gutterBottom align="left">
            카테고리
          </Typography>
          <Stack direction="row" spacing={1}>
            <Chip label="요리"></Chip>
            <Chip label="사진"></Chip>
          </Stack>
          <div style={{ margin: "60px" }}></div>
          <div className={styles.container_upper}>
            <StyledImage src="/images/cook.jpg" />
          </div>
          <div style={{ margin: "60px" }}></div>
          <div className={styles.container_lower}>
            <div style={{ margin: "40px" }}></div>
            <Typography variant="subtitle1" gutterBottom align="left">
              우리동아리 좋아요 우리 모임 최고에요 많이많이 와주세용 이런 소개글
              길게길게 작성
            </Typography>
          </div>
          <Stack direction="row" spacing={2} justifyContent="center">
            <Button
              type="submit"
              variant="contained"
              color="primary"
              style={{ marginTop: "20px" }}
            >
              가입하기
            </Button>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              style={{ marginTop: "20px" }}
            >
              뒤로가기
            </Button>
          </Stack>
        </div>
      </div>
    </div>
  );
};

export default GatherActivity;