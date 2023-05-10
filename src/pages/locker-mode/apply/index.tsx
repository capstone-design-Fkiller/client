import { MouseEvent, useEffect, useState } from 'react';

import * as Styled from './style';

import { ApplicantResponse } from '@/api/locker';
import Locker from '@/components/apply/Locker';
import Button from '@/components/common/Button';
import PageTemplate from '@/components/common/PageTamplate';
import Select from '@/components/common/Select';
import { BUILDING } from '@/constants/building';
import { useApply, useFetchLockerCounts } from '@/query/locker';

const ApplyPage = () => {
  const [structure, setStructure] = useState<string>('건물');
  const [lockers, setLockers] = useState();

  const handleSelect = (e: MouseEvent<HTMLLIElement>) => setStructure(e.currentTarget.innerText);
  const { lockerCounts, refetch } = useFetchLockerCounts({
    major: 5, // 사용자 정보를 불러와서 학과를 넣어줘야 함
    building: BUILDING[structure],
  });
  const { apply, refetch: applyRefetch } = useApply({
    major: 5, // 사용자 정보를 불러와서 학과를 넣어줘야 함
    building: BUILDING[structure],
  });

  useEffect(() => {
    refetch();
    applyRefetch();
    // const user: User = localStorage.getItem('user');
    
  }, [structure]);

  return (
    <PageTemplate>
      <Styled.Root>
        <Styled.Container>
          {lockerCounts && lockerCounts.length > 0 ? (
            <Locker total={lockerCounts.length} applyCount={30} />
          ) : (
            <Locker.Skeleton />
          )}
          <Styled.InformBox>
            <Select
              value={structure}
              handleChange={handleSelect}
              list={Object.keys(BUILDING).slice(1)}
            />
            <Styled.Separator />
            <div>스페인어과</div>
          </Styled.InformBox>
        </Styled.Container>
        <Button variant='contained'>신청하기</Button>
      </Styled.Root>
    </PageTemplate>
  );
};

export default ApplyPage;
