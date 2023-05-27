import { useNavigate } from 'react-router-dom';

import * as Styled from './style';

import Button from '@/components/common/Button';
import PageTemplate from '@/components/common/PageTamplate';
import Student from '@/components/main/Student';
import { useFetchMe } from '@/query/user';

const MainPage = () => {
  const { me } = useFetchMe();

  return (
    <PageTemplate>
      <Styled.Root>
        {me ? (
          <>
            <Student user={me} />
          </>
        ) : (
          <>
            <Student.Skeleton />
          </>
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
