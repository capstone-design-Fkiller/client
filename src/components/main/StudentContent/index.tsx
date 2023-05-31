import styled from '@emotion/styled';

import { getBuildingName } from '@/constants/building';
import { LockerResponse } from '@/types/locker';

interface InformBoxProps {
  locker: LockerResponse | undefined;
  name: string;
  id: number;
}

const InformBoxContent = (props: InformBoxProps) => {
  const { locker, name, id } = props;

  if (!locker) {
    return (
      <Styled.InformBox className='nothing'>
        <div className='inform__user'>
          <span>이름: {name}</span>
          <span>학번: {id}</span>
        </div>
        <div>
          <p>아직 배정된 사물함이 없습니다.</p> <p>사물함을 신청하세요</p>
        </div>
      </Styled.InformBox>
    );
  }

  const {
    owned_id,
    building_id,
    id: lockerId,
    shared_id,
    is_share_registered,
  } = locker as LockerResponse;

  return (
    <Styled.InformBox>
      <span>이름: {name}</span>
      <span>학번: {id}</span>
      <span>건물: {getBuildingName(building_id)}</span>
      <span>사물함 번호: {lockerId}</span>
      {owned_id === id && (
        <span>
          {!shared_id
            ? `쉐어 등록 여부 : ${is_share_registered ? '✔️' : '❌'}`
            : `쉐어중 :  ${shared_id}`}
        </span>
      )}
      {shared_id === id && <span>쉐어 받음</span>}
    </Styled.InformBox>
  );
};

export default InformBoxContent;

const Styled = {
  InformBox: styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-items: flex-start;
    align-items: center;

    width: 100%;
    padding: 0 10px;

    border-top: 1px solid ${({ theme }) => theme.colors.light_grey_100};
    background-color: ${({ theme }) => theme.colors.background_2};

    &.nothing {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      gap: 10px;

      p {
        color: ${({ theme }) => theme.colors.error_100};
      }
    }

    & .inform__user {
      display: grid;
      grid-template-columns: 1fr 1fr;
      justify-items: flex-start;
      align-items: center;
      width: 100%;
    }
  `,
};
