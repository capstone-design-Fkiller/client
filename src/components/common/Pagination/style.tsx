import styled from '@emotion/styled';

export const Pagination = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  margin-top: 30px;
`;

interface PageNumberProps {
  isActive?: boolean;
  isClickable?: boolean;
}

export const PageNumber = styled.span<PageNumberProps>`
  font-size: 12px;
  padding: 5px 10px;
  margin: 0 5px;
  border-radius: 5px;
  color: ${(props) => (props.isActive ? 'black' : 'gray')};
  cursor: ${(props) => (props.isClickable ? 'pointer' : 'default')};
`;