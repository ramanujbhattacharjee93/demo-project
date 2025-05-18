import React, { Suspense } from 'react';
import { AppBar, Toolbar, Typography, Button, Container, Card, CardContent, Box } from '@mui/material';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Link from '@mui/material/Link';
import Divider from '@mui/material/Divider';

const FacebookIcon = React.lazy(() => import('@mui/icons-material/Facebook'));
const GoogleIcon = React.lazy(() => import('@mui/icons-material/Google'));
const AppleIcon = React.lazy(() => import('@mui/icons-material/Apple'));

const courses = [
  { id: 1, title: 'React for Beginners', description: 'Learn the basics of React and build interactive UIs.' },
  { id: 2, title: 'Advanced TypeScript', description: 'Deep dive into TypeScript for scalable applications.' },
  { id: 3, title: 'UI Design with Material UI', description: 'Create beautiful UIs using Material UI.' },
];

function SignUpForm() {
  const [checked, setChecked] = React.useState(false);

  return (
    <Card sx={{ maxWidth: 400, mx: 'auto', mt: 6, p: 2 }}>
      <CardContent>
        <Typography variant="h5" align="center" gutterBottom>
          Sign Up
        </Typography>
        <Box component="form" noValidate autoComplete="off" sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <TextField label="First Name" variant="outlined" required fullWidth />
          <TextField label="Last Name" variant="outlined" required fullWidth />
          <TextField label="Email" type="email" variant="outlined" required fullWidth />
          <TextField label="Create Password" type="password" variant="outlined" required fullWidth />
          <FormControlLabel
            control={<Checkbox checked={checked} onChange={e => setChecked(e.target.checked)} required />}
            label={<span>I agree to the <Link href="#">Privacy Policy</Link></span>}
          />
          <Button variant="contained" color="primary" fullWidth sx={{ mt: 1 }} disabled={!checked}>
            Sign Up
          </Button>
        </Box>
        <Box sx={{ textAlign: 'center', mt: 2 }}>
          <Typography variant="body2">
            Already a member?{' '}
            <Link href="#">Login</Link>
          </Typography>
        </Box>
        <Divider sx={{ my: 2 }}>or continue with</Divider>
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
          <Suspense fallback={null}>
            <Button variant="outlined" color="inherit" sx={{ minWidth: 0, p: 1 }}><FacebookIcon color="primary" /></Button>
            <Button variant="outlined" color="inherit" sx={{ minWidth: 0, p: 1 }}><GoogleIcon sx={{ color: '#EA4335' }} /></Button>
            <Button variant="outlined" color="inherit" sx={{ minWidth: 0, p: 1 }}><AppleIcon sx={{ color: 'black' }} /></Button>
          </Suspense>
        </Box>
      </CardContent>
    </Card>
  );
}

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
        <SignUpForm />
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
