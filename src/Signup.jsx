import React, { useState } from 'react';
import { Box, Container, TextField, Button, Typography, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    // Placeholder for signup logic (e.g., API call)
    console.log("Signup attempt:", { email, password });
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 8 }}>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
      >
        <Typography variant="h4" fontWeight="bold" textAlign="center">
          Sign Up
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
        <TextField
          label="Confirm Password"
          type="password"
          variant="outlined"
          fullWidth
          required
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        <Button variant="contained" color="primary" type="submit" fullWidth>
          Sign Up
        </Button>

        <Typography variant="body2" textAlign="center">
          Already have an account? <Link component={RouterLink} to="/login">Login</Link>
        </Typography>
      </Box>
    </Container>
  );
};

export default Signup;
