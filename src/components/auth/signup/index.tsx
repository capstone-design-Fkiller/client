import { useState, KeyboardEvent, Dispatch, SetStateAction } from 'react';

import * as Styled from '../style';

import Button from '@/components/common/Button';
import { MAJOR } from '@/constants/major';
import useInput from '@/hooks/useInput';
import { useSignUp } from '@/query/user';

interface SignUpProps {
  setMode: Dispatch<SetStateAction<boolean>>;
}

const SignUp = (props: SignUpProps) => {
  const { setMode } = props;

  const majorList = Object.keys(MAJOR);

  const { value: id, handleValue: handleId } = useInput<string>('');
  const { value: pw, handleValue: handlePw } = useInput<string>('');
  const { value: name, handleValue: handleName } = useInput<string>('');
  const { value: major, handleValue: handleMajor } = useInput<string>('');
  const [isAdminable, setIsAdminable] = useState(false);
  const { mutate } = useSignUp();

  const onSubmit = () => {
    mutate(
      {
        id: id,
        password1: pw,
        password2: pw,
        major: MAJOR[major],
        name: name,
        is_adminable: isAdminable,
      },
      {
        onSuccess: () => setMode(false),
      }
    );
  };

  const handleKeyboard = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.currentTarget.type === 'number' && ['e', 'E', '+', '-'].includes(e.key))
      e.preventDefault();
    if (e.key === 'ArrowUp' || e.key === 'ArrowDown') e.preventDefault();

    if (e.key === 'Enter') onSubmit();
  };

  const handleButton = () => {
    onSubmit();
  };

  return (
    <Styled.FormContainer onSubmit={onSubmit}>
      <Styled.Input
        type='number'
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
      <Styled.Input
        type='text'
        placeholder='이름을 입력해주세요.'
        value={name}
        onChange={handleName}
        onKeyDown={handleKeyboard}
      />
      <Styled.Input
        type='text'
        list='majorList'
        // datatype={}
        placeholder='학과명을 입력해주세요.'
        value={major}
        onChange={handleMajor}
        onKeyDown={handleKeyboard}
      />
      <datalist id='majorList'>
        {majorList.map(major => (
          <option key={major} value={major} />
        ))}
      </datalist>

      <Styled.Label>
        <Styled.Input
          type='checkbox'
          checked={isAdminable}
          onChange={() => setIsAdminable(!isAdminable)}
        />
        관리자 모드로 회원가입 하기
      </Styled.Label>
      <Button variant='contained' onClick={handleButton} css={Styled.ExtendedButton}>
        회원가입
      </Button>
    </Styled.FormContainer>
  );
};

export default SignUp;
