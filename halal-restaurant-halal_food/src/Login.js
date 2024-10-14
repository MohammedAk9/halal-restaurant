import React, { useState } from 'react';
import { Box, Container, TextField, Button, Typography, Link } from '@mui/material';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebase'; // Import Firebase auth

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/'); // Redirect to home page on successful login
    } catch (error) {
      setError(error.message); // Handle any authentication errors
    }
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 8 }}>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
      >
        <Typography variant="h4" fontWeight="bold" textAlign="center">
          Login
        </Typography>

        {error && <Typography color="error" textAlign="center">{error}</Typography>}

        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          fullWidth
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button variant="contained" color="primary" type="submit" fullWidth>
          Login
        </Button>

        <Typography variant="body2" textAlign="center">
          Don't have an account? <Link component={RouterLink} to="/signup">Sign up</Link>
        </Typography>
      </Box>
    </Container>
  );
};

export default Login;
