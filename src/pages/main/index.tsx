import { useState } from 'react';

import * as Styled from './style';

import Button from '@/components/common/Button';
import PageTemplate from '@/components/common/PageTamplate';

const MainPage = () => {
  const [userType, setUserTypeState] = useState(false);

  const handleUserTypeChange = () => {
    setUserTypeState(!userType);
  };

  return (
    <PageTemplate>
      <Styled.Root>
        <div>
          <Button variant='outlined' onClick={handleUserTypeChange}>
            관리자/사용자 전환
          </Button>
          {userType ? <UserComponent /> : <AdminComponent />}
        </div>
      </Styled.Root>
    </PageTemplate>
  );
};

const UserComponent = () => (
  <>
    <Styled.LockerInfoContainer>내 사물함 정보</Styled.LockerInfoContainer>
    <Button variant='outlined'>쉐어하기</Button>
  </>
);

const AdminComponent = () => (
  <>
    <Button variant='contained'>사물함 신청 설정</Button>
    <Button variant='contained'>사물함 배정하기</Button>
  </>
);

export default MainPage;
