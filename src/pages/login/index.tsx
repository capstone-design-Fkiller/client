import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import * as Styled from './style';

import Button from '@/components/common/Button';
import PageTemplate from '@/components/common/PageTamplate';
import useInput from '@/hooks/useInput';

// 로그인 타입 설정
const USER_TYPE = {
  STUDENT: 'student',
  ADMIN: 'admin',
};

type LoginType = (typeof USER_TYPE)[keyof typeof USER_TYPE];

function LoginPage() {
  const navigate = useNavigate();
  const [loginType, setLoginType] = useState<LoginType>(USER_TYPE.STUDENT);
  const { value: id, handleValue: handleId } = useInput<string>('');
  const { value: pw, handleValue: handlePw } = useInput<string>('');

  // 로그인 타입 변경 핸들러
  const handleLoginType = (type: LoginType) => {
    setLoginType(type);
  };

  // ID&PW 입력창 변경 핸들러

  const handleLogin = () => {
    if (!id || !pw) return alert('아이디와 비밀번호를 다시 입력해주세요.');

    // TODO 로그인 요청 함수가 필요
    navigate(`/`);
  };

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
