import styled from '@emotion/styled';

interface ProfileInfoProps {
  label: string;
  value: string;
}

const ProfileInfo = (props: ProfileInfoProps) => {
  const { label, value } = props;

  return (
    <Styled.InfoRow>
      <Styled.InfoLabel>{label}:</Styled.InfoLabel>
      <p>{value}</p>
    </Styled.InfoRow>
  );
};

export default ProfileInfo;

const Styled = {
  InfoRow: styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 8px;
  `,

  InfoLabel: styled.p`
    font-weight: bold;
    margin-right: 8px;
  `,
};
