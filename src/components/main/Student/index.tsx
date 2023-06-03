// import { useTheme } from '@emotion/react';
// import styled from '@emotion/styled';

// import InformBoxContent from '../StudentContent';

// import Icon from '@/components/common/Icon';
// import { useFetchMyLocker } from '@/query/locker';
// import { UserResponse } from '@/types/user';

// const Student = ({ user }: { user: UserResponse }) => {
//   const { name, id } = user;
//   const { myLocker } = useFetchMyLocker(id);
//   // const myLocker = user.locker_id # 유저한테 락커 정보 받는 거로 리펙토링 여부 결정 필요.

//   return (
//     <Styled.Container>
//       <Styled.LockerInfo>
//         <Icon iconName='locker' size='150' hasCursor={false} />
//       </Styled.LockerInfo>
//       <InformBoxContent name={name} id={id} locker={myLocker} />
//     </Styled.Container>
//   );
// };

// Student.Skeleton = function Student() {
//   const theme = useTheme();

//   return (
//     <Styled.SkeletonWrapper>
//       <Icon iconName='nothing' size='100' color={theme.colors.grey_200} hasCursor={false} />
//       <span style={{ color: theme.colors.grey_200 }}>로그인 후 사용할 수 있습니다!</span>
//     </Styled.SkeletonWrapper>
//   );
// };

// export default Student;

// const Styled = {
//   Container: styled.div`
//     display: grid;
//     grid-template-rows: 350px 1fr;

//     width: 100%;
//     height: 450px;

//     background-color: ${({ theme }) => theme.colors.white_300};
//     border: 1px solid ${({ theme }) => theme.colors.light_grey_100};
//     border-radius: 5px;
//   `,

//   LockerInfo: styled.div`
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     align-items: center;
//     width: 100%;
//     height: 100%;
//   `,

//   SkeletonWrapper: styled.div`
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     align-items: center;
//     gap: 30px;

//     width: 100%;
//     height: 450px;

//     background-color: ${({ theme }) => theme.colors.white_300};
//     border: 1px solid ${({ theme }) => theme.colors.light_grey_100};
//     border-radius: 5px;

//     margin-bottom: 30px;
//   `,
// };
