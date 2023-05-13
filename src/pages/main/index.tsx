import { useNavigate } from 'react-router-dom';

import * as Styled from './style';

import Button from '@/components/common/Button';
import Loader from '@/components/common/Loader';
import PageTemplate from '@/components/common/PageTamplate';
import Student from '@/components/main/Student';
import { useFetchMe } from '@/query/user';
import { PATH } from '@/utils/path';

const MainPage = () => {
  const navigate = useNavigate();
  const { me } = useFetchMe();

  const handleNavigation = () => {
    navigate(PATH.USER_SHARE);
  };

  return (
    <PageTemplate>
      <Styled.Root>
        {me ? (
          <>
            <Student user={me} />
            <Button variant='contained' onClick={handleNavigation}>
              사물함 쉐어하기
            </Button>
          </>
        ) : (
          <Loader />
        )}
      </Styled.Root>
    </PageTemplate>
  );
};

// const AdminComponent = () => (
//   <>
//     <Button variant='contained'>사물함 신청 설정</Button>
//     <Button variant='contained'>사물함 배정하기</Button>
//     {/* 통학거리, 재학여부 */}
//   </>
// );

export default MainPage;
