import { useNavigate } from 'react-router-dom';

import * as Styled from '../style';

import Button from '@/components/common/Button';
import Icon from '@/components/common/Icon';
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
            <Button
              variant='contained'
              startIcon={<Icon iconName='box' />}
              onClick={() => navigate(PATH.CRITERIA)}
            >
              사물함 배정기준 설정
            </Button>
            <Button
              variant='contained'
              startIcon={<Icon iconName='box' />}
              onClick={() => navigate(PATH.SORT)}
            >
              사물함 배정 확정
            </Button>
            <Button
              variant='contained'
              startIcon={<Icon iconName='box' />}
              onClick={() => navigate(PATH.RESULT)}
            >
              사물함 신청내역 확인
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
