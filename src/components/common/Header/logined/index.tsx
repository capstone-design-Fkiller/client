import { Button } from '@mui/material';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import * as Styled from './style';

import Icon from '@/components/common/Icon';
import Modal from '@/components/common/Modal';
import { MAJOR } from '@/constants/major';
import { useFetchAlerts, usePostAlert } from '@/query/alert';
import { UserResponse } from '@/types/user';
import { PATH } from '@/utils/path';

// const alerts = [
//   { id: 1, message: '사물함 신청 5일 전입니다.' },
//   { id: 2, message: '사물함 신청이 완료되었습니다.' },
//   { id: 3, message: '누군가 사물함 쉐어를 신청했습니다.' },
//   { id: 4, message: '반납기한이 지났어요!!' },
//   { id: 5, message: '에프킬라팀 최고~!!' },
//   { id: 6, message: '사물함 신청까지 2일 남았습니다.' },
//   { id: 7, message: '공지가 등록되었습니다.' },
//   { id: 8, message: '사물함 쉐어 등록이 완료되었습니다.' },
//   { id: 9, message: '사물함 반납 처리가 완료되었습니다.' },
// ];

interface props {
  me: UserResponse;
}

const LoginedHeader = (headerProps: props) => {
  const { me } = headerProps;
  const [alertOpen, setAlertOpen] = useState(false);

  // FETCH 기능
  const alerts = useFetchAlerts(me.id); // 내 아이디 가져와서 내 알람 가져오기
  const { data, isLoading } = alerts;

  // POST 기능
  const { mutate } = usePostAlert();
  const onSubmit = () => {
    mutate(
      { message: 'ㄱㄱㄱ', major: MAJOR[me.major], sender: me.id, receiver: me.id }, // 알람 보낼 때 여기 값 채워주면 된다.
      {
        // onSuccess: () => navigate(PATH.MAIN),
      }
    );
  };

  const handleAlertOpen = () => {
    setAlertOpen(!alertOpen);
  };

  const formatDate = (createdDate: string) => {
    const date = new Date(createdDate);
    const year = date.getFullYear().toString().slice(-2);
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    const hour = date.getHours().toString().padStart(2, '0');
    const minute = date.getMinutes().toString().padStart(2, '0');
    return `${month}/${day} ${hour}:${minute}`;
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
            {data?.alerts?.length ?? 0 > 0 ? (
              data?.alerts.map(alert => (
                // index 1인 메시지가 알림 제목 뒤로 가서 보이지 않는 문제가 있다.
                <Styled.AlertModalListItems key={alert.id}>
                  <p>{alert.message}</p>
                  <p>{formatDate(alert.created_at)}</p>
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
