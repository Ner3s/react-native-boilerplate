import React, { ReactElement, ReactNode } from 'react';
import { Text } from 'react-native';

import { Container } from './styles';

interface HomeProps {
  children: ReactNode;
}

function Home({ children }: HomeProps): ReactElement {
  return (
    <Container>
      <Text>Home</Text>
      {children}
    </Container>
  );
}

export default Home;
