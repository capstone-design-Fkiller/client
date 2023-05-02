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
        {children}
        <BottomNavigation />
      </Styled.Container>
    </Styled.Root>
  );
};

export default PageTemplate;
