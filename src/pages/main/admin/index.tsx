import { useNavigate } from 'react-router-dom';

import * as Styled from '../style';

import Button from '@/components/common/Button';
import Loader from '@/components/common/Loader';
import PageTemplate from '@/components/common/PageTamplate';
import { useFetchMe } from '@/query/user';
import { PATH } from '@/utils/path';

const AdminMainPage = () => {
  const navigate = useNavigate();
  const { me } = useFetchMe();

  return (
    <PageTemplate>
      <Styled.Root>
        {me ? (
          <>
            <Button variant='contained' onClick={() => navigate(PATH.CRITERIA)}>
              사물함 배정기준 설정
            </Button>
            <Button variant='contained' onClick={() => navigate(PATH.SORT)}>
              사물함 배정 확정
            </Button>
          </>
        ) : (
          <Loader />
        )}
      </Styled.Root>
    </PageTemplate>
  );
};

export default AdminMainPage;
