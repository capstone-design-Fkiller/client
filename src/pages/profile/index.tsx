import * as Styled from './style';

import Button from '@/components/common/Button';
import PageTemplate from '@/components/common/PageTamplate';
import ProfileContainer from '@/components/profile/ProfileData';
import { useFetchMyLocker } from '@/query/locker';
import { useFetchMe } from '@/query/user';

const ProfilePage = () => {
  const { me, logout } = useFetchMe();
  const { myLocker } = useFetchMyLocker(me?.id || 0);

  if (!me) throw new Error();

  return (
    <PageTemplate>
      <Styled.Root>
        <Styled.Title>내 정보</Styled.Title>

        <ProfileContainer me={me} locker={myLocker} />

        <Button onClick={logout} variant='contained'>
          로그아웃
        </Button>
      </Styled.Root>
    </PageTemplate>
  );
};

export default ProfilePage;
