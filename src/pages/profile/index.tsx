import * as Styled from './style';

import Button from '@/components/common/Button';
import Icon from '@/components/common/Icon';
import PageTemplate from '@/components/common/PageTamplate';
import { useFetchMe } from '@/query/user';

const ProfilePage = () => {
  const { me, logout } = useFetchMe();
  return (
    <PageTemplate>
      <Styled.Root>
        <Styled.Title>내 프로필</Styled.Title>
        <Styled.Mypage>
          <Icon iconName='user' size='100' />
          <>
            <p>이름: {me?.name}</p>
            <p>학과: {me?.major}</p>
            <p>학번: {me?.id}</p>
            <p>상태: {me?.is_usermode ? '사용자' : '관리자'}</p>
          </>
        </Styled.Mypage>
        <p>사물함 신청일: ??</p>
        <p>사물함 배정일: ??</p>
        <p>사물함 위치: ??</p>
        <Button onClick={logout} variant='contained'>
          로그아웃
        </Button>
      </Styled.Root>
    </PageTemplate>
  );
};

export default ProfilePage;
