import styled from '@emotion/styled';

export const Separator = styled.hr`
  width: 100%;
  height: 1px;

  border: 0;
  background: ${({ theme }) => theme.colors.light_grey_200};
`;
