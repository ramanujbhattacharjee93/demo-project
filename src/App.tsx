import React from 'react';
import { AppBar, Toolbar, Typography, Button, Container, Card, CardContent, Box } from '@mui/material';

const courses = [
  { id: 1, title: 'React for Beginners', description: 'Learn the basics of React and build interactive UIs.' },
  { id: 2, title: 'Advanced TypeScript', description: 'Deep dive into TypeScript for scalable applications.' },
  { id: 3, title: 'UI Design with Material UI', description: 'Create beautiful UIs using Material UI.' },
];

function App() {
  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Online Courses
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <Container maxWidth="md" sx={{ mt: 6 }}>
        <Typography variant="h3" align="center" gutterBottom>
          Welcome to Online Courses
        </Typography>
        <Typography variant="h6" align="center" color="text.secondary" paragraph>
          Enroll in high-quality courses and boost your skills today!
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3, justifyContent: 'center', mt: 4 }}>
          {courses.map((course) => (
            <Card key={course.id} sx={{ width: 300, display: 'flex', flexDirection: 'column', m: 1 }}>
              <CardContent>
                <Typography variant="h5" gutterBottom>{course.title}</Typography>
                <Typography variant="body2" color="text.secondary">{course.description}</Typography>
              </CardContent>
              <Box sx={{ flexGrow: 1 }} />
              <Button variant="contained" color="primary" sx={{ m: 2 }}>
                Enroll Now
              </Button>
            </Card>
          ))}
        </Box>
      </Container>
    </Box>
  );
}

export default App;
