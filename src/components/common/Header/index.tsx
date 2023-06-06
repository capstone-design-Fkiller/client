import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';

import Alert from './alert';
import * as Styled from './style';

import Icon from '@/components/common/Icon';
import Modal from '@/components/common/Modal';
import { useConvertAlertMutation, useFetchAlerts } from '@/query/alert';
import { useFetchMe } from '@/query/user';
import { PATH } from '@/utils/path';

const Header = () => {
  const { me } = useFetchMe();
  const [alertOpen, setAlertOpen] = useState(false);

  if (!me) return <div>로그인 해주세요!</div>;

  const { data: alerts } = useFetchAlerts(me.id);

  const hasUnreadAlert = useMemo(() => alerts && alerts.some(alert => !alert.isRead), [alerts]);

  const { mutate } = useConvertAlertMutation();

  const handleAlertOpen = () => {
    setAlertOpen(prevOpen => {
      if (hasUnreadAlert && !prevOpen) {
        mutate({ receiver: me.id });
      }

      return !prevOpen;
    });
  };

  return (
    <Styled.Root>
      <Styled.Logo to={PATH.MAIN}>HUFS LOCKER</Styled.Logo>
      <Styled.HeaderIconsArrange>
        <Icon
          iconName='email'
          size='32'
          onClick={handleAlertOpen}
          css={hasUnreadAlert && Styled.ExtendedAlertIcon}
        />
        <Link to={PATH.PROFILE}>
          <Icon iconName='user' size='32' />
        </Link>
      </Styled.HeaderIconsArrange>

      <Modal title='알림' open={alertOpen} onClose={handleAlertOpen}>
        <Styled.AlertModalTitle>알림</Styled.AlertModalTitle>
        <Styled.ModalBody>
          <Alert alerts={alerts} />
        </Styled.ModalBody>
      </Modal>
    </Styled.Root>
  );
};

export default Header;
