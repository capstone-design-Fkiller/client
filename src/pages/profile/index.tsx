import * as Styled from './style';

import Button from '@/components/common/Button';
import Icon from '@/components/common/Icon';
import PageTemplate from '@/components/common/PageTamplate';
import { LockerData, ProfileData } from '@/components/profile/ProfileData';
import { useFetchMyLocker } from '@/query/locker';
import { useFetchMe } from '@/query/user';

const ProfilePage = () => {
  const { me, logout } = useFetchMe();

  if (!me) throw new Error();

  const { data } = useFetchMyLocker(me.id);
  const myLocker = data?.at(0);
  console.log(myLocker);
  let lockerContent;
  if (myLocker) {
    lockerContent = <LockerData locker={myLocker} />;
  } else {
    lockerContent = <Styled.InfoRow>아직 내 사물함이 없습니다.</Styled.InfoRow>;
  }

  return (
    <PageTemplate>
      <Styled.Root>
        <Styled.Title>내 정보</Styled.Title>

        <Styled.ProfileContainer>
          <Icon iconName='user' size='100' />
          <ProfileData me={me} />
        </Styled.ProfileContainer>

        <Styled.ProfileContainer>
          <Icon iconName='locker' size='100' />
          {lockerContent}
        </Styled.ProfileContainer>

        <Button onClick={logout} variant='contained'>
          로그아웃
        </Button>
      </Styled.Root>
    </PageTemplate>
  );
};

export default ProfilePage;
