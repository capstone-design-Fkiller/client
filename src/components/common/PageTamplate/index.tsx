import { PropsWithChildren } from 'react';
import { useState } from 'react';

import * as Styled from './style';

import BottomNavigation from '@/components/common/BottomNavigation';
import Header from '@/components/common/Header';
import Modal from '@/components/common/Modal';

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

const PageTemplate = (props: PropsWithChildren) => {
  const [alertOpen, setAlertOpen] = useState(false);
  const { children } = props;

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

export default PageTemplate;
