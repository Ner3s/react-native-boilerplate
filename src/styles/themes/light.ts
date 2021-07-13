import { sizes } from './sizes';
import { ThemeType } from './types';

const light: ThemeType = {
  colors: {
    light: '#FFFFFF',
    dark: '#000000',
    primary: '#F4F4F4',
    secondary: '#222222',
  },
  ...sizes,
};

export default light;
