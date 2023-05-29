import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import Icon from '@/components/common/Icon';
import { BUILDINGTOSTRING } from '@/constants/building';
import { useFetchMyLocker } from '@/query/locker';
import { UserResponse } from '@/types/user';
import { PATH } from '@/utils/path';

const Student = ({ user }: { user: UserResponse }) => {
  const navigate = useNavigate();
  const { name, id } = user;

  const { data } = useFetchMyLocker(id);
  const myLocker = data?.at(0);

  const handleNavigate = (path: string) => {
    navigate(path);
  };

  return (
    <Styled.Container>
      <Styled.LockerInfo>
        <Icon iconName='locker' size='150' hasCursor={false} />
      </Styled.LockerInfo>
      <Styled.InformBox>
        <span>이름: {name}</span>
        <span>학번: {id}</span>

        {myLocker?.owned_id == id ? (
          <>
            <span>건물: {BUILDINGTOSTRING[myLocker.building_id]}</span>
            <span>사물함 번호: {myLocker.id}</span>
            {myLocker.is_share_registered ? '쉐어 등록됨' : '쉐어 미등록'}
            {!myLocker.is_share_registered ? (
              <Button
                variant='contained'
                onClick={() => {
                  return handleNavigate(PATH.USER_SHARE);
                }}
              >
                사물함 쉐어하기
              </Button>
            ) : undefined}
          </>
        ) : myLocker?.shared_id == id ? (
          <>
            <span>건물: {BUILDINGTOSTRING[myLocker.building_id]}</span>
            <span>사물함 번호: {myLocker.id}</span>
            {'쉐어 받음'}
          </>
        ) : (
          '아직 배정된 사물함이 없습니다. 사물함을 신청하세요'
        )}
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
