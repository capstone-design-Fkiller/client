import { Link } from 'react-router-dom';

import * as Styled from './style';

import Icon from '@/components/common/Icon';
import { PATH } from '@/utils/path';

type HeaderProps = {
  onAlertOpen: () => void;
};

const Header = ({ onAlertOpen }: HeaderProps) => {
  return (
    <Styled.Root>
      <Link to={PATH.MAIN}>
        <Icon iconName='home' size='32' />
      </Link>
      <Link to={PATH.MAIN} id='header-logo'>
        HUFS LOCKER
      </Link>
      <Styled.HeaderIconsArrange>
        <Icon iconName='email' size='32' onClick={onAlertOpen} />
        <Link to={PATH.LOGIN}>
          <Icon iconName='user' size='32' />
        </Link>
      </Styled.HeaderIconsArrange>
    </Styled.Root>
  );
};

export default Header;
