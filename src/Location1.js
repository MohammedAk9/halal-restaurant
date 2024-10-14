// Location1.js
import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const Location1 = () => {
  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Box textAlign="center" mb={4}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d428257.5673289317!2d-96.63787587446659!3d33.01004320572064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e9eca854e1a5f%3A0xec99ad50458a009c!2sOpen%20Sesame%20Lebanese%20Grill!5e0!3m2!1sar!2sus!4v1728940899760!5m2!1sar!2sus"
        width="1000"
        height="500"
        style={{ border: "0" }}
        allowfullscreen="true"
        loading="lazy"
      ></iframe>
      </Box>
    </Container>
  );
};

export default Location1;
