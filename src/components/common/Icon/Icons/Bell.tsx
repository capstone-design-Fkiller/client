import { SVGProps } from 'react';

const Bell = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M11.5176 18.7393C11.5989 19.0162 11.7677 19.2593 11.9987 19.4323C12.2298 19.6053 12.5106 19.6988 12.7992 19.6988C13.0878 19.6988 13.3687 19.6053 13.5997 19.4323C13.8308 19.2593 13.9996 19.0162 14.0809 18.7393'
        stroke='#0C0C0C'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M12.7979 6.73888V5.29883'
        stroke='#0C0C0C'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M12.7973 6.73926C14.0704 6.73926 15.2914 7.24499 16.1916 8.1452C17.0918 9.04541 17.5975 10.2664 17.5975 11.5394C17.5975 16.049 18.5575 16.8196 18.5575 16.8196H7.03711C7.03711 16.8196 7.99715 15.5933 7.99715 11.5394C7.99715 10.2664 8.50288 9.04541 9.40309 8.1452C10.3033 7.24499 11.5242 6.73926 12.7973 6.73926V6.73926Z'
        stroke='#0C0C0C'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default Bell;
