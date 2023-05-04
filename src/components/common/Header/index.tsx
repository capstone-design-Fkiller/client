import { Link } from 'react-router-dom';

import * as Styled from './style';

import Icon from '@/components/common/Icon';
import { PATH } from '@/utils/path';
const Header = () => {
  return (
    <Styled.Root>
      <div>
        <Link to={PATH.MAIN}>
          <Icon iconName='home' size='32' />
        </Link>
      </div>
      <Styled.IconStyle>
        <Link to={PATH.NOTICE}>
          <Icon iconName='email' size='32' />
        </Link>
        <Link to={PATH.APPLY}>
          <Icon iconName='user' size='32' />
        </Link>
      </Styled.IconStyle>
    </Styled.Root>
  );
};

export default Header;
