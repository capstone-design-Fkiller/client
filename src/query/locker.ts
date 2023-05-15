import { useMutation, useQuery } from 'react-query';

import {
  getAllMajor,
  getLockerCounts,
  getApplicant,
  getLockerInfo,
  postApplyLocker,
} from '@/api/locker';
import useToast from '@/hooks/useToast';
import { LockerRequest, RequestApplyLocker } from '@/types/locker';

const QUERY_KEY = {
  major: 'major',
  apply: 'apply',
  lockerCounts: 'lockerCounts',
  locker: 'locker',
};

export const useFetchMajor = (id: number) => {
  const { data, isLoading } = useQuery([QUERY_KEY.major, id], () => getAllMajor(), {
    staleTime: 1000,
  });

  return { major: data, isLoading };
};

export const useFetchApplicant = (props: LockerRequest) => {
  const { data: lockerCounts, refetch: lockerRefetch } = useQuery(
    [QUERY_KEY.lockerCounts, { ...props }],
    () => getLockerCounts(props)
  );

  const { data: apply, refetch: applyRefetch } = useQuery([QUERY_KEY.apply, { ...props }], () =>
    getApplicant(props)
  );

  const refetch = () => {
    lockerRefetch();
    applyRefetch();
  };

  return { data: { apply, lockerCounts }, refetch };
};

export const useFetchLockerInfo = (id: number) => {
  const { data } = useQuery([QUERY_KEY.locker, id], () => getLockerInfo(id));

  return { locker: data };
};

export const useMutateApplyLocker = () => {
  const { setCurrentMessage, setCurrentState, handleOpen } = useToast();

  const mutation = useMutation((body: RequestApplyLocker) => postApplyLocker(body), {
    onSuccess: () => {
      setCurrentMessage('사물함 신청에 성공했습니다.');
      setCurrentState('success');
      handleOpen();
    },
    onError: () => {
      setCurrentMessage('다시 시도해주세요.');
      setCurrentState('error');
      handleOpen();
    },
    // onSuccess: () => openToast('success', '성공했습니다.'),
    // onError: () => openToast('error', '에러입니다.'),
  });

  return mutation;
};
