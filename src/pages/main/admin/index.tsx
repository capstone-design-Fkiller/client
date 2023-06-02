import { useNavigate } from 'react-router-dom';

import * as Styled from '../style';

import Button from '@/components/common/Button';
import Icon from '@/components/common/Icon';
import Loader from '@/components/common/Loader';
import PageTemplate from '@/components/common/PageTamplate';
import { MAJOR } from '@/constants/major';
import { useFetchAssign } from '@/query/assign';
import { useFetchMe } from '@/query/user';
import { PATH } from '@/utils/path';

const AdminMainPage = () => {
  const navigate = useNavigate();
  const { me } = useFetchMe();
  const { data: assign } = useFetchAssign(MAJOR[me?.major ?? '학과']);

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
              onClick={() => navigate(PATH.RESULT)}
            >
              사물함 신청내역 확인
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
