import React, { ReactElement, ReactNode } from 'react';
import { Text } from 'react-native';

import { Container } from './styles';

interface ProfileProps {
  children: ReactNode;
}

function Profile({ children }: ProfileProps): ReactElement {
  return (
    <Container>
      <Text>Profile</Text>
      {children}
    </Container>
  );
}

export default Profile;
