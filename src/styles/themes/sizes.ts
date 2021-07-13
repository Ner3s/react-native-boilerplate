import { FontSizeType, ThemeType, TypeSize } from './types';

const spacings: TypeSize = {
  small: '1.5rem',
  medium: '3rem',
  large: '5rem',
  xl: '10rem',
};

const fontSize: FontSizeType = {
  small: '1.5rem',
  medium: '1.8rem',
  large: '3rem',
  superLarge: '5rem',
  xl: '10rem',
};

export const sizes: Pick<ThemeType, 'font' | 'spacings'> = {
  spacings,
  font: { sizes: fontSize },
};
