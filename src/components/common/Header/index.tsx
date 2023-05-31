import LoginedHeader from './logined';
import * as Styled from './style';

import { useFetchMe } from '@/query/user';
import { PATH } from '@/utils/path';

const Header = () => {
  const { me } = useFetchMe();

  return (
    <Styled.Root>
      <Styled.Logo to={PATH.MAIN}>HUFS LOCKER</Styled.Logo>
      {me && <LoginedHeader me={me} />}
    </Styled.Root>
  );
};

export default Header;
