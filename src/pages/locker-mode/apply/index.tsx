import { MouseEvent, useEffect, useState } from 'react';

import * as Styled from './style';

import Locker from '@/components/apply/Locker';
import Button from '@/components/common/Button';
import PageTemplate from '@/components/common/PageTamplate';
import Select from '@/components/common/Select';
import { BUILDING } from '@/constants/building';
import { MAJOR } from '@/constants/major';
import { LOCKER_MESSAGE } from '@/constants/skeleton';
import { useFetchApplicant, useApplyLockerMutation } from '@/query/locker';
import { useFetchMe } from '@/query/user';

const ApplyPage = () => {
  const [structure, setStructure] = useState<string>('건물');
  const [major, setMajor] = useState<string>('학과');
  const { me } = useFetchMe();
  const { mutate } = useApplyLockerMutation();

  const handleSelect = (e: MouseEvent<HTMLLIElement>) => setStructure(e.currentTarget.innerText);

  const {
    data: { apply, lockerCounts },
    refetch,
  } = useFetchApplicant({
    major: MAJOR[major],
    building_id: BUILDING[structure],
  });

  const handleApplyButton = () => {
    mutate(
      {
        building_id: BUILDING[structure],
        major: MAJOR[major],
        user: me.id,
      },
      {
        onSuccess: refetch,
      }
    );
  };

  useEffect(() => {
    if (me) setMajor(me.major);
  }, [me]);

  return (
    <PageTemplate>
      <Styled.Root>
        <Styled.Container>
          {lockerCounts && lockerCounts.length > 0 ? (
            <Locker value={structure} total={lockerCounts.length} applyCount={apply.length} />
          ) : (
            <Locker.Skeleton value={me ? LOCKER_MESSAGE.not_building : LOCKER_MESSAGE.not_login} />
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
        <Button variant='contained' onClick={handleApplyButton}>
          신청하기
        </Button>
      </Styled.Root>
    </PageTemplate>
  );
};

export default ApplyPage;
