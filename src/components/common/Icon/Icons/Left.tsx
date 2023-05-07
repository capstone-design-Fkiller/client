import { SVGProps } from 'react';

const Left = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width='21'
      height='21'
      viewBox='0 0 21 21'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M13.7979 4.49902L7.79785 10.499L13.7979 16.499'
        stroke='#0C0C0C'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default Left;
