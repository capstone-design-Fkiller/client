import { PropsWithChildren } from 'react';

import * as Styled from './style';

import BottomNavigation from '@/components/common/BottomNavigation';

const PageTemplate = (props: PropsWithChildren) => {
  const { children } = props;

  return (
    <Styled.Root>
      <Styled.Container>
        {children}
        <BottomNavigation />
      </Styled.Container>
    </Styled.Root>
  );
};

export default PageTemplate;
