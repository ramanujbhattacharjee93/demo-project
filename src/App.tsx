import React from 'react';
import { Container, Typography, Button } from '@mui/material';

function App() {
  return (
    <Container maxWidth="sm" sx={{ mt: 8, textAlign: 'center' }}>
      <Typography variant="h2" gutterBottom>
        Welcome to Your Material UI Starter
      </Typography>
      <Typography variant="body1" gutterBottom>
        This is a clean React + TypeScript + Material UI project. Start building your app!
      </Typography>
      <Button variant="contained" color="primary" size="large">
        Get Started
      </Button>
    </Container>
  );
}

export default App;
