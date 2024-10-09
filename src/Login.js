import React, { useState } from 'react';
import { Box, Container, TextField, Button, Typography, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder for login logic (e.g., API call)
    console.log("Login attempt:", { email, password });
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
