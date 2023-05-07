import { Modal } from '@mui/material';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import * as Styled from './style';

import Icon from '@/components/common/Icon';
import { PATH } from '@/utils/path';
const Header = () => {
  const [alertOpen, setAlertOpen] = React.useState(false);
  const navigate = useNavigate();

  const handleAlertOpen = () => {
    setAlertOpen(true);
  };

  return (
    <>
      <Styled.Root>
        <div>
          <Link to={PATH.MAIN}>
            <Icon iconName='home' size='32' />
          </Link>
        </div>
        <Styled.IconStyle>
          <Icon iconName='email' size='32' onClick={handleAlertOpen} />
          <Link to={PATH.LOGIN}>
            <Icon iconName='user' size='32' />
          </Link>
        </Styled.IconStyle>
      </Styled.Root>

      <Modal title='알림' open={alertOpen} onClose={() => setAlertOpen(false)}>
        <h1>알림</h1>
      </Modal>
    </>
  );
};

export default Header;
