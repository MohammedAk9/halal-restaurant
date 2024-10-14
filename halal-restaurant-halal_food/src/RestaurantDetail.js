import React from 'react';
import { useParams } from 'react-router-dom';
import { Box, Typography, Card, CardContent, CardMedia, Container, Button } from '@mui/material';

const restaurants = [
  {
    name: "AL-Baik",
    description: "Fried Chicken · $$ · 0.6 miles away",
    details: "Best Muslim restaurant in Jeddah",
    image: "https://source.unsplash.com/random/restaurant-logo",
    rating: 4.5,
    userRatings: 100
  },
  {
    name: "Uncle Kebab",
    description: "BBQ · $$ · 1.2 miles away",
    details: "Best halal kebab",
    image: "https://source.unsplash.com/random/restaurant-logo",
    rating: 4.0,
    userRatings: 50
  }
];

const RestaurantDetail = () => {
  // Get the restaurant ID from the URL
  const { id } = useParams();
  const restaurant = restaurants[id];

  return (
    <Container sx={{ mt: 4 }}>
      <Card>
        <CardMedia
          component="img"
          height="350"
          image={restaurant.image}
          alt={restaurant.name}
        />
        <CardContent>
          <Typography variant="h4" fontWeight="bold">
            {restaurant.name}
          </Typography>
          <Typography variant="body1" color="textSecondary" sx={{ mt: 1 }}>
            {restaurant.description}
          </Typography>
          <Typography variant="body2" sx={{ mt: 2 }}>
            {restaurant.details}
          </Typography>
          <Typography variant="h6" sx={{ mt: 2 }}>
            Rating: {restaurant.rating} ({restaurant.userRatings} ratings)
          </Typography>
          <Box sx={{ mt: 4 }}>
            <Button variant="contained" color="primary">
              Order Now
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
};

export default RestaurantDetail;
