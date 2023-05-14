import styled from '@emotion/styled';

export const Pagination = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`;

export const PageNumber = styled.span<{ isActive: boolean }>`
  font-size: 14px;
  padding: 0 10px;

  cursor: pointer;

  color: ${({ isActive, theme }) => (isActive ? theme.colors.primary_200 : theme.colors.black)};
  font-weight: ${({ isActive }) => isActive && 600};
`;
