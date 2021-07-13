export interface TypeSize {
  readonly small: string;
  readonly medium: string;
  readonly large: string;
  readonly xl: string;
}

export interface FontSizeType extends TypeSize {
  readonly superLarge: string;
}

export interface TypeColor {
  readonly light: string;
  readonly dark: string;
  readonly primary: string;
  readonly secondary: string;
}

export interface FontStyle {
  readonly sizes: FontSizeType;
}

export interface ThemeType {
  readonly spacings: TypeSize;
  readonly font: FontStyle;
  readonly colors: TypeColor;
}
