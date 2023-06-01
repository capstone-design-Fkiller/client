import styled from '@emotion/styled';

interface LockerInfoProps {
  label: string;
  value: string;
}

const LockerInfo = (props: LockerInfoProps) => {
  const { label, value } = props;

  return (
    <Styled.InfoRow>
      <Styled.InfoLabel>{label}:</Styled.InfoLabel>
      <p>{value}</p>
    </Styled.InfoRow>
  );
};

export default LockerInfo;

const Styled = {
  InfoRow: styled.div`
    display: flex;
    align-items: center;
  `,

  InfoLabel: styled.p`
    font-weight: bold;
    margin-right: 8px;
  `,
};
