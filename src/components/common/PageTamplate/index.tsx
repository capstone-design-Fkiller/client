import { PropsWithChildren } from 'react';

import * as Styled from './style';

import BottomNavigation from '@/components/common/BottomNavigation';
import Header from '@/components/common/Header';

const PageTemplate = (props: PropsWithChildren) => {
  const { children } = props;

  return (
    <Styled.Root>
      <Styled.Container>
        <Header />
        <Styled.Main>{children}</Styled.Main>
        <BottomNavigation />
      </Styled.Container>
    </Styled.Root>
  );
};

PageTemplate.WithoutOption = function PageTemplate(props: PropsWithChildren) {
  const { children } = props;

  return (
    <Styled.Root>
      <Styled.Container>
        <Styled.Main>{children}</Styled.Main>
      </Styled.Container>
    </Styled.Root>
  );
};

export default PageTemplate;
