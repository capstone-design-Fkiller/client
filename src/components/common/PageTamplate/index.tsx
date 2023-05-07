import { PropsWithChildren } from 'react';
import { useState } from 'react';

import * as Styled from './style';

import BottomNavigation from '@/components/common/BottomNavigation';
import Header from '@/components/common/Header';
import Modal from '@/components/common/Modal';
import { Style } from '@mui/icons-material';

const PageTemplate = (props: PropsWithChildren) => {
  const { children } = props;
  const [alertOpen, setAlertOpen] = useState(false);

  const handleAlertOpen = () => {
    setAlertOpen(!alertOpen);
  };

  return (
    <Styled.Root>
      <Styled.Container>
        <Header onAlertOpen={handleAlertOpen} />
        {children}
        <BottomNavigation />
      </Styled.Container>
      <Modal title='알림' open={alertOpen} onClose={handleAlertOpen}>
        <Styled.AlertModalContent>알림</Styled.AlertModalContent>
      </Modal>
    </Styled.Root>
  );
};

export default PageTemplate;
