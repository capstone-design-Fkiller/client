import * as Styled from './style';

import Button from '@/components/common/Button';
import PageTemplate from '@/components/common/PageTamplate';
import ProfileContainer from '@/components/profile/ProfileData';
import { useFetchMe } from '@/query/user';

const ProfilePage = () => {
  const { me, logout } = useFetchMe();

  if (!me) throw new Error();

  return (
    <PageTemplate>
      <Styled.Root>
        <Styled.Title>내 정보</Styled.Title>

        <ProfileContainer me={me} />

        <Button onClick={logout} color='error' variant='outlined'>
          로그아웃
        </Button>
      </Styled.Root>
    </PageTemplate>
  );
};

export default ProfilePage;
