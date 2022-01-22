import * as React from 'react';
import './App.css';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import ReviewCard from './components/ReviewCard';

function App() {
  return (
    <Container maxWidth="xs">
      <Box mt={5}>
        <ReviewCard />
      </Box>
    </Container>
  );
}

export default App;
