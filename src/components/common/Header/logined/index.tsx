import { useState } from 'react';
import { useQueryClient } from 'react-query';
import { Link } from 'react-router-dom';

import * as Styled from './style';

import Icon from '@/components/common/Icon';
import Modal from '@/components/common/Modal';
import { useFetchAlerts } from '@/query/alert';
import { UserResponse } from '@/types/user';
import { YYMMDD } from '@/utils/date';
import { PATH } from '@/utils/path';

interface props {
  me: UserResponse;
}

const LoginedHeader = (headerProps: props) => {
  const { me } = headerProps;
  const [alertOpen, setAlertOpen] = useState(false);
  const queryClient = useQueryClient();
  const alerts = useFetchAlerts(me.id);
  const { data, isLoading } = alerts;

  const handleAlertOpen = () => {
    setAlertOpen(!alertOpen);
    if (!alertOpen) queryClient.refetchQueries('alert');
  };

  return (
    <div>
      <Styled.HeaderIconsArrange>
        <Icon iconName='email' size='32' onClick={handleAlertOpen} />
        <Link to={PATH.PROFILE}>
          <Icon iconName='user' size='32' />
        </Link>
      </Styled.HeaderIconsArrange>
      {isLoading ? (
        ''
      ) : (
        <Modal title='알림' open={alertOpen} onClose={handleAlertOpen}>
          <Styled.AlertModalTitle>알림</Styled.AlertModalTitle>
          <Styled.ModalBody>
            {data && data?.length > 0 ? (
              data.map(alert => (
                <Styled.AlertModalListItems key={alert.id}>
                  <p>{alert.message}</p>
                  <p>{alert.major.slice(0, -2)}관리자</p>
                  <p>{YYMMDD(alert.created_at)}</p>
                </Styled.AlertModalListItems>
              ))
            ) : (
              <p>알림이 없습니다.</p>
            )}
          </Styled.ModalBody>
        </Modal>
      )}
    </div>
  );
};

export default LoginedHeader;
