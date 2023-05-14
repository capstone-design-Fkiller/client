import { MouseEvent, useState } from 'react';

import * as Styled from './style';
import Icon from '../Icon';

interface SelectProps {
  value: string;
  list: readonly string[];
  handleChange: (e: MouseEvent<HTMLLIElement>) => void;
}

const Select = (props: SelectProps) => {
  const { value, list, handleChange } = props;
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOpen = () => setIsOpen(!isOpen);

  return (
    <Styled.DropdownWrapper onClick={handleOpen}>
      <Styled.Label>
        {value}
        <Icon iconName='dropdown' className={isOpen ? 'flipped' : 'non-flipped'} />
      </Styled.Label>
      <Styled.DropdownList isOpen={isOpen}>
        {list.map(dropdown => (
          <Styled.DropdownItem key={dropdown} onClick={handleChange}>
            {dropdown}
          </Styled.DropdownItem>
        ))}
      </Styled.DropdownList>
    </Styled.DropdownWrapper>
  );
};

export default Select;
