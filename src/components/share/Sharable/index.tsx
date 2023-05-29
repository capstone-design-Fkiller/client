import styled from '@emotion/styled';

import Loader from '@/components/common/Loader';
import { BUILDINGTOSTRING } from '@/constants/building';
import { LockerResponse } from '@/types/locker';
import { UserResponse } from '@/types/user';
import { MMDD } from '@/utils/date';

interface SharableProps {
  lockers: LockerResponse[];
  isLoading: boolean;
  me: UserResponse;
  setSelectedLocker: React.Dispatch<React.SetStateAction<LockerResponse | undefined>>;
}

const Sharable = (props: SharableProps) => {
  const { lockers, isLoading, me, setSelectedLocker } = props;

  if (isLoading) return <Loader />;

  const handleSelectLocker = (locker: LockerResponse) => {
    setSelectedLocker(locker);
    console.log(locker, "락커 클릭");
    // if (locker !== 0) {
    //   navigate(`${PATH.NOTICE}/${locker}`);
    // }
  };

  return (
    // <div>
    // {lockers.map(item => (
    //   <div key={item.id}>
    //     {getBuildingName(item.building_id)}/{item.id}

    <Styled.TableContainer>
      <tbody>
        {lockers.map((locker: LockerResponse) => (
          <Styled.Row key={locker.id} onClick={() => handleSelectLocker(locker)}>
            <Styled.Item>{`${locker.id}번`}</Styled.Item>
            <Styled.Item>{BUILDINGTOSTRING[locker.building_id]}</Styled.Item>
            <Styled.Item>{`${locker.owned_id}`}</Styled.Item>
            <Styled.Item>{MMDD(locker.share_start_date ?? new Date().toString())}</Styled.Item>
            <Styled.Item>{MMDD(locker.share_end_date ?? new Date().toString())}</Styled.Item>
          </Styled.Row>
        ))}
      </tbody>
    </Styled.TableContainer>
    // </div>
    // ))}
    // </div>
  );
};

export default Sharable;

const Styled = {
  Row: styled.tr`
    font-size: 14px;
    width: 100%;
    padding: 10px;

    cursor: pointer;
    transition: 0.1s color ease-in-out;

    &:hover {
      color: ${({ theme }) => theme.colors.primary_200};
    }
  `,

  Item: styled.td`
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: center;
  `,

  TableContainer: styled.table`
    width: 100%;
    margin-top: 15px;

    border-collapse: collapse;

    & tr > td,
    & tr > th {
      padding: 10px 0;
      white-space: nowrap;

      &:first-of-type {
        padding-left: 10px;
      }
    }

    & tbody tr {
      border-bottom: 1px solid ${({ theme }) => theme.colors.light_grey_100};
    }
  `,
};
