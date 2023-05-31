import { PropsWithChildren, ReactElement } from 'react';

interface CustomSuspenseProps extends PropsWithChildren {
  isLoading: boolean;
  fallback: ReactElement;
}

const CustomSuspense = (props: CustomSuspenseProps) => {
  const { isLoading, fallback, children } = props;

  if (isLoading) return fallback;

  return <>{children}</>;
};

export default CustomSuspense;
