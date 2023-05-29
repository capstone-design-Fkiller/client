import { useMutation, useQuery, useQueryClient } from 'react-query';

import {
  getLockerCounts,
  getApplicant,
  getLockerInfo,
  postApplyLocker,
  getShareableLockers,
  getMyLocker,
  putShareLocker,
} from '@/api/locker';
import useToast from '@/hooks/useToast';
import {
  LockerRequest,
  LockerResponse,
  RequestApplyLocker,
  ShareApplyRequest,
  ShareRegisterRequest,
  ShareRequest,
} from '@/types/locker';

const QUERY_KEY = {
  apply: 'apply',
  locker: 'locker',
  myLocker: 'myLocker',
  share: 'share',
};

export const useFetchApplicant = (props: LockerRequest) => {
  const additionalKeys = Object.values(props);

  const { data: lockerCounts } = useQuery(
    [QUERY_KEY.locker, 'locker-counts', ...additionalKeys],
    () => getLockerCounts(props),
    {
      enabled: !!props.building_id && !!props.major,
    }
  );

  const { data: apply } = useQuery(
    [QUERY_KEY.apply, 'applicant', ...additionalKeys],
    () => getApplicant(props),
    {
      enabled: !!props.building_id && !!props.major,
    }
  );

  return { data: { apply, lockerCounts } };
};

export const useFetchLockerInfo = (id: number) => {
  const { data } = useQuery([QUERY_KEY.locker, 'locker-info', id], () => getLockerInfo(id));

  return { locker: data };
};

export const useApplyLockerMutation = () => {
  const queryClient = useQueryClient();
  const { createToastMessage } = useToast();

  const mutation = useMutation((body: RequestApplyLocker) => postApplyLocker(body), {
    onSuccess: ({ major, building_id }) => {
      createToastMessage('신청 완료 !', 'success');
      queryClient.invalidateQueries([QUERY_KEY.apply, 'applicant', major, building_id]);
    },
    onError: () => {
      createToastMessage('다시 시도해주세요.', 'error');
    },
  });

  return mutation;
};

export const useFetchMyLocker = (id: number) => {
  const { data } = useQuery<LockerResponse[]>([QUERY_KEY.myLocker], () => getMyLocker(id));

  return { data };
};

// ! Share Api 구현되면 추가
export const useFetchSharableLockers = (id: number) => {
  const { data, isLoading } = useQuery(
    [QUERY_KEY.locker, QUERY_KEY.share, 'sharable-lockers', id],
    () => getShareableLockers(id),
    {
      enabled: !!id,
      onSuccess: res => {
        const now = new Date();

        return res.filter(({ end_date }) => end_date && new Date(end_date) > now);
      },
    }
  );

  console.log(data, ' - 쉐어가능한 사물함들');

  return { sharableLockers: data, isLoading };
};

export const useConvertShareMutation = () => {
  const { createToastMessage } = useToast();
  const mutation = useMutation((body: ShareRegisterRequest | ShareApplyRequest) => putShareLocker(body), {
    onSuccess: () => createToastMessage('쉐어 신청 완료 !', 'success'),
    onError: () => createToastMessage('다시 시도해주세요.', 'error'),
  });

  return mutation;
};
