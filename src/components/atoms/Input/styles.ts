import styled from 'styled-components/native';

interface IContainerProps {
  isFocused?: boolean;
  isErrored?: boolean;
  isDisabled?: boolean;
}

export const Container = styled.View<IContainerProps>`
  flex: 1;
`;

export const TInput = styled.TextInput`
  flex: 1;
  border: 1px solid ${({ theme }) => theme.colors.primary};
`;
