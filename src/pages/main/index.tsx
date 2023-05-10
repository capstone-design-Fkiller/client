import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import * as Styled from './style';

import { instance } from '@/api/instance';
import Button from '@/components/common/Button';
import PageTemplate from '@/components/common/PageTamplate';
import { User } from '@/types/user';
import { PATH } from '@/utils/path';

const MainPage = () => {
  const [userType, setUserTypeState] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  // cons
  // const user: User|null = location.state.user;
  // const [isAdmin, setIsAdmin] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [locker, setLocker] = useState({ building_id: 1, id: 1 });
  // const { user } = props.location.state;

  const handleClick = () => {
    setUserTypeState(!userType);
  };

  useEffect(() => {
    console.log('유저 확인', location.state);
    if (location.state) {
      setUser(location.state.user);
    } else {
      navigate(PATH.LOGIN);
      // localStorage.getItem('access_token');
    }

    // const access_token = localStorage.getItem('access_token');
    // if (access_token) {

    // }
  }, []);

  const fetchLockerData = async () => {
    try {
      const response = await instance.get(`locker?owned_id=${user?.id}`, {
        // headers: {
        //   Authorization: `Bearer ${localStorage.getItem('access')}`,
        // },
      });
      if (!response.data) {
        const { data } = await instance.put(`locker/1`, {
          owned_id: 201801910,
          major: 1,
          building_id: 1,
        });
        console.log({ data }, '배정 되었음');
        setLocker(data[0]);
      } else {
        console.log(response.data[0], '락커 있음');
        setLocker(response.data[0]);
      }
      // setLocker(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    // const fetchUserType = async () => {
    //   try {
    //     const token = localStorage.getItem('access'); // 엑세스 토큰
    //   } catch (error) {
    //     console.error(error);
    //   }
    // };
    // fetchUserType();
    if (user) fetchLockerData();
  }, [user]);

  return (
    <PageTemplate>
      <Styled.Root>
        <div>
          {/* <Button variant='outlined' onClick={handleClick}>
            관리자/사용자 전환
          </Button> */}
          {user?.is_usermode ? <UserComponent user={user} locker={locker} /> : <AdminComponent />}
        </div>
      </Styled.Root>
    </PageTemplate>
  );
};

//   return (
//     <PageTemplate>
//       <Styled.Root>
//         <div>
//           <Button variant='outlined' onClick={handleClick}>
//             관리자/사용자 전환
//           </Button>
//           {userType ? <UserComponent /> : <AdminComponent />}
//         </div>
//       </Styled.Root>
//     </PageTemplate>
//   );
// };

const UserComponent = ({ user, locker }: { user: User; locker: any }) => (
  <>
    <Styled.LockerInfoTitle>내 사물함 정보</Styled.LockerInfoTitle>
    <Styled.LockerInfoContainer>
      <Styled.LockerInfoContent>이름 : {user.name}</Styled.LockerInfoContent>
      <Styled.LockerInfoContent>학번 : {user.id}</Styled.LockerInfoContent>
      <Styled.LockerInfoContent>학과 : {user.major}</Styled.LockerInfoContent>
      <Styled.LockerInfoContent>
        건물 이름 : {locker.building_id === 1 ? '인문관' : '사회과학관'}
      </Styled.LockerInfoContent>
      <Styled.LockerInfoContent>사물함 번호 : {locker.id}</Styled.LockerInfoContent>
    </Styled.LockerInfoContainer>
    <Button variant='outlined'>내 사물함 쉐어하기</Button>
  </>
);

const AdminComponent = () => (
  <>
    <Button variant='contained'>사물함 신청 설정</Button>
    <Button variant='contained'>사물함 배정하기</Button>
    {/* 통학거리, 재학여부 */}
  </>
);

// const UserComponent = () => (
//   <>
//     <Styled.LockerInfoContainer>내 사물함 정보</Styled.LockerInfoContainer>
//     <Button variant='outlined'>쉐어하기</Button>
//   </>
// );

// const AdminComponent = () => (
//   <>
//     <Button variant='contained'>사물함 신청 설정</Button>
//     <Button variant='contained'>사물함 배정하기</Button>
//   </>
// );

export default MainPage;
