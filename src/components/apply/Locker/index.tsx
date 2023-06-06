import { css, useTheme } from '@emotion/react';
import styled from '@emotion/styled';

import Icon from '@/components/common/Icon';
import { LOCKER_MESSAGE } from '@/constants/skeleton';
import { UserResponse } from '@/types/user';

interface LockerProps {
  me: UserResponse;
  total: number | undefined;
  applyCount: number;
}

const Locker = (props: LockerProps) => {
  const { me, total, applyCount } = props;

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
      <Styled.Description>
        <p>신청자 수 : {applyCount}명</p>
        <p>사물함 수 : {total}개</p>
        <p>
          경쟁률 :&nbsp;
          <span className={CHECK_POINT <= 40 ? 'good' : CHECK_POINT <= 70 ? 'warning' : 'bad'}>
            [{(CHECK_POINT / 100).toFixed(2)} : 1]
          </span>
        </p>
      </Styled.Description>
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

  Description: styled.div`
    font-size: 15px;

    & span {
      font-weight: 600;

      &.good {
        color: ${({ theme }) => theme.colors.primary_300};
      }

      &.warning {
        color: ${({ theme }) => theme.colors.warning_100};
      }

      &.bad {
        color: ${({ theme }) => theme.colors.error_100};
      }
    }
  `,
};
