import Bell from './Bell';
import Box from './Box';
import Dropdown from './Dropdown';
import Email from './Email';
import Home from './Home';
import Left from './Left';
import Locker from './Locker';
import Megaphone from './Megaphone';
import Nothing from './Nothing';
import Right from './Right';
import Share from './Share';
import Trashcan from './Trashcan';
import User from './User';

const iconName = {
  home: Home,
  email: Email,
  bell: Bell,
  share: Share,
  user: User,
  box: Box,
  megaphone: Megaphone,
  left: Left,
  right: Right,
  nothing: Nothing,
  dropdown: Dropdown,
  locker: Locker,
  trashcan: Trashcan,
};

export type IconNames = keyof typeof iconName;

export default iconName;
