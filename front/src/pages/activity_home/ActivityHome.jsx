import React, { useEffect, useState } from 'react'
import styles from './ActivityHome.module.scss'
import Header from '../../components/header/Header'
import { BarChart } from '@mui/x-charts'
import { Button } from "@mui/material";
import { Link, useParams } from "react-router-dom";
import axios from 'axios';


const ActivityHome = () => {

  const params = useParams();
  const [attendence, setAttendence] = useState([0, 0, 0, 0, 0, 0, 0]);
  const [best, setBest] = useState([]);
  const [notices, setNotices] = useState([]);

  useEffect(() => {
  
    axios.get(`/gathering/recentattendcount/${params.id}`, {headers:{auth : localStorage.getItem('id')}}).then((res) => {
      console.log(res.data.data.map(x=>x.activity_date.slice(0, 10)));
      setAttendence(res.data.data);
    }).catch(err => {
      console.log("attendence",err);
    });

    axios.get(`/gathering/best_user/${params.id}`, {headers:{auth : localStorage.getItem('id')}}).then((res) => {
      console.log(res.data.data);
      setBest(res.data.data);
    }).catch(err => {
      console.log("best_user", err);
    });

    axios.get(`/gathering/notice/${params.id}`, {headers:{auth : localStorage.getItem('id')}}).then((res) => {
      console.log(res.data.data);
      setNotices(res.data.data);
    }).catch(err => {
      console.log("notice", err);
    });

  }, [])

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <div className={styles.image_container}>
          <img src="/images/main.jpg" />
        </div>
        <div className={styles.container_title}>
          <div className={styles.title}>모임 제목</div>
          <div className={styles.nav}>
            <div>#홈</div>
            <div>#공지사항</div>
            <div>#활동내역</div>
          </div>
        </div>
        <div className={styles.container_content}>
          <div className={styles.container_upper}>
            <div className={styles.box}>
              <div className={styles.title}>명예의 전당</div>
              <table>
                <thead>
                  <tr>
                    <th>등수</th>
                    <th>이름</th>
                    <th>출석</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    best.map((user, idx) => (
                      <tr>
                      <td>{(idx + 1) + "등"}</td>
                      <td>{user.user_id +"번 유저"}</td>
                      <td>{user.attendance_count + "회"}</td>
                    </tr>
                    ))
                  }
                </tbody>
              </table>
            </div>

            <div className={styles.box}>
              <div className={styles.title}>공지사항</div>
              <table>
                <thead>
                  <tr>
                    <th>제목</th>
                    <th>작성자</th>
                    <th>작성일</th>
                  </tr>
                </thead>
                <tbody>
                {
                    notices.map((notice, idx) => (
                      <tr>
                      <td>{notice.content}</td>
                      <td>모임장</td>
                      <td>{notice.created_at.slice(0, 10)}</td>
                    </tr>
                    ))
                  }
                </tbody>
              </table>
            </div>
          </div>
          <div className={styles.container_lower}>
            <BarChart
              width={950}
              margin={{ left: 150 }}
              height={500}
              series={[{ data: attendence.map(x=>x?.user_count), label: "출석", id: "pvId" }]}
              xAxis={[{ data: attendence.map(x=>x.activity_date?.slice(0, 10)), scaleType: "band" }]}
            />
          </div>
        </div>
        <Link to={"/activity/gather/"} className={styles.link}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            style={{ marginTop: "20px" }}
          >
            자세히 알아보기
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default ActivityHome