import axios from 'axios';
import { useEffect, useState } from 'react';
import { NavigateOptions, useNavigate } from 'react-router-dom';

import * as Styled from './style';

import Button from '@/components/common/Button';
import PageTemplate from '@/components/common/PageTamplate';
import useInput from '@/hooks/useInput';
import { PATH } from '@/utils/path';


const BASE_URL = 'http://127.0.0.1:8000';

const api = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json'
  }
});

api.interceptors.response.use(
  response => response,
  error => Promise.reject(error)
);

const USER_TYPE = {
  STUDENT: 'student',
  ADMIN: 'admin',
};
type LoginType = (typeof USER_TYPE)[keyof typeof USER_TYPE];

interface CustomNavigateOptions extends NavigateOptions {
  user?: any;
}

function LoginPage() {
  const navigate = useNavigate();
  const [loginType, setLoginType] = useState<LoginType>(USER_TYPE.STUDENT);
  const [user, setUser] = useState({});
  const { value: id, handleValue: handleId } = useInput<string>('');
  const { value: pw, handleValue: handlePw } = useInput<string>('');

  // 로그인 타입 변경 핸들러
  const handleLoginType = (type: LoginType) => {
    setLoginType(type);
  };

  const handleLogin = async () => {
    if (!id || !pw) return alert('아이디와 비밀번호를 다시 입력해주세요.');

    try {
      const is_usermode = loginType === USER_TYPE.STUDENT;
      const response = await api.post('/login/', {
        id: id,
        password: pw,
        is_usermode: is_usermode ? false : true,
      });
      if (response?.data?.user) {
        setUser(response.data.user);
        navigate(PATH.MAIN, { state: response.data.user  } as CustomNavigateOptions); //replace: true
      } else {
        alert('로그인에 실패하였습니다. 다시 시도해주세요.');
      }
    } catch (error) {
      console.error(error);
      alert('로그인에 실패하였습니다. 다시 시도해주세요.');
    }
  };

  useEffect(() => {
    console.log(user);
  }, [user]);

  return (
    <PageTemplate>
      <Styled.Root>
        <Styled.Title>HUFS LOCKER</Styled.Title>
        <Styled.FormContainer>
          <Styled.ButtonWrapper>
            <Button
              variant={loginType === USER_TYPE.STUDENT ? 'contained' : 'outlined'}
              onClick={() => handleLoginType(USER_TYPE.STUDENT)}
            >
              학생 로그인
            </Button>
            <Button
              variant={loginType === USER_TYPE.ADMIN ? 'contained' : 'outlined'}
              onClick={() => handleLoginType(USER_TYPE.ADMIN)}
            >
              관리자 로그인
            </Button>
          </Styled.ButtonWrapper>
          <div>
            <Styled.IdpwInput
              type='text'
              placeholder='아이디를 입력해주세요.'
              value={id}
              name='username'
              autoFocus
              onChange={handleId}
            />
            <Styled.IdpwInput
              type='password'
              placeholder='비밀번호를 입력해주세요.'
              value={pw}
              name='password'
              onChange={handlePw}
            />
          </div>
          <Button variant='outlined' onClick={handleLogin}>
            LOGIN
          </Button>
        </Styled.FormContainer>
      </Styled.Root>
    </PageTemplate>
  );
}

export default LoginPage;
