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
}

const Sharable = (props: SharableProps) => {
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
