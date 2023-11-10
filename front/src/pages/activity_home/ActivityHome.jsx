import React from 'react'
import styles from './ActivityHome.module.scss'
import Header from '../../components/header/Header'
import { BarChart } from '@mui/x-charts'

const attendence = [40, 30, 20, 27, 18, 23, 34];
const xLabels = [
  '2023/1/1',
  '2023/1/2',
  '2023/1/3',
  '2023/1/4',
  '2023/1/5',
  '2023/1/6',
  '2023/1/7',
];

const ActivityHome = () => {
    return (
        <div>
            <Header />
            <div className={styles.wrapper}>
                <div className={styles.image_container}>
                    <img src='/images/main.jpg' />
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
                                    <tr>
                                        <td>1등</td>        
                                        <td>홍길동</td>    
                                        <td>128회</td>    
                                    </tr>
                                    <tr>
                                        <td>2등</td>        
                                        <td>홍길동</td>    
                                        <td>128회</td>    
                                    </tr>
                                    <tr>
                                        <td>3등</td>        
                                        <td>홍길동</td>    
                                        <td>128회</td>    
                                    </tr>
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
                                    <tr>
                                        <td>2023년 10월 모임</td>        
                                        <td>홍길동</td>    
                                        <td>2023-1-1</td>    
                                    </tr>
                                    <tr>
                                        <td>2023년 10월 모임</td>        
                                        <td>홍길동</td>    
                                        <td>2023-1-1</td>    
                                    </tr>
                                    <tr>
                                        <td>2023년 10월 모임</td>        
                                        <td>홍길동</td>    
                                        <td>2023-1-1</td>    
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className={styles.container_lower}>
                        <BarChart width={950} margin={{left:150}}
      height={500}
      series={[
        { data: attendence, label: '출석', id: 'pvId' },
      ]}
      xAxis={[{ data: xLabels, scaleType: 'band' }]}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ActivityHome