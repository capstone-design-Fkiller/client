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
  // const user: User|null = location.state.user;
  // const [isAdmin, setIsAdmin] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [locker, setLocker] = useState({ building_id: 1, id: 1 });
  // const { user } = props.location.state;

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
