import ButtonGroup from "@mui/material/ButtonGroup";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import * as Styled from "./style";

import Button from "@/components/common/Button";
import PageTemplate from "@/components/common/PageTamplate";

// 로그인 타입 설정
const USER_TYPE = {
  STUDENT: "student",
  ADMIN: "admin",
};

type LoginType = typeof USER_TYPE[keyof typeof USER_TYPE];

function Login() {
  const navigate = useNavigate();
  const [loginType, setLoginType] = useState<LoginType>(USER_TYPE.STUDENT);
  const [credentials, setCredentials] = useState<{ username: string; password: string }>({
    username: "",
    password: "",
  });
 
  // 로그인 타입 변경 핸들러
  const handleLoginTypeChange = (type: LoginType) => {
    setLoginType(type);
  };

  // ID&PW 입력창 변경 핸들러
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setCredentials((prevCredentials) => ({ ...prevCredentials, [name]: value }));
  };

  const handleLogin = () => {
    if (!credentials.username.trim() || !credentials.password.trim()) {
      alert("아이디와 비밀번호를 다시 입력해주세요.");
      return;
    }
    console.log(`[${loginType} 로그인 성공]`);
    navigate(`/`); // 로그인 후 메인 페이지 이동
    setCredentials({ username: "", password: "" }); // 입력창 초기화
  };

  return (
    <PageTemplate>
      <Styled.Root>
        <Styled.Title>LOGIN</Styled.Title>
        <Styled.FormContainer>
          <ButtonGroup css={Styled.typeContainerStyles}>
            <Button
              variant={loginType === USER_TYPE.STUDENT ? "contained" : "outlined"}
              className={loginType === USER_TYPE.STUDENT ? "selected" : ""}
              onClick={() => handleLoginTypeChange(USER_TYPE.STUDENT)}
            >
              학생 로그인
            </Button>
            <Button
              variant={loginType === USER_TYPE.ADMIN ? "contained" : "outlined"}
              className={loginType === USER_TYPE.ADMIN ? "selected" : ""}
              onClick={() => handleLoginTypeChange(USER_TYPE.ADMIN)}
            >
              관리자 로그인
            </Button>
          </ButtonGroup>
          <div>
            <Styled.Input
              type="text"
              placeholder="아이디"
              value={credentials.username}
              name="username"
              onChange={handleInputChange}
            />
            <Styled.Input
              type="password"
              placeholder="비밀번호"
              value={credentials.password}
              name="password"
              onChange={handleInputChange}
            />
          </div>
          <Button
          css = {Styled.loginButtonStyles}
          variant="outlined"
          onClick={handleLogin}
          >
          LOGIN
          </Button>
        </Styled.FormContainer>
      </Styled.Root>
    </PageTemplate>
  );
}

export default Login;
