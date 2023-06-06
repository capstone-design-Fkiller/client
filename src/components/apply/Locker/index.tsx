import { css, useTheme } from '@emotion/react';
import styled from '@emotion/styled';

import Icon from '@/components/common/Icon';
import { LOCKER_MESSAGE } from '@/constants/skeleton';
import { UserResponse } from '@/types/user';

interface LockerProps {
  me: UserResponse;
  value: string;
  total: number | undefined;
  applyCount: number;
}

const Locker = (props: LockerProps) => {
  const { me, value, total, applyCount } = props;

  const theme = useTheme();

  if (!me || !total) {
    const message = me ? LOCKER_MESSAGE.not_building : LOCKER_MESSAGE.not_login;

    return (
      <Styled.Root>
        <Icon iconName='nothing' size='100' color={theme.colors.grey_200} hasCursor={false} />
        <span style={{ color: theme.colors.grey_200 }}>{message}</span>
      </Styled.Root>
    );
  }

  const CHECK_POINT = Math.ceil((applyCount / total) * 100);

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
        <p>신청자 수 : {applyCount}명</p>
        <p>사물함 수 : {total}개</p>
        <p>
          {'경쟁률 : '}
          <span style={{ fontWeight: '600', color: 'red' }}>
            [{(applyCount / total).toFixed(2)} : 1]
          </span>
        </p>
        {/* {value} ( {applyCount} / {total} ) */}
      </Styled.Title>
    </Styled.Root>
  );
};

export default Locker;

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

  Title: styled.div`
    display: grid;
    grid-template-columns: auto;
    font-size: 15px;
  `,
};
