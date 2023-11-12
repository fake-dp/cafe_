import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router";
function Login(props) {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/main");
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    navigate("/main");
  };

  return (
    <Container>
      <FormContainer>
        <Form onSubmit={handleLogin}>
          <TitleText>로그인</TitleText>
          <Input type="text" name="username" placeholder="아이디" required />
          <Input
            type="password"
            name="password"
            placeholder="비밀번호"
            required
          />
          <SubmitButton onClick={handleLogin} value="로그인" />
        </Form>
        <SignUpContainer>
          <TitleText>회원가입</TitleText>
          <SignUpText>퓨리카페에 오신 것을 환영합니다.</SignUpText>
          <SignUpButton onClick={handleSignUp}>회원가입</SignUpButton>
        </SignUpContainer>
      </FormContainer>
    </Container>
  );
}

export default Login;

const Container = styled.div`
  font-family: "Nanum Gothic", sans-serif;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f4f4f4;
`;

const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
`;

const Form = styled.form`
  padding: 30px 20px;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  height: 300px;
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const TitleText = styled.h2`
  text-align: center;
  margin-bottom: 20px;
  font-size: 20px;
  font-weight: 600;
  color: #5cb85c;
`;

const Input = styled.input`
  box-sizing: border-box;
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

const SubmitButton = styled.input`
  width: 100%;
  padding: 10px;
  border: none;
  background-color: #5cb85c;
  color: white;
  border-radius: 5px;
  cursor: pointer;
  box-sizing: border-box;
  text-align: center;
  &:hover {
    background-color: #4cae4c;
  }
`;

const SignUpContainer = styled.div`
  padding: 30px 20px;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 300px;
  width: 300px;
`;

const SignUpText = styled.p`
  text-align: center;
  margin-bottom: 20px;
`;

const SignUpButton = styled.button`
  width: 100%;
  padding: 10px;
  border: none;
  background-color: #5cb85c;
  color: white;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #4cae4c;
  }
`;
