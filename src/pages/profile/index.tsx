import { useQueryClient } from 'react-query';
import { useNavigate } from 'react-router-dom';

import * as Styled from './style';

import { instance } from '@/api/instance';
import Button from '@/components/common/Button';
import PageTemplate from '@/components/common/PageTamplate';
import { useFetchMe } from '@/query/user';
import { PATH } from '@/utils/path';

const ProfilePage = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const user = useFetchMe();
  const { me, isLoading } = user;

  const handleLogout = () => {
    localStorage.clear();
    queryClient.removeQueries('user');
    instance.defaults.headers.Authorization = '';
    navigate(PATH.LOGIN);
  };

  return (
    <PageTemplate>
      <Styled.Root>
        <Styled.Title>내 프로필</Styled.Title>
        {/* 내 프로필이니까 조금 더 디테일 한 정보를 주자 */}
        <p>이름 : {me?.name}</p>
        <p>학과 : {me?.major}</p>
        <p>학번 : {me?.id}</p>
        <p>상태 : {me?.is_usermode ? '사용자' : '관리자'}</p>
        <p>사물함 신청일 : 2023-03-05</p>
        <p>사물함 배정일 : 2023-03-10</p>
        <p>사물함 위치 : 인문관 3층</p>
        <Button onClick={handleLogout} variant='contained'>
          로그아웃
        </Button>
      </Styled.Root>
    </PageTemplate>
  );
};

export default ProfilePage;