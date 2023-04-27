import { ButtonGroup } from '@mui/material';
import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

import * as Styled from './style';

import Button from '@/components/common/Button';
import Icon from '@/components/common/Icon';
import PageTemplate from '@/components/common/PageTamplate';

type PageType = 'apply' | 'share' | null;
type QsType = React.SetStateAction<PageType | string>;

const ApplyPage = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [qs, setQs] = useState<QsType>();

  useEffect(() => {
    const curQs = searchParams.get('type');

    setQs(curQs);
  }, [qs, searchParams]);

  if (!qs) {
    return (
      <PageTemplate>
        <Styled.Root>
          <Button
            variant='contained'
            startIcon={<Icon iconName='locker' />}
            onClick={() => navigate('/locker?type=apply')}
          >
            사물함 신청
          </Button>
          <Button
            variant='contained'
            startIcon={<Icon iconName='share' color='white' />}
            onClick={() => navigate('/locker?type=share')}
          >
            사물함 쉐어
          </Button>
        </Styled.Root>
      </PageTemplate>
    );
  }

  return (
    <PageTemplate>
      {qs === 'apply' ? (
        <Styled.Root>
          <ButtonGroup />
        </Styled.Root>
      ) : (
        <Styled.Root>share</Styled.Root>
      )}
    </PageTemplate>
  );
};

export default ApplyPage;
