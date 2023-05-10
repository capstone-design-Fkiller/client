import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { useMemo } from 'react';

import Icon from '@/components/common/Icon';

const Locker = (props: { total: number; applyCount: number }) => {
  const { total, applyCount } = props;
  const CHECK_POINT = useMemo(() => Math.ceil((applyCount / total) * 100), [total, applyCount]);

  return (
    <Styled.Root>
      <Styled.GradientWrapper>
        <Styled.Building grd={CHECK_POINT > 100 ? 100 : CHECK_POINT}>
          <Styled.Floor />
          <Styled.Floor />
          <Styled.Floor />
          <Styled.Floor />
          <Styled.Floor />
        </Styled.Building>
      </Styled.GradientWrapper>
      <Styled.Title>
        인문관 ( {applyCount} / {total} )
      </Styled.Title>
    </Styled.Root>
  );
};

export default Locker;

Locker.Skeleton = function Skeleton() {
  return (
    <Styled.Root>
      <Icon iconName='nothing' size='100' color='grey' hasCursor={false} />
      <span style={{ color: 'grey' }}>건물을 선택해주세요</span>
    </Styled.Root>
  );
};

const Styled = {
  Root: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;

    width: 100%;
  `,

  Building: styled.div<{ grd: number }>`
    display: grid;
    grid-template-rows: repeat(5, 1fr);

    border-radius: 5px;

    ${({ grd }) => css`
      height: ${100 - grd}%;
      background: white;
    `}
  `,

  GradientWrapper: styled.div`
    background-color: #2cb67d;
  `,

  Floor: styled.div`
    width: 100px;
    height: 50px;
    background-color: transparent;
    border: 5px solid ${({ theme }) => theme.colors.light_grey_200};
  `,

  Title: styled.h1``,
};
