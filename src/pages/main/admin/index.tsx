import { useNavigate } from 'react-router-dom';

import * as Styled from '../style';

import Button from '@/components/common/Button';
import Loader from '@/components/common/Loader';
import PageTemplate from '@/components/common/PageTamplate';
import { useFetchMe } from '@/query/user';
import { PATH } from '@/utils/path';

const MainPage = () => {
  const navigate = useNavigate();
  const { me } = useFetchMe();

  return (
    <PageTemplate>
      <Styled.Root>
        {me ? (
          <Styled.Button>
            <Button variant='contained' onClick={() => navigate(PATH.CRITERIA)}>
              사물함 신청 설정
            </Button>
            <Button variant='contained' onClick={() => navigate(PATH.APPLY)}>
              사물함 배정하기
            </Button>
            {/* 통학거리, 재학여부 */}
          </Styled.Button>
        ) : (
          <Loader />
        )}
      </Styled.Root>
    </PageTemplate>
  );
};

export default MainPage;
