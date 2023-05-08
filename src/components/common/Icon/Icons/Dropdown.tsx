import { SVGProps } from 'react';

const Dropdown = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      className='MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiSelect-icon MuiSelect-iconOutlined css-1636szt'
      focusable='false'
      aria-hidden='true'
      viewBox='0 0 24 24'
      data-testid='ArrowDropDownIcon'
      {...props}
    >
      <path d='M7 10l5 5 5-5z' />
    </svg>
  );
};

export default Dropdown;
