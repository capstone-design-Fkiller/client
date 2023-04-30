import * as Styled from './style';

import Button from '@/components/common/Button';
import PageTemplate from '@/components/common/PageTamplate';

const MainPage = () => {
  return (
    <PageTemplate>
      <Styled.Root>
        <div>페이지 템플릿을 활용해봅니다.</div>
        <Button>글씨체가 적용이 되나요?</Button>
      </Styled.Root>
    </PageTemplate>
  );
};

export default MainPage;
