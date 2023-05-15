import { MouseEvent, useState } from 'react';

import * as Styled from './style';

import Locker from '@/components/apply/Locker';
import Button from '@/components/common/Button';
import PageTemplate from '@/components/common/PageTamplate';
import Select from '@/components/common/Select';
import { BUILDING } from '@/constants/building';
import { LOCKER_MESSAGE } from '@/constants/skeleton';
import { useFetchMe } from '@/query/user';

// TODO 쉐어 페이지에 필요한 정보
// * 1. 대여 기간

const ApplySharePage = () => {
  const [building, setBuilding] = useState<string>('건물');
  const handleChange = (e: MouseEvent<HTMLLIElement>) => setBuilding(e.currentTarget.innerText);

  const { me } = useFetchMe();

  return (
    <PageTemplate>
      <Styled.Root>
        <Styled.Container>
          <Locker.Skeleton value={me ? LOCKER_MESSAGE.not_building : LOCKER_MESSAGE.not_login} />
          <Styled.InformBox>
            {/* 클릭 시 건물을 선택할 수 있도록 */}
            <Select
              value={building}
              list={Object.keys(BUILDING).slice(1)}
              handleChange={handleChange}
            />
          </Styled.InformBox>
        </Styled.Container>
        <Button variant='contained'>쉐어 신청하기</Button>
      </Styled.Root>
    </PageTemplate>
  );
};

export default ApplySharePage;
