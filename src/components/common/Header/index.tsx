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
    <Styled.Root>
      <Styled.Logo to={PATH.MAIN}>HUFS LOCKER</Styled.Logo>
      <Styled.HeaderIconsArrange>
        <Icon iconName='email' size='32' onClick={handleAlertOpen} />
        <Link to={PATH.LOGIN}>
          <Icon iconName='user' size='32' />
        </Link>
      </Styled.HeaderIconsArrange>
      <Modal title='알림' open={alertOpen} onClose={handleAlertOpen}>
        <h1>알림</h1>
      </Modal>
    </Styled.Root>
  );
};

export default Header;
