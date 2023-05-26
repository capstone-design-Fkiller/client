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
    queryClient.removeQueries('user'); // 쿼리에서 'user'에 저장되어 있는 값 삭제
    instance.defaults.headers.Authorization = '';
    navigate(PATH.LOGIN); // me를 못지워서 main으로 이동한다.
    // navigate(PATH.LOGIN, { state: { me: undefined } }); // me를 전달해야할까?
    // window.location.replace('/client' + PATH.LOGIN); // 새로 고침 시켜버림,,
  };

  return (
    <PageTemplate>
      <Styled.Root>
        <Styled.Title>내 프로필</Styled.Title>
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
