import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import {
  AppBar, Toolbar, IconButton, Typography, Button, Card, CardContent, CardMedia,
  Container, Grid, Box, Avatar, Stack, Paper, Rating, TextField
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import TuneIcon from '@mui/icons-material/Tune';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import StarIcon from '@mui/icons-material/Star';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import RestaurantDetail from './RestaurantDetail';
import Login from './Login';  // Import Login page
import Signup from './Signup';  // Import Signup page

// Mock restaurant data
const initialRestaurants = [
  {
    name: "AL-Baik",
    description: "Fried Chicken · $$ · 0.6 miles away",
    details: "Best Muslim restaurant in Jeddah",
    image: "https://source.unsplash.com/random/restaurant-logo",
    rating: 4.5,
    userRatings: 100,
    isFavorite: false
  },
  {
    name: "Uncle Kebab",
    description: "BBQ · $$ · 1.2 miles away",
    details: "Best halal kebab",
    image: "https://source.unsplash.com/random/restaurant-logo",
    rating: 4.0,
    userRatings: 50,
    isFavorite: false
  }
];

const App = () => {
  const [restaurants, setRestaurants] = useState(initialRestaurants);
  const [favoriteRestaurants, setFavoriteRestaurants] = useState(
    initialRestaurants.map((restaurant) => restaurant.isFavorite)
  );
  const [searchQuery, setSearchQuery] = useState("");
  const [userRating, setUserRating] = useState(restaurants.map(() => null));

  const toggleFavorite = (index) => {
    const updatedFavorites = [...favoriteRestaurants];
    updatedFavorites[index] = !updatedFavorites[index];
    setFavoriteRestaurants(updatedFavorites);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleRatingChange = (newRating, index) => {
    const updatedRestaurants = [...restaurants];
    const totalRatings = updatedRestaurants[index].userRatings + 1;
    const newAverageRating =
      (updatedRestaurants[index].rating * updatedRestaurants[index].userRatings + newRating) /
      totalRatings;

    updatedRestaurants[index].rating = parseFloat(newAverageRating.toFixed(1));
    updatedRestaurants[index].userRatings = totalRatings;
    setRestaurants(updatedRestaurants);

    const updatedUserRating = [...userRating];
    updatedUserRating[index] = newRating;
    setUserRating(updatedUserRating);
  };

  const filteredRestaurants = restaurants.filter((restaurant) =>
    restaurant.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Router>
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
        </Box>

        {/* Main Content Area */}
        <Box
          sx={{
            flexGrow: 1,
            px: { xs: 2, sm: 3 },
            py: 4,
            marginLeft: { xs: '70px', sm: '80px' },
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
              <TextField
                variant="outlined"
                placeholder="Search"
                size="small"
                value={searchQuery}
                onChange={handleSearchChange}
                sx={{ mr: 2, width: 200 }}
              />
              <IconButton color="inherit">
                <TuneIcon />
              </IconButton>

              {/* Login and Signup Buttons */}
              <Box sx={{ display: 'flex', gap: 1 }}>
                <Button variant="outlined" color="inherit" component={Link} to="/login">
                  Login
                </Button>
                <Button variant="contained" color="primary" component={Link} to="/signup">
                  Sign Up
                </Button>
              </Box>
            </Toolbar>
          </AppBar>

          <Routes>
            {/* Home Page (Restaurant List) */}
            <Route
              path="/"
              element={
                <Container maxWidth="lg" sx={{ px: { xs: 0, sm: 3 } }}>
                  {/* Main Banner Section */}
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

                  {/* Restaurant List */}
                  <Grid container spacing={3}>
                    {filteredRestaurants.map((restaurant, index) => (
                      <Grid item xs={12} key={index}>
                        <Link to={`/restaurant/${index}`} style={{ textDecoration: 'none' }}>
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

                              {/* Display average rating */}
                              <Rating
                                name={`read-only-${index}`}
                                value={restaurant.rating}
                                precision={0.1}
                                readOnly
                                sx={{ mt: 1 }}
                              />

                              {/* User rating interaction */}
                              <Rating
                                name={`user-rating-${index}`}
                                value={userRating[index]}
                                onChange={(event, newValue) => handleRatingChange(newValue, index)}
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
                        </Link>
                      </Grid>
                    ))}
                  </Grid>
                </Container>
              }
            />

            {/* Restaurant Detail Page */}
            <Route path="/restaurant/:id" element={<RestaurantDetail />} />

            {/* Login (Sign In) Page */}
            <Route path="/login" element={<Login />} />

            {/* Signup (Sign Up) Page */}
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </Box>
      </Box>
    </Router>
  );
};

export default App;
