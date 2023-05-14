import { useState, KeyboardEvent } from 'react';
import { useNavigate } from 'react-router-dom';

import * as Styled from './style';

import Button from '@/components/common/Button';
import PageTemplate from '@/components/common/PageTamplate';
import useInput from '@/hooks/useInput';
import { useLogin } from '@/query/user';
import { PATH } from '@/utils/path';

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
  const { mutate } = useLogin();

  // 로그인 타입 변경 핸들러
  const handleLoginType = (type: LoginType) => {
    setLoginType(type);
  };

  const onSubmit = () => {
    mutate(
      { is_usermode: USER_TYPE.STUDENT === loginType, id: id, password: pw },
      {
        onSuccess: () => navigate(PATH.MAIN),
      }
    );
  };

  const handleKeyboard = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') onSubmit();
  };

  const handleButton = () => {
    onSubmit();
  };

  return (
    <PageTemplate>
      <Styled.Root>
        <Styled.Title>HUFS LOCKER</Styled.Title>
        <Styled.FormContainer onSubmit={onSubmit}>
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
          <Styled.Input
            type='text'
            placeholder='아이디를 입력해주세요.'
            value={id}
            autoFocus
            onChange={handleId}
            onKeyDown={handleKeyboard}
          />
          <Styled.Input
            type='password'
            placeholder='비밀번호를 입력해주세요.'
            value={pw}
            onChange={handlePw}
            onKeyDown={handleKeyboard}
          />
          <Button variant='contained' onClick={handleButton} css={Styled.ExtendedButton}>
            LOGIN
          </Button>
        </Styled.FormContainer>
      </Styled.Root>
    </PageTemplate>
  );
}

export default LoginPage;
