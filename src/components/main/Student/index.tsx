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
        <span>건물: {id}</span>
        <span>사물함 번호: {name}</span>
      </Styled.InformBox>
    </Styled.Container>
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
};
