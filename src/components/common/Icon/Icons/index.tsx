import Bell from './Bell';
import Dropdown from './Dropdown';
import Email from './Email';
import Home from './Home';
import Left from './Left';
import Locker from './Locker';
import Megaphone from './Megaphone';
import Nothing from './Nothing';
import Right from './Right';
import Share from './Share';
import User from './User';

const iconName = {
  home: Home,
  email: Email,
  bell: Bell,
  share: Share,
  user: User,
  locker: Locker,
  megaphone: Megaphone,
  left: Left,
  right: Right,
  nothing: Nothing,
  dropdown: Dropdown,
};

export type IconNames = keyof typeof iconName;

export default iconName;
