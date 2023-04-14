import { SVGProps } from 'react';

const Locker = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='-4 -4 24 24'
      fill='none'
      {...props}
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M0.25 2C0.25 1.44771 0.697716 1 1.25 1H15.25C15.8023 1 16.25 1.44772 16.25 2V4C16.25 4.55228 15.8023 5 15.25 5V12.5C15.25 13.8807 14.1307 15 12.75 15H3.75C2.36929 15 1.25 13.8807 1.25 12.5V5C0.697715 5 0.25 4.55228 0.25 4V2ZM2.25 5V12.5C2.25 13.3284 2.92157 14 3.75 14H12.75C13.5784 14 14.25 13.3284 14.25 12.5V5H2.25ZM15.25 2H1.25V4H15.25V2ZM5.25 7.5C5.25 7.22386 5.47386 7 5.75 7H10.75C11.0261 7 11.25 7.22386 11.25 7.5C11.25 7.77614 11.0261 8 10.75 8H5.75C5.47386 8 5.25 7.77614 5.25 7.5Z'
        fill='currentColor'
        strokeWidth='0'
      />
    </svg>
  );
};

export default Locker;
