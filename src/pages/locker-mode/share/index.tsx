import * as Styled from './style';

import Button from '@/components/common/Button';
import PageTemplate from '@/components/common/PageTamplate';
import Sharable from '@/components/share/Sharable';
import { MAJOR } from '@/constants/major';
import { useFetchSharableLockers } from '@/query/locker';
import { useFetchMe } from '@/query/user';

const ApplySharePage = () => {
  const { me } = useFetchMe();

  if (!me) return <div>로그인 해주세요!</div>;

  const { sharableLockers, isLoading } = useFetchSharableLockers(MAJOR[me.major]);

  return (
    <PageTemplate>
      <Styled.Root>
        <Styled.Container>
          <Sharable me={me} lockers={sharableLockers || []} isLoading={isLoading} />
        </Styled.Container>
        <Button variant='contained'>쉐어 신청하기</Button>
      </Styled.Root>
    </PageTemplate>
  );
};

export default ApplySharePage;
