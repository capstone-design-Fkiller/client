import Bell from './Bell';
import Email from './Email';
import Home from './Home';

const iconName = {
  home: Home,
  email: Email,
  bell: Bell,
};

export type IconNames = keyof typeof iconName;

export default iconName;
