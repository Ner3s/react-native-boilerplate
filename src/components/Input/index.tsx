import React, { ReactElement, useRef } from 'react';
import { TextInputProps, TextStyle } from 'react-native';

import * as S from './styles';

interface IInputProps extends TextInputProps {
  // name: string;
  width?: string | number;
  height?: string | number;
  placeholderTextColor?: string;
  multiline?: boolean;
  disabled?: boolean;
  style?: TextStyle;
}

function Input({
  width,
  height,
  placeholderTextColor,
  multiline,
  disabled,
  style,
  ...rest
}: IInputProps): ReactElement {
  const inputRef = useRef(null);

  return (
    <S.Container
      style={{ width: width ?? '100%', height: height ?? 45 }}
      isDisabled={disabled}
    >
      <S.TInput
        ref={inputRef}
        multiline={multiline}
        placeholderTextColor={placeholderTextColor ?? '#555'}
        {...rest}
      />
    </S.Container>
  );
}

export default Input;
