import * as Styled from './style';

import Icon from '@/components/common/Icon';
import { UserResponse } from '@/types/user';

export interface ProfileProps {
  me: UserResponse;
}

const ProfileContainer = (props: ProfileProps) => {
  const { me } = props;

  return (
    <Styled.ProfileContainer>
      <Styled.MyInfo>
        <Icon iconName='user' size='120' hasCursor={false} />
        <p>{me.name}</p>
      </Styled.MyInfo>
      <Styled.InnerBox>
        <p>
          <Styled.BoldText>✔️ 내 학과 </Styled.BoldText>
          {me.major}
        </p>
        <p>
          <Styled.BoldText>✔️ 내 학번 </Styled.BoldText>
          {`${me.id}`}
        </p>
        <p>
          <Styled.BoldText>✔️ 내 상태 </Styled.BoldText>
          {me.is_usermode ? '사용자' : '관리자'}
        </p>
      </Styled.InnerBox>
    </Styled.ProfileContainer>
  );
};

export default ProfileContainer;
