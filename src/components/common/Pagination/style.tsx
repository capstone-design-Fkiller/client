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
  font-size: 1rem;
  padding: 0.25rem 0.5rem;
  margin: 0 0.25rem;
  border-radius: 0.25rem;
  color: ${(props) => (props.isActive ? 'black' : 'gray')};
  cursor: ${(props) => (props.isClickable ? 'pointer' : 'default')};
`;