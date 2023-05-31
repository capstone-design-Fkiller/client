import { useNavigate } from 'react-router-dom';

import * as Styled from './style';

import Button from '@/components/common/Button';
import Icon from '@/components/common/Icon';
import PageTemplate from '@/components/common/PageTamplate';
import { PATH } from '@/utils/path';

const SelectApplyMode = () => {
  const navigate = useNavigate();

  return (
    <PageTemplate>
      <Styled.Root>
        <Button
          variant='contained'
          startIcon={<Icon iconName='box' />}
          onClick={() => navigate(PATH.APPLY)}
        >
          학과 사물함 신청
        </Button>
        <Button
          variant='contained'
          startIcon={<Icon iconName='share' color='white' />}
          onClick={() => navigate(PATH.SHARE)}
        >
          쉐어 사물함 신청
        </Button>
      </Styled.Root>
    </PageTemplate>
  );
};

export default SelectApplyMode;
