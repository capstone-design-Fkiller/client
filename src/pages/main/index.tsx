import axios from 'axios';
import { useState, useEffect } from 'react';

import * as Styled from './style';

import Button from '@/components/common/Button';
import PageTemplate from '@/components/common/PageTamplate';

const MainPage = () => {
  const [userType, setUserTypeState] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [lockerData, setLockerData] = useState(null);

  useEffect(() => {
    const fetchUserType = async () => {
      try {
        const token = localStorage.getItem('access_token');
        if (!token) {
          throw new Error('사용자 정보가 없습니다.');
        }
        const response = await axios.get('is_admin', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setIsAdmin(response.data.isAdmin);
      } catch (error) {
        console.error(error);
      }
    };

    const fetchUserData = async () => {
      try {
        const response = await axios.get('user', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('access_token')}`,
          },
        });
        setLockerData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUserType();
    fetchUserData();
  }, []);

  const handleClick = () => {
    setUserTypeState(!userType);
  };

  return (
    <PageTemplate>
      <Styled.Root>
        <div>
          <Button variant='outlined' onClick={handleClick}>
            관리자/사용자 전환
          </Button>
          {isAdmin ? <AdminComponent /> : <UserComponent lockerData={lockerData} />}
        </div>
      </Styled.Root>
    </PageTemplate>
  );
};

const UserComponent = ({ lockerData }) => (
  <>
    <Styled.LockerInfoTitle>내 사물함 정보</Styled.LockerInfoTitle>
    <Styled.LockerInfoContainer>
      <Styled.LockerInfoContent>이름:{lockerData?.name}</Styled.LockerInfoContent>
      <Styled.LockerInfoContent>학번:{lockerData?.id}</Styled.LockerInfoContent>
      <Styled.LockerInfoContent>학과:{lockerData?.major}</Styled.LockerInfoContent>
    </Styled.LockerInfoContainer>
    <Button variant='outlined'>쉐어하기</Button>
  </>
);

const AdminComponent = () => (
  <>
    <Button variant='contained'>사물함 신청 설정</Button>
    <Button variant='contained'>사물함 배정하기</Button>
    {/* 통학거리, 재학여부 */}
  </>
);

export default MainPage;
