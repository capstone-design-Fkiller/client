import { useState } from 'react';

import * as Styled from './style';

import Locker from '@/components/apply/Locker';
import Button from '@/components/common/Button';
import PageTemplate from '@/components/common/PageTamplate';
import useModal from '@/hooks/useModal';

const Structures = ['인문과학관', '교수개발학습원', '국제학사', '사이버관', '본관'] as const;

const ApplyPage = () => {
  const [structure, setStructure] = useState<string>('');
  const { open: structureOpen, handleOpen: handleStructureModalOpen } = useModal();
  const [lockers, setLockers] = useState();

  return (
    <PageTemplate>
      <Styled.Root>
        {/* // ! structure와 depart를 모두 선택했을 경우 locker 정보를 서버에 요청하고, locker가 load 되었을 경우 정보 렌더링  */}
        {/* // ! 근데 내가 학과 선택 버튼을 만들어뒀는데, 학과는 그냥 사용자 정보에서 빼가는 정보니까 없어도 되지 않나...? */}

        <Styled.Container>
          {lockers ? <Locker /> : <Locker.Skeleton />}
          <Styled.InformBox>
            <span>인문관</span>
            {/* <hr style={{ width: '10px' }} /> */}
            <span>스페인어과</span>
          </Styled.InformBox>
        </Styled.Container>
        <Button variant='contained'>신청하기</Button>
      </Styled.Root>
    </PageTemplate>
  );
};

export default ApplyPage;
