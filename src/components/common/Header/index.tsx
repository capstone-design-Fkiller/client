
import LoginedHeader from './logined';
import * as Styled from './style';

import { useFetchMe } from '@/query/user';
import { PATH } from '@/utils/path';

// const alerts = [
//   { id: 1, message: '사물함 신청 5일 전입니다.' },
//   { id: 2, message: '사물함 신청이 완료되었습니다.' },
//   { id: 3, message: '누군가 사물함 쉐어를 신청했습니다.' },
//   { id: 4, message: '반납기한이 지났어요!!' },
//   { id: 5, message: '에프킬라팀 최고~!!' },
//   { id: 6, message: '사물함 신청까지 2일 남았습니다.' },
//   { id: 7, message: '공지가 등록되었습니다.' },
//   { id: 8, message: '사물함 쉐어 등록이 완료되었습니다.' },
//   { id: 9, message: '사물함 반납 처리가 완료되었습니다.' },
// ];

const Header = () => {
  const user = useFetchMe();
  const { me, isLoading } = user;

  return (
    <Styled.Root>
      <Styled.Logo to={PATH.MAIN}>HUFS LOCKER</Styled.Logo>
      {me ? <LoginedHeader me={me} /> : undefined}
    </Styled.Root>
  );
};

export default Header;
