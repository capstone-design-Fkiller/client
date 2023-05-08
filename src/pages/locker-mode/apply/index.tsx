import { MouseEvent, useState } from 'react';

import * as Styled from './style';

import Locker from '@/components/apply/Locker';
import Button from '@/components/common/Button';
import PageTemplate from '@/components/common/PageTamplate';
import Select from '@/components/common/Select';
import { BUILDING } from '@/constants/building';
import useModal from '@/hooks/useModal';

const ApplyPage = () => {
  const [structure, setStructure] = useState<string>('건물');
  const { open: structureOpen, handleOpen: handleStructureModalOpen } = useModal();
  const [lockers, setLockers] = useState();

  const handleSelect = (e: MouseEvent<HTMLLIElement>) => setStructure(e.currentTarget.innerText);

  return (
    <PageTemplate>
      <Styled.Root>
        <Styled.Container>
          {lockers ? <Locker /> : <Locker.Skeleton />}
          <Styled.InformBox>
            <div>
              <Select value={structure} handleChange={handleSelect} list={BUILDING} />
            </div>
            {/* 클릭 시 건물을 선택할 수 있도록 */}
            <Styled.Separator />
            <div>스페인어과</div> {/** 사용자 정보에서 학과를 추출 */}
          </Styled.InformBox>
        </Styled.Container>
        <Button variant='contained'>신청하기</Button>
      </Styled.Root>
    </PageTemplate>
  );
};

export default ApplyPage;
