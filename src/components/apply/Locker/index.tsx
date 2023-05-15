import { css, useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { useMemo } from 'react';

import Icon from '@/components/common/Icon';

interface LockerProps {
  value: string;
  total: number;
  applyCount: number;
}

const Locker = (props: LockerProps) => {
  const { value, total, applyCount } = props;
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
        {value} ( {applyCount} / {total} )
      </Styled.Title>
    </Styled.Root>
  );
};

export default Locker;

Locker.Skeleton = function Skeleton(props: Pick<LockerProps, 'value'>) {
  const { value } = props;

  const theme = useTheme();

  return (
    <Styled.Root>
      <Icon iconName='nothing' size='100' color={theme.colors.grey_200} hasCursor={false} />
      <span style={{ color: theme.colors.grey_200 }}>{value}</span>
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
