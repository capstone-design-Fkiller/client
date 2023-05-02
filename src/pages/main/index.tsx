import React, { useState } from 'react';

import * as Styled from './style';

import Button from '@/components/common/Button/button';
import PageTemplate from '@/components/common/PageTamplate';

const MainPage = ({ userType }) => {
  // const [userType, setUserState] = useState('');

  if (userType === 'user') {
    return (
      <PageTemplate>
        <Styled.Root>
          <Styled.LockkerInfoConatiner css={{ marginBottom: '10px' }}>
            내 사물함 정보
          </Styled.LockkerInfoConatiner>
          <Button variant='outlined' css={{ width: '30%' }}>
            쉐어하기
          </Button>
        </Styled.Root>
      </PageTemplate>
    );
  }
  return (
    <PageTemplate>
      <Styled.Root>
        <Button
          variant='contained'
          css={{
            height: '25vh',
            marginBottom: '10px',
            borderRadius: '30px',
            fontSize: '20px',
            display: 'none',
          }}
        >
          OO학과 사물함 신청 설정
        </Button>
        <Button
          variant='contained'
          css={{
            height: '25vh',
            marginBottom: '10px',
            borderRadius: '30px',
            fontSize: '20px',
            display: 'none',
          }}
        >
          OO학과 사물함 배정하기
        </Button>
      </Styled.Root>
    </PageTemplate>
  );
};

export default MainPage;
