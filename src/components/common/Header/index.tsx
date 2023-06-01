import { useState } from 'react';
import { Link } from 'react-router-dom';

import * as Styled from './style';

import Icon from '@/components/common/Icon';
import Modal from '@/components/common/Modal';
import { useFetchAlerts } from '@/query/alert';
import { useFetchMe } from '@/query/user';
import { YYMMDD } from '@/utils/date';
import { PATH } from '@/utils/path';

const Header = () => {
  const { me } = useFetchMe();
  const [alertOpen, setAlertOpen] = useState(false);

  if (!me) return <div>로그인 해주세요!</div>;

  const { data: alerts } = useFetchAlerts(me.id);

  const handleAlertOpen = () => {
    setAlertOpen(!alertOpen);
  };

  return (
    <Styled.Root>
      <Styled.Logo to={PATH.MAIN}>HUFS LOCKER</Styled.Logo>
      <Styled.HeaderIconsArrange>
        <Icon iconName='email' size='32' onClick={handleAlertOpen} />
        <Link to={PATH.PROFILE}>
          <Icon iconName='user' size='32' />
        </Link>
      </Styled.HeaderIconsArrange>

      <Modal title='알림' open={alertOpen} onClose={handleAlertOpen}>
        <Styled.AlertModalTitle>알림</Styled.AlertModalTitle>
        <Styled.ModalBody>
          {alerts && alerts?.length > 0 ? (
            alerts.map(alert => (
              <Styled.AlertModalListItems key={alert.id}>
                <p>{alert.message}</p>
                <br />
                <p>
                  {alert.major}/{YYMMDD(alert.created_at)}
                </p>
              </Styled.AlertModalListItems>
            ))
          ) : (
            <p>알림이 없습니다.</p>
          )}
        </Styled.ModalBody>
      </Modal>
    </Styled.Root>
  );
};

export default Header;
