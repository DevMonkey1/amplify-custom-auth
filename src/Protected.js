import React from 'react';
import protectedRoute from './protectedRoute';
import Container from './Container';

function Protected() {
  return (
    <Container>
      <h1>Protected route</h1>
    </Container>
  );
}

export default protectedRoute(Protected);
