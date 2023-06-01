import { useNavigate } from 'react-router-dom';

import * as Styled from '../style';

import Button from '@/components/common/Button';
import Loader from '@/components/common/Loader';
import PageTemplate from '@/components/common/PageTamplate';
import { useFetchMe } from '@/query/user';
import { PATH } from '@/utils/path';
import { useFetchAssign } from '@/query/assign';
import { MAJOR } from '@/constants/major';

const AdminMainPage = () => {
  const navigate = useNavigate();
  const { me } = useFetchMe();
  const { data: assign } = useFetchAssign(MAJOR[me?.major ?? '학과']);

  return (
    <PageTemplate>
      <Styled.Root>
        {me ? (
          <>
            <Button variant='contained' onClick={() => navigate(PATH.CRITERIA)}>
              사물함 배정기준 설정
            </Button>
            {assign?.at(0) ?? undefined ? (
              <>
                <Button
                  variant='outlined'
                  // className={selectedLocker ? '' : 'disabled'}
                  color='error'
                  // css={Styled.ExtendedButton}
                  disableFocusRipple
                  disableTouchRipple
                  disabled
                >
                  사물함 배정 불가
                </Button>
              </>
            ) : (
              <Button variant='contained' onClick={() => navigate(PATH.SORT)}>
                사물함 배정 확정
              </Button>
            )}
          </>
        ) : (
          <Loader />
        )}
      </Styled.Root>
    </PageTemplate>
  );
};

export default AdminMainPage;
