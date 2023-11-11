import styled from "styled-components";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/home");
  };

  return (
    <Container>
      <GuidText>
        로그인이랑 회원가입 페이지 이부분은 로그인 클릭하면 바로 홈으로 갈 수
        있게 설정할게요 회원가입은 그냥 뷰만하구요
      </GuidText>
      <Button onClick={goHome}>로그인</Button>
    </Container>
  );
}

export default Login;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Button = styled.button`
  background-color: #000;
  color: #fff;
  border-radius: 5px;
  padding: 10px 15px;
  font-size: 16px;
  font-weight: 600;
  border: none;
  cursor: pointer;
  margin: 10px;
`;

const GuidText = styled.p`
  font-size: 16px;
  font-weight: 600;
  margin: 10px;
`;
