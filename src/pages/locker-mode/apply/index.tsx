import { MouseEvent, useEffect, useState } from 'react';

import * as Styled from './style';

import Button from '@/components/common/Button';
import Modal from '@/components/common/Modal';
import PageTemplate from '@/components/common/PageTamplate';

const Structures = ['인문과학관', '교수개발학습원', '국제학사', '사이버관', '본관'] as const;

const ApplyPage = () => {
  const [structure, setStructure] = useState<string>('');
  const [depart, setDepart] = useState<string>('');
  const [structureOpen, setStructureOpen] = useState<boolean>(false);
  const [departOpen, setDepartOpen] = useState<boolean>(false);
  const [lockers, setLockers] = useState<string>();

  // ! Modal에서 사용할 data, setData, modalOpen, setModalOpen을 한번에 관리할 hook 함수 있으면 좋을 것 같음
  const handleStructure = (e: MouseEvent<HTMLButtonElement>) => {
    if (structure === e.currentTarget.innerText) return;

    setStructure(e.currentTarget.innerText);
  };
  const handleDepart = (e: MouseEvent<HTMLButtonElement>) => {
    if (depart === e.currentTarget.innerText) return;

    setDepart(e.currentTarget.innerText);
  };
  const handleStructureModalOpen = () => setStructureOpen(!structureOpen);
  const handleDepartModalOpen = () => setDepartOpen(!departOpen);

  useEffect(() => {
    if (structure && depart) setLockers('사물함');
  }, [structure, depart]);

  return (
    <PageTemplate>
      <Styled.Root>
        <Styled.InformBox>
          <Button onClick={handleStructureModalOpen}>{structure || '건물 선택'}</Button>
          <Button onClick={handleDepartModalOpen}>{depart || '학과 선택'}</Button>
        </Styled.InformBox>

        {/* // ! structure와 depart를 모두 선택했을 경우 locker 정보를 서버에 요청하고, locker가 load 되었을 경우 정보 렌더링  */}
        <Styled.LockerInfo>{lockers || '사물함 정보를 선택해주세요.'}</Styled.LockerInfo>
      </Styled.Root>

      <Modal title='건물' open={structureOpen} onClose={handleStructureModalOpen}>
        <h1>원하는 건물을 선택해주세요.</h1>
        <Styled.ModalWrapper>
          {Structures.map(item => (
            <Button
              key={item}
              onClick={handleStructure}
              css={Styled.ExtendedButton}
              variant={structure === item ? 'contained' : 'outlined'}
            >
              {item}
            </Button>
          ))}
        </Styled.ModalWrapper>
      </Modal>

      <Modal title='학과' open={departOpen} onClose={handleDepartModalOpen}>
        <h1>학과를 선택해주세요.</h1>
        <Styled.ModalWrapper>
          {Structures.map(item => (
            <Button
              key={item}
              onClick={handleDepart}
              css={Styled.ExtendedButton}
              variant={depart === item ? 'contained' : 'outlined'}
            >
              {item}
            </Button>
          ))}
        </Styled.ModalWrapper>
      </Modal>
    </PageTemplate>
  );
};

export default ApplyPage;
