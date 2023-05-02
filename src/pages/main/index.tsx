import { useNavigate } from 'react-router-dom';

import * as Styled from './style';

import Button from '@/components/common/Button';
import PageTemplate from '@/components/common/PageTamplate';
import { PATH } from '@/utils/path';

const MainPage = () => {
  const navigate = useNavigate();

  return (
    <PageTemplate>
      <Styled.Root>
        <div>페이지 템플릿을 활용해봅니다.</div>
        <Button
          variant='contained'
          onClick={() => navigate(PATH.LOGIN)}
        >
        로그인하기
        </Button>
      </Styled.Root>
    </PageTemplate>
  );
};

export default MainPage;
