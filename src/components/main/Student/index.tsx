import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';

import Icon from '@/components/common/Icon';
import { UserResponse } from '@/types/user';

const Student = ({ user }: { user: UserResponse }) => {
  const { name, id } = user;

  return (
    <Styled.Container>
      <Styled.LockerInfo>
        <Icon iconName='locker' size='150' hasCursor={false} />
      </Styled.LockerInfo>
      <Styled.InformBox>
        <span>이름: {name}</span>
        <span>학번: {id}</span>
        <span>건물: 수정 필요</span>
        <span>사물함 번호: 수정 필요</span>
      </Styled.InformBox>
    </Styled.Container>
  );
};

Student.Skeleton = function Student() {
  const theme = useTheme();

  return (
    <Styled.SkeletonWrapper>
      <Icon iconName='nothing' size='100' color={theme.colors.grey_200} hasCursor={false} />
      <span style={{ color: theme.colors.grey_200 }}>로그인 후 사용할 수 있습니다!</span>
    </Styled.SkeletonWrapper>
  );
};

export default Student;

const Styled = {
  Container: styled.div`
    display: grid;
    grid-template-rows: 350px 1fr;

    width: 100%;
    height: 450px;

    background-color: ${({ theme }) => theme.colors.white_300};
    border: 1px solid ${({ theme }) => theme.colors.light_grey_100};
    border-radius: 5px;

    margin-bottom: 30px;
  `,

  LockerInfo: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  `,

  InformBox: styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-items: flex-start;
    align-items: center;

    width: 100%;
    padding: 0 10px;

    border-top: 1px solid ${({ theme }) => theme.colors.light_grey_100};
    background-color: ${({ theme }) => theme.colors.background_2};
  `,

  Separator: styled.hr`
    width: 100%;
    height: 1px;
    padding-left: 10px;

    border: 0;
    background: ${({ theme }) => theme.colors.light_grey_200};
  `,

  SkeletonWrapper: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;

    width: 100%;
    height: 450px;

    background-color: ${({ theme }) => theme.colors.white_300};
    border: 1px solid ${({ theme }) => theme.colors.light_grey_100};
    border-radius: 5px;

    margin-bottom: 30px;
  `,
};
