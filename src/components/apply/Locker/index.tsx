import { css } from '@emotion/react';
import styled from '@emotion/styled';

import Icon from '@/components/common/Icon';

const Locker = () => {
  const CHECK_POINT = Math.ceil((16 / 43) * 100);

  return (
    <Styled.Root>
      <Styled.Building grd={CHECK_POINT}>
        <Styled.Floor />
        <Styled.Floor />
        <Styled.Floor />
        <Styled.Floor />
        <Styled.Floor />
      </Styled.Building>
      <Styled.Title>인문관</Styled.Title>
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
    height: 100%;
  `,

  Building: styled.div<{ grd: number }>`
    display: grid;
    grid-template-rows: repeat(5, 1fr);

    border-radius: 5px;

    ${({ grd }) => css`
      background: linear-gradient(0deg, #2cb67d ${grd}%, white 50%);
    `}
  `,

  GradientWrapper: styled.div`
    background-color: ${({ theme }) => theme.colors.background_1};
  `,

  Floor: styled.div`
    width: 100px;
    height: 50px;
    background-color: transparent;
    border: 5px solid ${({ theme }) => theme.colors.light_grey_200};
  `,

  Title: styled.h1``,
};
