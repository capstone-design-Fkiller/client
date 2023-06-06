import { useNavigate } from 'react-router-dom';

import * as Styled from '../style';

import Button from '@/components/common/Button';
import PageTemplate from '@/components/common/PageTamplate';
// import Student from '@/components/main/Student';
import StudentLocker from '@/components/main/Wrapper';
import { useConvertShareMutation, useFetchMyLocker } from '@/query/locker';
import { useFetchMe } from '@/query/user';
import { PATH } from '@/utils/path';

const StudentMainPage = () => {
  const navigate = useNavigate();
  const { me } = useFetchMe();

  if (!me) throw new Error('로그인을 해주세요!');

  const { myLocker } = useFetchMyLocker(me.id || 0);

  const handleNavigate = (path: string) => {
    navigate(path);
  };

  const { mutate } = useConvertShareMutation();

  const handleShareDelete = () => {
    if (!myLocker) return;

    mutate({ id: myLocker.id, share_end_date: null, share_start_date: null });
  };

  return (
    <PageTemplate>
      <Styled.Root>
        {me && (
          <>
            <StudentLocker me={me} locker={myLocker} />
            {myLocker && !myLocker?.shared_id && !myLocker?.is_share_registered && (
              <Button
                style={{ marginTop: '-50px' }}
                variant='contained'
                onClick={() => handleNavigate(PATH.USER_SHARE)}
              >
                사물함 쉐어하기
              </Button>
            )}
            {myLocker?.owned_id === me?.id &&
              !myLocker?.shared_id &&
              myLocker?.is_share_registered && (
                <Button
                  style={{ marginTop: '-50px' }}
                  variant='outlined'
                  onClick={handleShareDelete}
                >
                  쉐어 취소
                </Button>
              )}
          </>
        )}
      </Styled.Root>
    </PageTemplate>
  );
};

export default StudentMainPage;
