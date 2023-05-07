import { useEffect, useState } from 'react';

import * as Styled from './style';

import ModalWrapper from '@/components/apply/ModalWrapper';
import Button from '@/components/common/Button';
import Modal from '@/components/common/Modal';
import PageTemplate from '@/components/common/PageTamplate';
import useModal from '@/hooks/useModal';

const Structures = ['인문과학관', '교수개발학습원', '국제학사', '사이버관', '본관'] as const;

const ApplyPage = () => {
  const [structure, setStructure] = useState<string>('');
  const [depart, setDepart] = useState<string>('');
  const { open: structureOpen, handleOpen: handleStructureModalOpen } = useModal();
  const { open: departOpen, handleOpen: handleDepartModalOpen } = useModal();
  const [lockers, setLockers] = useState<string>();

  useEffect(() => {
    if (structure && depart) setLockers('사물함');
  }, [structure, depart]);

  return (
    <PageTemplate>
      <Styled.Root>
        {/* // ! structure와 depart를 모두 선택했을 경우 locker 정보를 서버에 요청하고, locker가 load 되었을 경우 정보 렌더링  */}
        <Styled.LockerInfo>{lockers || '사물함 정보를 선택해주세요.'}</Styled.LockerInfo>

        <Styled.InformBox>
          <Button onClick={handleStructureModalOpen}>{structure || '건물 선택'}</Button>
          <Button onClick={handleDepartModalOpen}>{depart || '학과 선택'}</Button>
        </Styled.InformBox>
      </Styled.Root>

      <Modal title='건물' open={structureOpen} onClose={handleStructureModalOpen}>
        <ModalWrapper
          state={structure}
          setState={setStructure}
          handleModalOpen={handleStructureModalOpen}
          list={Structures}
        />
      </Modal>
      <Modal title='학과' open={departOpen} onClose={handleDepartModalOpen}>
        <ModalWrapper
          state={depart}
          setState={setDepart}
          handleModalOpen={handleDepartModalOpen}
          list={Structures}
        />
      </Modal>
    </PageTemplate>
  );
};

export default ApplyPage;
