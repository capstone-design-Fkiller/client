import styled from '@emotion/styled';

interface DateBoxProps {
  label: string;
  date: string;
}

const DateBox = (props: DateBoxProps) => {
  const { label, date } = props;

  return (
    <Styled.DateBox>
      <Styled.DateLabel>{label}</Styled.DateLabel>
      <Styled.DateText>{date || ''}</Styled.DateText>
    </Styled.DateBox>
  );
};

export default DateBox;

export const Styled = {
  DateBox: styled.div`
    width: 100%;
    min-height: 46px;
    padding: 10px;

    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

    border: 1px solid ${({ theme }) => theme.colors.light_grey_200};
    border-radius: 5px;
    outline: none;
  `,

  DateText: styled.span`
    font-size: 14px;
  `,

  DateLabel: styled.span`
    position: absolute;
    left: 0;
    top: -20px;

    font-size: 14px;
    color: ${({ theme }) => theme.colors.primary_300};
  `,
};
