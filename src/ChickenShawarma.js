import React from 'react';
import { Box, Typography, Button, Grid, Card, CardMedia, CardContent } from '@mui/material';

const ViewRecipe = React.memo(() => {
  // Sample data for the recipe
  const recipe = {
    title: "Chicken Shawarma",
    description: "Flavorful and tender chicken shawarma, seasoned with Middle Eastern spices.",
    cookingTime: "Prep time: 20 mins | Cook time: 30 mins",
    ingredients: [
      "500g chicken thighs, sliced",
      "2 tbsp shawarma spice mix",
      "3 tbsp olive oil",
      "2 tbsp lemon juice",
      "Salt to taste",
      "Pita bread or wraps",
      "Tahini sauce, for serving",
      "Fresh vegetables (lettuce, tomato, onion) for garnish"
    ],
    instructions: [
      {
        step: "1",
        text: "Marinate the chicken with shawarma spice mix, olive oil, lemon juice, and salt for at least 1 hour.",
        image: "https://www.recipetineats.com/tachyon/2017/01/Chicken-Shawarma-ingredients-1.jpg?resize=900%2C643&zoom=1" // replace with actual image path
      },
      {
        step: "2",
        text: "Cook the marinated chicken in a skillet over medium heat until fully cooked, about 15-20 minutes.",
        image: "https://www.recipetineats.com/tachyon/2017/01/Chicken-Shawarma-steps.jpg?resize=900%2C755&zoom=1" // replace with actual image path
      },
      {
        step: "3",
        text: "Slice the cooked chicken and serve in pita bread with tahini sauce and fresh vegetables.",
        image: "https://www.recipetineats.com/tachyon/2014/12/Chicken-Shawarma_1.jpg?resize=964%2C1350&zoom=1" // replace with actual image path
      }
    ]
  };

  const handleShare = () => {
    // Logic for sharing the recipe
    alert(`Share the recipe for ${recipe.title}`);
  };

  return (
    <Box sx={{ maxWidth: 'lg', mx: 'auto', p: 3 }}>
      <Typography variant="h4" gutterBottom>
        {recipe.title}
      </Typography>
      <Typography variant="body1" gutterBottom>
        {recipe.description}
      </Typography>
      <Typography variant="body2" color="textSecondary" gutterBottom>
        {recipe.cookingTime}
      </Typography>

      <Typography variant="h6" sx={{ mt: 3 }}>
        Ingredients:
      </Typography>
      <ul>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>
            <Typography variant="body2">{ingredient}</Typography>
          </li>
        ))}
      </ul>

      <Typography variant="h6" sx={{ mt: 3 }}>
        Instructions:
      </Typography>
      <Grid container spacing={2}>
        {recipe.instructions.map((instruction) => (
          <Grid item xs={12} sm={4} key={instruction.step}>
              <Card>
              <CardMedia
                component="img"
                image={instruction.image} // replace with actual image path
                alt={`Step ${instruction.step}`}
                sx={{
                  height: 200, // Adjust height as needed
                  width: '100%',
                  objectFit: 'cover', // Fill the card without cropping
                }}
              />
              <CardContent>
                <Typography variant="body1">{instruction.text}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Button variant="contained" color="primary" sx={{ mt: 3 }} onClick={handleShare}>
        Share Recipe
      </Button>
    </Box>
  );
});

export default ViewRecipe;
