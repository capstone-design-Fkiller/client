import * as Styled from './style';

import Button from '@/components/common/Button';
import PageTemplate from '@/components/common/PageTamplate';
import { getBuildingName } from '@/constants/building';
import { useFetchMyLocker } from '@/query/locker';
import { useFetchMe } from '@/query/user';

const ProfilePage = () => {
  const { me, logout } = useFetchMe();
  const { myLocker } = useFetchMyLocker(me?.id || 0);

  return (
    <PageTemplate>
      <Styled.Root>
        <Styled.Title>내 프로필</Styled.Title>
        <Styled.Content>
          <p>이름 : {me?.name}</p>
          <p>학과 : {me?.major}</p>
          <p>학번 : {me?.id}</p>

          <p>상태 : {me?.is_usermode ? '사용자' : '관리자'}</p>

          {myLocker?.building_id ? (
            <p>
              사물함 위치: {getBuildingName(myLocker?.building_id)} {myLocker?.floor}층
            </p>
          ) : (
            <p className='isError'>사물함이 없습니다.</p>
          )}

          {/* 신청일 및 배정일 major 테이블에서 뽑아서 가져와야 할 듯 */}
          <p>사물함 신청일 : 2023-03-05</p>
          <p>사물함 배정일 : 2023-03-10</p>
        </Styled.Content>
        <Button onClick={logout} variant='contained'>
          로그아웃
        </Button>
      </Styled.Root>
    </PageTemplate>
  );
};

export default ProfilePage;
