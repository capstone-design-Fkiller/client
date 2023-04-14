import { SVGProps } from 'react';

const Email = (props: SVGProps<SVGSVGElement>) => {
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
        d='M19.1998 8.75V16.25C19.1998 16.7473 19.0102 17.2242 18.6726 17.5758C18.335 17.9275 17.8772 18.125 17.3998 18.125H6.5998C6.12241 18.125 5.66458 17.9275 5.32701 17.5758C4.98945 17.2242 4.7998 16.7473 4.7998 16.25V8.75'
        stroke='#0C0C0C'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M19.1998 8.75C19.1998 8.25272 19.0102 7.77581 18.6726 7.42417C18.335 7.07254 17.8772 6.875 17.3998 6.875H6.5998C6.12241 6.875 5.66458 7.07254 5.32701 7.42417C4.98945 7.77581 4.7998 8.25272 4.7998 8.75L11.0458 12.8125C11.3319 12.9987 11.6624 13.0975 11.9998 13.0975C12.3372 13.0975 12.6677 12.9987 12.9538 12.8125L19.1998 8.75Z'
        stroke='#0C0C0C'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default Email;
