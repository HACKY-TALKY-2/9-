import React, { useState } from "react";
import {
  Container,
  Stack,
  Typography,
  TextField,
  Button,
  Grid,
  Paper,
  Chip,
} from "@mui/material";
import Header from "../../components/header/Header";

function Signup() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // 여기에서 회원가입 로직을 처리할 수 있습니다.
  };
  const [selectedChips, setSelectedChips] = React.useState([]);

  const handleChipClick = (index) => {
    if (selectedChips.includes(index)) {
      setSelectedChips(selectedChips.filter((i) => i !== index));
    } else {
      setSelectedChips([...selectedChips, index]);
    }
  };

  const chipData = [
    { label: "요리" },
    { label: "독서" },
    { label: "운동" },
    { label: "금융" },
    { label: "음악" },
    { label: "사진" },
    { label: "종교" },
    { label: "기타" },
  ];

  return (
    <div>
    <Header/>
    <Container maxWidth="sm">
      <Paper elevation={3} style={{ padding: "20px", marginTop: "20px" }}>
        <Typography variant="h4" gutterBottom>
          회원가입
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="이름"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="성"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="회사명"
                name="offincename"
                type="officename"
                value={formData.officename}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="직무"
                name="department"
                type="department"
                value={formData.department}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="subtitle1" gutterBottom align="left">
                관심분야
              </Typography>
              <Stack direction="row" spacing={1}>
                {chipData.map((data, index) => (
                  <Chip
                    key={index}
                    label={data.label}
                    color={
                      selectedChips.includes(index) ? "primary" : "default"
                    }
                    onClick={() => handleChipClick(index)}
                  />
                ))}
              </Stack>
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="이메일"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="비밀번호"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            style={{ marginTop: "20px" }}
          >
            가입하기
          </Button>
        </form>
      </Paper>
    </Container>
    </div>

  );
}

export default Signup;
