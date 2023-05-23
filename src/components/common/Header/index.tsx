import { useState } from 'react';
import { Link } from 'react-router-dom';

import * as Styled from './style';

import Icon from '@/components/common/Icon';
import Modal from '@/components/common/Modal';
import { PATH } from '@/utils/path';

const alerts = [
  { id: 1, message: '사물함 신청 5일 전입니다.' },
  { id: 2, message: '사물함 신청이 완료되었습니다.' },
  { id: 3, message: '누군가 사물함 쉐어를 신청했습니다.' },
  { id: 4, message: '반납기한이 지났어요!!' },
  { id: 5, message: '에프킬라팀 최고~!!' },
  { id: 6, message: '사물함 신청까지 2일 남았습니다.' },
  { id: 7, message: '공지가 등록되었습니다.' },
  { id: 8, message: '사물함 쉐어 등록이 완료되었습니다.' },
  { id: 9, message: '사물함 반납 처리가 완료되었습니다.' },
];

const Header = () => {
  const [alertOpen, setAlertOpen] = useState(false);

  const handleAlertOpen = () => {
    setAlertOpen(!alertOpen);
  };

  const handleLogout = () => {
    // 로컬 스토리지에서 유저 정보 삭제
    localStorage.removeItem('user');
    localStorage.removeItem('refresh_token');
    localStorage.removeItem('access_token');

    window.location.reload();
  };

  return (
    <Styled.Root>
      <Styled.Logo to={PATH.MAIN}>HUFS LOCKER</Styled.Logo>
      <h1 onClick={handleLogout}>로그아웃</h1>
      <Styled.HeaderIconsArrange>
        <Icon iconName='email' size='32' onClick={handleAlertOpen} />
        <Link to={PATH.LOGIN}>
          <Icon iconName='user' size='32' />
        </Link>
      </Styled.HeaderIconsArrange>
      <Modal title='알림' open={alertOpen} onClose={handleAlertOpen}>
        <Styled.AlertModalTitle>알림</Styled.AlertModalTitle>
        <Styled.ModalBody>
          {alerts.map(alert => (
            // index 1인 메시지가 알림 제목 뒤로 가서 보이지 않는 문제가 있다.
            <Styled.AlertModalListItems key={alert.id}>{alert.message}</Styled.AlertModalListItems>
          ))}
        </Styled.ModalBody>
      </Modal>
    </Styled.Root>
  );
};

export default Header;
