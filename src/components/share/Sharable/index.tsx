import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { Fragment } from 'react';

import Icon from '@/components/common/Icon';
import Loader from '@/components/common/Loader';
import { Separator } from '@/components/common/Separator';
import { getBuildingName } from '@/constants/building';
import { LockerResponse } from '@/types/locker';
import { formatDate } from '@/utils/date';

interface SharableProps {
  id: number | undefined;
  lockers: LockerResponse[];
  isLoading: boolean;
  setSelectedLocker: React.Dispatch<React.SetStateAction<LockerResponse | undefined>>;
}

const Sharable = (props: SharableProps) => {
  const { id, lockers, isLoading, setSelectedLocker } = props;
  const theme = useTheme();

  const handleSharableLocker = (locker: LockerResponse) => {
    if (id === locker.id) setSelectedLocker(undefined);
    if (id !== locker.id) setSelectedLocker(locker);
  };

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
        <Fragment key={item.id}>
          <Styled.SharedLocker isActive={id === item.id} onClick={() => handleSharableLocker(item)}>
            <div>
              {item.owned_id} / {getBuildingName(item.building_id)} / {item.floor}층 / {item.id}
            </div>
            <div>
              {formatDate(new Date(item.share_start_date as string), false)}
              {' ~ '}
              {formatDate(new Date(item.share_end_date as string), false)}
            </div>
          </Styled.SharedLocker>
          <Separator />
        </Fragment>
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

  SharedLocker: styled.div<{ isActive: boolean }>`
    position: relative;
    padding: 20px;
    cursor: pointer;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5px;

    transition: color 0.15s ease-in-out;

    color: ${({ isActive, theme }) => isActive && theme.colors.primary_200};

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
};
