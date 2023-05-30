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
import { formatDate } from '@/utils/date';

interface SharableProps {
  me: UserResponse;
  lockers: LockerResponse[];
  isLoading: boolean;
  // setSelectedLocker: React.Dispatch<React.SetStateAction<LockerResponse | undefined>>;
}

const Sharable = (props: SharableProps) => {
  // const { lockers, isLoading, me } = props;

  // if (isLoading) return <Loader />;

  // const handleSelectLocker = (locker: LockerResponse) => {
  //   console.log(locker, '락커 클릭');
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
  //           {/* <Styled.Item>{BUILDINGTOSTRING[locker.building_id]}</Styled.Item> */}
  //           <Styled.Item>{`${locker.owned_id}`}</Styled.Item>
  //           {/* <Styled.Item>{formatDate(new Date(locker.share_start_date))}</Styled.Item> */}
  //           {/* <Styled.Item>{formatDate(new Date(locker.share_end_date))}</Styled.Item> */}
  //         </Styled.Row>
  //       ))}
  //     </tbody>
  //   </Styled.TableContainer>
  // );

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
        <>
          <Styled.SharedLocker
            key={item.id}
            onClick={() => mutate({ id: item.id, shared_id: me.id })}
          >
            <div>
              {item.owned_id} / {getBuildingName(item.building_id)} / {item.floor}층 / {item.id}
            </div>
            <div>
              {formatDate(new Date(item.share_start_date as string), false)}
              {' ~ '}
              {formatDate(new Date(item.share_end_date as string), false)}
            </div>
          </Styled.SharedLocker>
          <Styled.Separator />
        </>
      ))}
    </Styled.Root>
  );
};

export default Sharable;

const Styled = {
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
  `,

  SharedLocker: styled.div`
    position: relative;
    padding: 20px;
    cursor: pointer;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5px;

    transition: color 0.15s ease-in-out;

    &:hover {
      color: ${({ theme }) => theme.colors.primary_200};
    }

    /* &::after {
      content: '';
      width: 10px;
      height: 1px;
      position: absolute;
      left: 50%;
      bottom: 0;
      transform: translate(-50%, 50%);
      background-color: ${({ theme }) => theme.colors.primary_200};
    } */
  `,

  Separator: styled.hr`
    width: 90%;
    height: 1px;
    padding-left: 10px;

    border: 0;
    background: ${({ theme }) => theme.colors.light_grey_200};
  `,
};
