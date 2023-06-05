import { useState } from 'react';

import * as Styled from './style';

import Login from '@/components/auth/login';
import SignUp from '@/components/auth/signup';
import PageTemplate from '@/components/common/PageTamplate';
import { Separator } from '@/components/common/Separator';

function LoginPage() {
  const [mode, setMode] = useState(false);

  return (
    <PageTemplate.WithoutOption>
      <Styled.Root>
        <Styled.Title>HUFS LOCKER</Styled.Title>
        {mode ? <SignUp setMode={setMode} /> : <Login />}

        <Separator css={{ marginTop: '30px' }} />

        <Styled.Toggle onClick={() => setMode(!mode)}>
          {mode ? '로그인' : '회원가입'}하러 가기
        </Styled.Toggle>
      </Styled.Root>
    </PageTemplate.WithoutOption>
  );
}

export default LoginPage;
