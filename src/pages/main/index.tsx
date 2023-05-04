import { useState } from 'react';

import * as Styled from './style';

import Button from '@/components/common/Button/button';
import PageTemplate from '@/components/common/PageTamplate';

const MainPage = () => {
  const [userType, setUserTypeState] = useState(false);

  const MainComponent = () => {
    const handleClick = () => {
      setUserTypeState(!userType);
    };

    return (
      <div>
        <Button variant='outlined' onClick={handleClick} css={Styled.FlipButton}>
          관리자/사용자 전환
        </Button>
        {userType ? <UserComponent /> : <AdminComponent />}
      </div>
    );
  };

  return <MainComponent />;
};

const UserComponent = () => (
  <PageTemplate>
    <Styled.Root>
      <Styled.LockerInfoContainer>내 사물함 정보</Styled.LockerInfoContainer>
      <Button variant='outlined'>쉐어하기</Button>
    </Styled.Root>
  </PageTemplate>
);

const AdminComponent = () => (
  <PageTemplate>
    <Styled.Root>
      <Button variant='contained' css={Styled.UserBtnStyle}>
        OO학과 사물함 신청 설정
      </Button>
      <Button variant='contained' css={Styled.UserBtnStyle}>
        OO학과 사물함 배정하기
      </Button>
    </Styled.Root>
  </PageTemplate>
);

//   if (userType === 'user') {
//     return (
//       <PageTemplate>
//         <Styled.Root>
//           <Styled.LockerInfoConatiner>내 사물함 정보</Styled.LockerInfoConatiner>
//           <Button variant='outlined' css={Styled.ShareButton}>
//             쉐어하기
//           </Button>
//         </Styled.Root>
//       </PageTemplate>
//     );
//   }
//   return (
//     <PageTemplate>
//       <Styled.Root>
//         <Button variant='contained' css={Styled.AdminButton}>
//           OO학과 사물함 신청 설정
//         </Button>
//         <Button variant='contained' css={Styled.AdminButton}>
//           OO학과 사물함 배정하기
//         </Button>
//       </Styled.Root>
//     </PageTemplate>
//   );
// };

export default MainPage;
