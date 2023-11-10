import React from "react";
import styles from "../activity_home/ActivityHome.module.scss";
import Header from "../../components/header/Header";
import Avatar from "@mui/material/Avatar";
import Rating from "@mui/material/Rating";
import MemberCard from "../../components/card/MembersCard";
import styled from "styled-components";
import styles2 from "./MemberCheck.module.scss";
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

const stylerating = {
  display: "flex",
  alignItems: "left", // 세로 가운데 정렬
  color: "#ffc0cb",
};

const MemberCheck = () => {
  const [value, setValue] = React.useState(2);
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
            우리 함께 해요.
          </Typography>
          <Stack direction="row" spacing={1}>
            <Chip label="요리"></Chip>
            <Chip label="사진"></Chip>
          </Stack>
          <Typography variant="subtitle1" gutterBottom align="left">
            현재 모임원들의 만족도는?
          </Typography>
          <div style={stylerating}>
            <Rating
              name="simple-controlled"
              value={value}
              justifyContent="left"
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
            />
          </div>
          <div style={{ margin: "20px" }}></div>
          <div className={styles2.container_card}>
            <MemberCard />
            <MemberCard />
            <MemberCard />
            <MemberCard />
            <MemberCard />
            <MemberCard />
          </div>
          <div style={{ margin: "60px" }}></div>
        </div>
      </div>
    </div>
  );
};

export default MemberCheck;
