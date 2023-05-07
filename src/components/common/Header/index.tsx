import { Modal } from '@mui/material';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import * as Styled from './style';

import Icon from '@/components/common/Icon';
import { PATH } from '@/utils/path';
const Header = () => {
  const [alertOpen, setAlertOpen] = useState(false);

  const handleAlertOpen = () => {
    setAlertOpen(!alertOpen);
  };

  return (
    <>
      <Styled.Root>
        <Link to={PATH.MAIN}>
          <Icon iconName='home' size='32' />
        </Link>
        <Link to={PATH.MAIN} id='header-logo'>
          HUFS LOCKER
        </Link>
        <Styled.HeaderIconsArrange>
          <Icon iconName='email' size='32' onClick={handleAlertOpen} />
          <Link to={PATH.LOGIN}>
            <Icon iconName='user' size='32' />
          </Link>
        </Styled.HeaderIconsArrange>
      </Styled.Root>

      <Modal title='알림' open={alertOpen} onClose={handleAlertOpen}>
        <h1>알림</h1>
      </Modal>
    </>
  );
};

export default Header;
