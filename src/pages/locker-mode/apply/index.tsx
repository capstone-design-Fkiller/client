import { MouseEvent, useEffect, useState } from 'react';

import * as Styled from './style';

import Locker from '@/components/apply/Locker';
import Button from '@/components/common/Button';
import PageTemplate from '@/components/common/PageTamplate';
import Select from '@/components/common/Select';
import { BUILDING } from '@/constants/building';
import { MAJOR } from '@/constants/major';
import { useFetchApplicant } from '@/query/locker';
import { useFetchMe } from '@/query/user';

const ApplyPage = () => {
  const [structure, setStructure] = useState<string>('건물');
  const [major, setMajor] = useState<string>('학과');
  const { me } = useFetchMe();

  const handleSelect = (e: MouseEvent<HTMLLIElement>) => setStructure(e.currentTarget.innerText);

  const { data, refetch } = useFetchApplicant({
    major: MAJOR[major], // 사용자 정보를 불러와서 학과를 넣어줘야 함
    building: BUILDING[structure],
  });

  useEffect(() => {
    setMajor(me.major);
  }, [me]);

  useEffect(() => {
    refetch();
  }, [structure]);

  return (
    <PageTemplate>
      <Styled.Root>
        <Styled.Container>
          {data.lockerCounts && data.lockerCounts.length > 0 ? (
            <Locker
              value={structure}
              total={data.lockerCounts.length}
              applyCount={data.apply.length}
            />
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
            <div>{major || '학과'}</div>
          </Styled.InformBox>
        </Styled.Container>
        <Button variant='contained'>신청하기</Button>
      </Styled.Root>
    </PageTemplate>
  );
};

export default ApplyPage;
