import { AxiosError } from 'axios';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { useNavigate } from 'react-router-dom';

import {
  getLockerCounts,
  getApplicant,
  getLockerInfo,
  postApplyLocker,
  getShareableLockers,
  getMyLocker,
  patchConvertMyLockerShare,
  patchLockerShare,
  getApplicableBuilding,
} from '@/api/locker';
import { getBuildingName } from '@/constants/building';
import useToast from '@/hooks/useToast';
import {
  LockerRequest,
  LockerResponse,
  RequestApplyLocker,
  ConvertToShareRequest,
  ApplyShareRequest,
} from '@/types/locker';
import { PATH } from '@/utils/path';

const QUERY_KEY = {
  apply: 'apply',
  locker: 'locker',
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

export const useFetchMyLocker = (userId: number) => {
  const { data } = useQuery<LockerResponse>([QUERY_KEY.locker, userId], () => getMyLocker(userId));

  return { myLocker: data };
};

export const useApplyLockerMutation = () => {
  const queryClient = useQueryClient();
  const { createToastMessage } = useToast();

  const mutation = useMutation((body: RequestApplyLocker) => postApplyLocker(body), {
    onSuccess: ({ major, building_id }) => {
      createToastMessage('신청 완료 !', 'success');
      queryClient.invalidateQueries([QUERY_KEY.apply, 'applicant', major, building_id]);
    },
    onError: (error: AxiosError<{ message: string }>) => {
      const res = error.response?.data;
      if (!res) return;

      createToastMessage(res.message, 'error');
    },
  });

  return mutation;
};

export const useFetchApplicableBuilding = (majorId: number) => {
  const { data } = useQuery<number[]>(['building', majorId], () => getApplicableBuilding(majorId));

  const buildingNames = data?.map(building_id => getBuildingName(building_id) || '건물') || [
    '선택할 수 있는 건물이 없습니다.',
  ];

  return { applicableBuildings: buildingNames };
};

export const useFetchSharableLockers = () => {
  const { data, isLoading } = useQuery([QUERY_KEY.share, 'sharable-lockers'], getShareableLockers, {
    staleTime: 6000,
    onSuccess: res => {
      const now = new Date();

      return res.filter(({ end_date }) => end_date && new Date(end_date) > now);
    },
  });

  return { sharableLockers: data, isLoading };
};

export const useConvertShareMutation = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { createToastMessage } = useToast();

  const mutation = useMutation((body: ConvertToShareRequest) => patchConvertMyLockerShare(body), {
    onSuccess: ({ owned_id }) => {
      queryClient.invalidateQueries([QUERY_KEY.locker, owned_id]);
      createToastMessage('쉐어 여부 변경 완료 !', 'success');

      navigate(PATH.MAIN);
    },
    onError: () => createToastMessage('다시 시도해주세요.', 'error'),
  });

  return mutation;
};

export const useApplyShareLockerMutation = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { createToastMessage } = useToast();

  const mutation = useMutation((body: ApplyShareRequest) => patchLockerShare(body), {
    onSuccess: ({ shared_id }) => {
      // queryClient.invalidateQueries([QUERY_KEY.locker, id]); // 내 사물함 갱신
      queryClient.invalidateQueries([QUERY_KEY.locker, shared_id]); // 내 사물함 갱신
      createToastMessage('쉐어 신청 완료 !', 'success');

      navigate(PATH.MAIN);
    },
    onError: () => createToastMessage('다시 시도해주세요.', 'error'),
  });

  return mutation;
};
