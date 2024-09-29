import React, { useState } from 'react';
import {
  AppBar, Toolbar, IconButton, Typography, Button, Card, CardContent, CardMedia,
  Container, Grid, Box, Avatar, Stack, Paper, Rating
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import TuneIcon from '@mui/icons-material/Tune';
import StarIcon from '@mui/icons-material/Star';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import LabelIcon from '@mui/icons-material/Label';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const restaurants = [
  {
    name: "AL-Baik",
    description: "Fried Chicken · $$ · 0.6 miles away",
    details: "Best Muslim restaurant in Jeddah",
    image: "https://source.unsplash.com/random/restaurant-logo",
    rating: 4.5,
    isFavorite: false
  },
  {
    name: "Uncle Kebab",
    description: "BBQ · $$ · 1.2 miles away",
    details: "Best halal kebab",
    image: "https://source.unsplash.com/random/restaurant-logo",
    rating: 4.0,
    isFavorite: false
  }
];

const App = () => {
  const [favoriteRestaurants, setFavoriteRestaurants] = useState(
    restaurants.map((restaurant) => restaurant.isFavorite)
  );

  const toggleFavorite = (index) => {
    const updatedFavorites = [...favoriteRestaurants];
    updatedFavorites[index] = !updatedFavorites[index];
    setFavoriteRestaurants(updatedFavorites);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      {/* Sidebar */}
      <Box
        sx={{
          width: { xs: 70, sm: 80 },
          height: '100vh',
          backgroundColor: '#f3e5f5',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          py: 4,
          position: 'fixed',
          top: 0,
          left: 0,
        }}
      >
        <IconButton color="primary" sx={{ mb: 2 }}>
          <StarIcon fontSize="large" />
        </IconButton>
        <Typography variant="caption" sx={{ mb: 2 }}>
          Label
        </Typography>
        <IconButton color="primary" sx={{ mb: 2 }}>
          <LabelIcon fontSize="large" />
        </IconButton>
        <Typography variant="caption">Label</Typography>
      </Box>

      {/* Main Content Area */}
      <Box
        sx={{
          flexGrow: 1,
          px: { xs: 2, sm: 3 },
          py: 4,
          marginLeft: { xs: '70px', sm: '80px' }, // Margin to accommodate the sidebar
        }}
      >
        {/* Top Navigation Bar */}
        <AppBar
          position="static"
          color="transparent"
          elevation={0}
          sx={{
            borderBottom: '1px solid #e0e0e0',
            mb: 4,
            justifyContent: 'center',
            alignItems: 'center',
            px: { xs: 1, sm: 3 },
          }}
        >
          <Toolbar sx={{ justifyContent: 'space-between', maxWidth: 'lg', width: '100%', mx: 'auto' }}>
            <IconButton edge="start" color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" sx={{ textAlign: 'center', flexGrow: 1 }}>
              www.Halal-Restaurant.com
            </Typography>
            <Box>
              <IconButton color="inherit">
                <SearchIcon />
              </IconButton>
              <IconButton color="inherit">
                <TuneIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>

        {/* Main Banner Section */}
        <Container maxWidth="lg" sx={{ textAlign: 'center', px: { xs: 0, sm: 3 } }}>
          <Card elevation={1} sx={{ borderRadius: 4, overflow: 'hidden', mb: 4 }}>
            <CardMedia
              component="img"
              height="250"
              image="https://source.unsplash.com/random/restaurant" // Replace with actual image
              alt="Halal Restaurants"
            />
            <CardContent sx={{ textAlign: 'center', p: { xs: 2, sm: 3 } }}>
              <Typography variant="h3" fontWeight="bold">
                Halal Restaurants
              </Typography>
              <Typography variant="subtitle1" color="textSecondary" sx={{ mt: 1, mb: 2 }}>
                <LocationOnIcon fontSize="small" sx={{ mr: 1 }} /> 20 restaurants nearby
              </Typography>
              <Stack direction="row" spacing={2} justifyContent="center">
                <Button variant="contained" color="primary" sx={{ borderRadius: 20, px: 4 }}>
                  Distance
                </Button>
                <Button variant="outlined" color="primary" sx={{ borderRadius: 20, px: 4 }}>
                  Price
                </Button>
              </Stack>
            </CardContent>
          </Card>
        </Container>

        {/* Restaurant List */}
        <Container maxWidth="lg" sx={{ px: { xs: 0, sm: 3 } }}>
          <Grid container spacing={3}>
            {restaurants.map((restaurant, index) => (
              <Grid item xs={12} key={index}>
                <Paper
                  elevation={3}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    p: 2,
                    borderRadius: 4,
                    transition: '0.3s',
                    '&:hover': { boxShadow: 6 },
                  }}
                >
                  <Avatar
                    variant="square"
                    sx={{ width: 80, height: 80, marginRight: 2 }}
                    src={restaurant.image}
                    alt={restaurant.name}
                  />
                  <Box sx={{ flexGrow: 1 }}>
                    <Typography variant="h6" fontWeight="bold">
                      {restaurant.name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      {restaurant.description}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      {restaurant.details}
                    </Typography>
                    <Rating
                      name="read-only"
                      value={restaurant.rating}
                      precision={0.5}
                      readOnly
                      sx={{ mt: 1 }}
                    />
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <IconButton
                      onClick={() => toggleFavorite(index)}
                      color="primary"
                    >
                      {favoriteRestaurants[index] ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                    </IconButton>
                  </Box>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>

        {/* Footer */}
        <Box
          sx={{
            backgroundColor: '#f3e5f5',
            p: 2,
            mt: 4,
            textAlign: 'center',
            borderTop: '1px solid #e0e0e0',
          }}
        >
          <Typography variant="body2" color="textSecondary">
            © 2024 Halal Restaurants. All rights reserved.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default App;
