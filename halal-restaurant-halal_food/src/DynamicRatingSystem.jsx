import React, { useState } from 'react';
import { Rating, Typography, Box } from '@mui/material';

const DynamicRatingSystem = () => {
  // State to store the selected rating value
  const [ratingValue, setRatingValue] = useState(0);

  // Function to handle the rating change
  const handleRatingChange = (event, newValue) => {
    setRatingValue(newValue);
  };

  return (
    <Box
      sx={{
        width: 200,
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        marginTop: '2rem',
      }}
    >
      <Typography component="legend">Rate this product:</Typography>
      <Rating
        name="user-rating"
        value={ratingValue}
        onChange={handleRatingChange}
        precision={0.5}
      />
      <Typography variant="body2" color="text.secondary">
        {ratingValue !== null ? `You rated: ${ratingValue} stars` : 'No rating yet'}
      </Typography>
    </Box>
  );
};

export default DynamicRatingSystem;
