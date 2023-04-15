import * as Styled from './style';

import Button from '@/components/common/Button';
import PageTemplate from '@/components/common/PageTamplate';

const MainPage = () => {
  return (
    <PageTemplate>
      <Styled.Root>
        <div>페이지 템플릿을 활용해봅니다.</div>
        <Button variant='contained'>Primary</Button>
        <hr />
        <Button variant='contained'>Primary</Button>
        <Button variant='outlined'>outlined</Button>
        <Button variant='contained' color='secondary'>
          Secondary
        </Button>
        <Button variant='contained' color='error'>
          Error
        </Button>
        <Button variant='contained' color='warning' css={{ color: 'white' }}>
          Error
        </Button>
      </Styled.Root>
    </PageTemplate>
  );
};

export default MainPage;
