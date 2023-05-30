import * as Styled from './style';

import Button from '@/components/common/Button';
import Icon from '@/components/common/Icon';
import PageTemplate from '@/components/common/PageTamplate';
import { LockerData, ProfileData } from '@/components/profile/ProfileData';
import { useFetchMe } from '@/query/user';

const ProfilePage = () => {
  const { me, logout } = useFetchMe();

  if (!me) throw new Error();

  return (
    <PageTemplate>
      <Styled.Root>
        <Styled.Title>내 프로필</Styled.Title>

        <Styled.ProfileContainer>
          <Icon iconName='user' size='100' />
          <ProfileData me={me} />
        </Styled.ProfileContainer>

        <Styled.ProfileContainer>
          <Icon iconName='locker' size='100' />
          <LockerData me={me} />
        </Styled.ProfileContainer>

        <Button onClick={logout} variant='contained'>
          로그아웃
        </Button>
      </Styled.Root>
    </PageTemplate>
  );
};

export default ProfilePage;
