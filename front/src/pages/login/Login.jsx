import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "../../components/header/Header";
import axios from "axios";
import { useNavigate } from "react-router-dom";
//import axios from "axios";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  padding: 10px;
  background: #ebf8ff;
  margin: 20px 0;
  border-radius: 8px;
  display: flex;
  flex-direction: column; /* 내부 컴포넌트를 수직으로 정렬 */
  justify-content: center;
  align-items: center;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const LogInButton = styled.button`
  background: #9fd5ee;
  border: none;
  border-radius: 5px;
`;

const SignUpButton = styled.button`
  background: #9fd5ee;
  border: none;
  border-radius: 5px;
`;
const IdArea = styled.textarea`
  width: 280px;
  height: 25px;
  padding: 10px;
  background: #ffc0cb;
  border: none;
  border-radius: 10px;
  margin-top: 10px;
  margin: center;
`;
const PasswordArea = styled.textarea`
  width: 280px;
  height: 25px;
  padding: 10px;
  background: #ffc0cb;
  border: none;
  border-radius: 10px;
  margin-top: 10px;
  margin: center;
`;

function Login() {
  const [idtext, setIdText] = useState("");
  const [passwordtext, setPasswordText] = useState("");
  const [isSubmit, setIsSubmit] = useState(false);

  const navigate = useNavigate();

  const onLoginButtonClick = () => {
    if (idtext === '' || passwordtext === ''){
      alert('내용을 정확하게 입력해주세요.');
      return;
    }

    const body = {
      email : idtext,
      password : passwordtext
    }

    if (isSubmit){
      return;
    }

    setIsSubmit(true);
    axios.post('/user/login', body).then((res) => {
      if (res.data.success){
        //login.login(res.data.id);
        localStorage.setItem('id', res.data.id);
          navigate('/');
      }
      else{
        alert(res.data.message);
        setIsSubmit(false);
      }
    }).catch((err) => {
      console.log(err);
      if (err.response.status == 500){
        alert("오류가 발생했습니다.");
      }
      else{
        alert(err.response.data.message);
      }
      setIsSubmit(false);
    })
  }

  return (
    <div>
      <Header/>
      <Wrapper>
      <IdArea
        value={idtext}
        onChange={(e) => setIdText(e.target.value)}
        placeholder="이메일을 입력하세요:"
      ></IdArea>
      <PasswordArea
        value={passwordtext}
        onChange={(e) => setPasswordText(e.target.value)}
        placeholder="패스워드를 입력하세요:"
      ></PasswordArea>
      <ButtonContainer>
        <LogInButton onClick={onLoginButtonClick}>LogIn</LogInButton>
        {/* <SignUpButton>SignUp</SignUpButton> */}
      </ButtonContainer>
    </Wrapper>
    </div>

  );
}

export default Login;
