import { useNavigate } from 'react-router-dom';

import * as Styled from '../style';

import Button from '@/components/common/Button';
import PageTemplate from '@/components/common/PageTamplate';
import Student from '@/components/main/Student';
import { useFetchMe } from '@/query/user';
import { PATH } from '@/utils/path';

const MainPage = () => {
  const navigate = useNavigate();
  const { me } = useFetchMe();

  const handleNavigate = (path: string) => {
    navigate(path);
  };

  return (
    <PageTemplate>
      <Styled.Root>
        {me ? (
          <>
            <Student user={me} />
            <Button variant='contained' onClick={() => handleNavigate(PATH.USER_SHARE)}>
              사물함 쉐어하기
            </Button>
          </>
        ) : (
          <>
            <Student.Skeleton />
            <Button variant='contained' onClick={() => handleNavigate(PATH.LOGIN)}>
              로그인 하러 가기
            </Button>
          </>
        )}
      </Styled.Root>
    </PageTemplate>
  );
};

export default MainPage;
