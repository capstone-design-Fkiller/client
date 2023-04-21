import { useState } from "react";
import { useNavigate } from "react-router-dom";

import * as Styled from "./style";

import Button from "@/components/common/Button";
import PageTemplate from "@/components/common/PageTamplate";

// 로그인 타입 설정
const enum LoginType { 
  Student = "student",
  Admin = "admin",
}

function Login() {
  const navigate = useNavigate();
  const [loginType, setLoginType] = useState<LoginType | null>(null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // 로그인 타입 변경 핸들러
  const handleLoginTypeChange = (type: LoginType) => setLoginType(type);

  // 아이디 입력창 변경 핸들러
  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setUsername(event.target.value);

  // 비밀번호 입력창 변경 핸들러
  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setPassword(event.target.value);

  // 로그인 핸들러
  const handleLogin = () => {
    if (!username.trim() || !password.trim()) {
      alert("아이디와 비밀번호를 다시 입력해주세요.");
      return;
    }

    navigate(`/${loginType}`);   // 로그인 후 메인 페이지 이동
    setUsername("");  // 아이디 입력창 초기화
    setPassword("");  // 비밀번호 입력창 초기화
  };

  return (
    <PageTemplate>
      <Styled.LoginContainer>
        <Styled.Title>LOGIN</Styled.Title>
        <Styled.FormContainer>
          <Styled.TypeContainer>
            <Styled.TypeButton
              selected={loginType === LoginType.Student}
              onClick={() => handleLoginTypeChange(LoginType.Student)}
            >
              학생 로그인
            </Styled.TypeButton>
            <Styled.TypeButton
              selected={loginType === LoginType.Admin}
              onClick={() => handleLoginTypeChange(LoginType.Admin)}
            >
              관리자 로그인
            </Styled.TypeButton>
          </Styled.TypeContainer>
          <div>
            <Styled.Input
              type="text"
              placeholder="아이디"
              value={username}
              onChange={handleUsernameChange}
            />
            <Styled.Input
              type="password"
              placeholder="비밀번호"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
        </Styled.FormContainer>

        <Button
          variant="outlined"
          onClick={handleLogin}
          style={{ width: "58%" }}
        >
          LOGIN
        </Button>
      </Styled.LoginContainer>
    </PageTemplate>
  );
}

export default Login;
