import { Button } from '@mui/material';
import { useState } from 'react';
import { useQueryClient } from 'react-query';
import { Link } from 'react-router-dom';

import * as Styled from './style';

import Icon from '@/components/common/Icon';
import Modal from '@/components/common/Modal';
import { MAJOR } from '@/constants/major';
import { useFetchAlerts, usePostAlert } from '@/query/alert';
import { alertResponse } from '@/types/alert';
import { UserResponse } from '@/types/user';
import { YYMMDD } from '@/utils/date';
import { PATH } from '@/utils/path';

interface LoginedProps {
  me: UserResponse;
}

const LoginedHeader = (headerProps: LoginedProps) => {
  const { me } = headerProps;
  const [alertOpen, setAlertOpen] = useState(false);
  const queryClient = useQueryClient();

  // FETCH 기능
  const { data: alerts, isLoading } = useFetchAlerts(me.id);

  // POST 기능
  const { mutate } = usePostAlert();
  const onSubmit = () => {
    mutate({ message: 'ㄱㄱㄱ', major: MAJOR[me.major], sender: me.id, receiver: me.id });
  };

  const handleAlertOpen = () => {
    setAlertOpen(!alertOpen);
    if (!alertOpen) queryClient.refetchQueries('alert'); // 열 때만 서버에서 refetch
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
          <Button onClick={handleAlertOpen}>닫기</Button>
          <Styled.ModalBody>
            {alerts?.length ?? 0 > 0 ? (
              alerts?.map((alert: alertResponse) => (
                // index 1인 메시지가 알림 제목 뒤로 가서 보이지 않는 문제가 있다.
                <Styled.AlertModalListItems key={alert.id}>
                  <p>{alert.message}</p>
                  <p>{alert.major.slice(0, -2)}관리자</p>
                  <p>{YYMMDD(alert.created_at, true)}</p>
                </Styled.AlertModalListItems>
              ))
            ) : (
              // 알림 없으면 알림 없음 추가. 스타일 적용 필요
              <p>알림이 없습니다.</p>
            )}
            {/* 관리자이면 보내기가 가능 */}
            {!me.is_usermode ? <Button onClick={onSubmit}>알림 보내기</Button> : undefined}
          </Styled.ModalBody>
        </Modal>
      )}
    </div>
  );
};

export default LoginedHeader;
