// import styled from '@emotion/styled';

// import Loader from '@/components/common/Loader';
// import { BUILDINGTOSTRING } from '@/constants/building';
// import { LockerResponse } from '@/types/locker';
// import { UserResponse } from '@/types/user';
// import { MMDD } from '@/utils/date';
import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';

import Icon from '@/components/common/Icon';
import Loader from '@/components/common/Loader';
import { getBuildingName } from '@/constants/building';
import { useShareLockerMutation } from '@/query/locker';
import { LockerResponse } from '@/types/locker';
import { UserResponse } from '@/types/user';

interface SharableProps {
  me: UserResponse;
  lockers: LockerResponse[];
  isLoading: boolean;
  // setSelectedLocker: React.Dispatch<React.SetStateAction<LockerResponse | undefined>>;
}

const Sharable = (props: SharableProps) => {
  // const { lockers, isLoading, me, setSelectedLocker } = props;

  // if (isLoading) return <Loader />;

  // const handleSelectLocker = (locker: LockerResponse) => {
  //   setSelectedLocker(locker);
  //   console.log(locker, "락커 클릭");
  //   // if (locker !== 0) {
  //   //   navigate(`${PATH.NOTICE}/${locker}`);
  //   // }
  // };

  // return (
  //   // <div>
  //   // {lockers.map(item => (
  //   //   <div key={item.id}>
  //   //     {getBuildingName(item.building_id)}/{item.id}

  //   <Styled.TableContainer>
  //     <tbody>
  //       {lockers.map((locker: LockerResponse) => (
  //         <Styled.Row key={locker.id} onClick={() => handleSelectLocker(locker)}>
  //           <Styled.Item>{`${locker.id}번`}</Styled.Item>
  //           <Styled.Item>{BUILDINGTOSTRING[locker.building_id]}</Styled.Item>
  //           <Styled.Item>{`${locker.owned_id}`}</Styled.Item>
  //           <Styled.Item>{MMDD(locker.share_start_date ?? new Date().toString())}</Styled.Item>
  //           <Styled.Item>{MMDD(locker.share_end_date ?? new Date().toString())}</Styled.Item>
  //         </Styled.Row>
  //       ))}
  //     </tbody>
  //   </Styled.TableContainer>

  const { me, lockers, isLoading } = props;
  const theme = useTheme();

  const { mutate } = useShareLockerMutation();

  if (isLoading) return <Loader />;

  if (lockers.length === 0)
    return (
      <Styled.Nothing>
        <Icon iconName='nothing' size='100' color={theme.colors.grey_200} hasCursor={false} />
        <span style={{ color: theme.colors.grey_200 }}>쉐어 가능한 사물함이 없습니다.</span>
      </Styled.Nothing>
    );

  return (
    <Styled.Root>
      {lockers.map(item => (
        <Styled.SharedLocker
          key={item.id}
          onClick={() => mutate({ id: item.id, shared_id: me.id })}
        >
          {getBuildingName(item.building_id)} / {item.floor}층 / {item.id}
        </Styled.SharedLocker>
      ))}
    </Styled.Root>
  );
};

export default Sharable;

const Styled = {
  // Row: styled.tr`
  //   font-size: 14px;
  //   width: 100%;
  //   padding: 10px;

  //   cursor: pointer;
  //   transition: 0.1s color ease-in-out;

  //   &:hover {
  //     color: ${({ theme }) => theme.colors.primary_200};
  //   }
  // `,

  // Item: styled.td`
  //   white-space: nowrap;
  //   overflow: hidden;
  //   text-overflow: ellipsis;
  //   text-align: center;
  // `,

  // TableContainer: styled.table`
  //   width: 100%;
  //   margin-top: 15px;

  //   border-collapse: collapse;

  //   & tr > td,
  //   & tr > th {
  //     padding: 10px 0;
  //     white-space: nowrap;

  //     &:first-of-type {
  //       padding-left: 10px;
  //     }
  //   }

  //   & tbody tr {
  //     border-bottom: 1px solid ${({ theme }) => theme.colors.light_grey_100};

  Nothing: styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
  `,

  Root: styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    & div:first-of-type {
      padding-top: 20px;
    }
    & div:last-of-type {
      padding-bottom: 20px;
    }
  `,

  SharedLocker: styled.div`
    position: relative;
    padding: 20px;
    cursor: pointer;

    &::after {
      content: '';
      width: 10px;
      height: 1px;
      position: absolute;
      left: 50%;
      bottom: 0;
      transform: translate(-50%, 50%);
      background-color: ${({ theme }) => theme.colors.primary_200};
    }
  `,
};
