import styled from '@emotion/styled';

interface LockerLabelProps {
  label: string;
  value: string;
}

const LockerLabel = (props: LockerLabelProps) => {
  const { label, value } = props;

  return (
    <Styled.InfoRow>
      <Styled.InfoLabel>{label}:</Styled.InfoLabel>
      <p>{value}</p>
    </Styled.InfoRow>
  );
};

export default LockerLabel;

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
