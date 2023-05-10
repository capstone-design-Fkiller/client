import { Alert } from '@mui/material';
import { MouseEvent, useEffect, useState } from 'react';

import * as Styled from './style';

import { ApplicantResponse } from '@/api/locker';
import Locker from '@/components/apply/Locker';
import Button from '@/components/common/Button';
import PageTemplate from '@/components/common/PageTamplate';
import Select from '@/components/common/Select';
import { BUILDING } from '@/constants/building';
import { useFetchApplicant } from '@/query/locker';

const ApplyPage = () => {
  const [structure, setStructure] = useState<string>('건물');
  const [rate, setRate] = useState<number>(0);
  const [lockers, setLockers] = useState();

  const handleSelect = (e: MouseEvent<HTMLLIElement>) => setStructure(e.currentTarget.innerText);
  // const onSuccess = (applicant: ApplicantResponse[]) => {
  //   const countOfApplicant = applicant ? applicant.length : 0;

  //   setRate(countOfApplicant > 0 ? 20 / countOfApplicant : 0);
  // };
  // const { refetch } = useFetchApplicant({
  //   major: 5, // 사용자 정보를 불러와서 학과를 넣어줘야 함
  //   building: BUILDING[structure],
  //   onSuccess: onSuccess,
  // });

  // useEffect(() => {
  //   refetch();
  // }, [structure]);

  return (
    <PageTemplate>
      <Styled.Root>
        <Styled.Container>
          {rate > 0 ? <Locker rate={rate} /> : <Locker.Skeleton />}
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
        {/* <Alert severity='success' >Check</Alert> */}
      </Styled.Root>
    </PageTemplate>
  );
};

export default ApplyPage;
