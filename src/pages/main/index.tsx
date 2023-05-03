// import React, { useState } from 'react';

import * as Styled from './style';

import Button from '@/components/common/Button/button';
import PageTemplate from '@/components/common/PageTamplate';

const MainPage = ({}) => {
  // const [userType, setUserState] = useState('');

  if (userType === 'user') {
    return (
      <PageTemplate>
        <Styled.Root>
          <Styled.LockerInfoConatiner>내 사물함 정보</Styled.LockerInfoConatiner>
          <Button variant='outlined' css={Styled.ShareButton}>
            쉐어하기
          </Button>
        </Styled.Root>
      </PageTemplate>
    );
  }
  return (
    <PageTemplate>
      <Styled.Root>
        <Button variant='contained' css={Styled.AdminButton}>
          OO학과 사물함 신청 설정
        </Button>
        <Button variant='contained' css={Styled.AdminButton}>
          OO학과 사물함 배정하기
        </Button>
      </Styled.Root>
    </PageTemplate>
  );
};

export default MainPage;
