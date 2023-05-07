import { PropsWithChildren } from 'react';
import { useState } from 'react';

import * as Styled from './style';

import BottomNavigation from '@/components/common/BottomNavigation';
import Header from '@/components/common/Header';
import Modal from '@/components/common/Modal';

const alerts = [
  { id: 1, message: '사물함 신청 5일 전입니다.' },
  { id: 2, message: '아주아주아주 긴 문장을 넣어보고 싶었는데 우리 이거 글자수 제한 두나??' },
  { id: 3, message: '안뇽' },
  { id: 4, message: '나윤이는 너무 귀엽다.(심각)(진지)' },
  { id: 5, message: '와플 먹고 싶다.. 안에 딸기랑 아이스크림 들어간 걸로!' },
  { id: 6, message: '성민오빠한테는 만날 때마다 고맙다고 절해야 될 것 같다.✨' },
  { id: 7, message: '내일 아침 뭐 먹지?!' },
  { id: 8, message: '백엔드도 항상 새벽까지 회의하던데,, 다들 고생이 넘 많다! 다들 건강 지켜!!' },
  { id: 9, message: '지금 몇 시게' },
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
            <Styled.AlertModalListItems key={alert.id}>{alert.message}</Styled.AlertModalListItems>
          ))}
        </Styled.ModalBody>
      </Modal>
    </Styled.Root>
  );
};

export default PageTemplate;
