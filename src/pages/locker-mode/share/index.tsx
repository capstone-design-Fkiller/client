import { MouseEvent, useState } from 'react';

import * as Styled from './style';

import Button from '@/components/common/Button';
import PageTemplate from '@/components/common/PageTamplate';
import Select from '@/components/common/Select';
import Sharable from '@/components/share/Sharable';
import { BUILDING } from '@/constants/building';
import { MAJOR } from '@/constants/major';
import { useFetchSharableLockers } from '@/query/locker';
import { useFetchMe } from '@/query/user';

// TODO 쉐어 페이지에 필요한 정보
// * 1. 대여 기간

// TODO 필요한 API
// share
// login
// user 정보 가져오는 것

const ApplySharePage = () => {
  const [building, setBuilding] = useState<string>('건물');
  const handleChange = (e: MouseEvent<HTMLLIElement>) => setBuilding(e.currentTarget.innerText);

  const { me } = useFetchMe();

  if (!me) return <div />;

  const { sharableLockers, isLoading } = useFetchSharableLockers(MAJOR[me.major]);

  return (
    <PageTemplate>
      <Styled.Root>
        <Styled.Container>
          {/** // ! 추후 Locker 컴포넌트가 아닌 Table 컴포넌트로 변경해야 할 듯 */}
          {/* <Locker me={me} value={building} /> */}
          <Sharable lockers={sharableLockers || []} isLoading={isLoading} />
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
