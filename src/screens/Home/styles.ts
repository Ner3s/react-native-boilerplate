import Constants from 'expo-constants';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding-top: ${Constants.statusBarHeight}px;
  width: 100%;
  height: 100%;
`;

export const Text = styled.Text`
  color: ${({ theme }) => theme.colors.dark};
`;
