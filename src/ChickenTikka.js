import React from 'react';
import { Box, Typography, Button, Grid, Card, CardMedia, CardContent } from '@mui/material';

const ViewRecipe = () => {
  // Sample data for the recipe
  const recipe = {
    title: "Chicken Tikka Kebab",
    description: "Delicious and spicy chicken kebabs marinated in yogurt and spices.",
    cookingTime: "Prep time: 30 mins | Cook time: 15 mins",
    ingredients: [
      "500g chicken breast, cubed",
      "1 cup yogurt",
      "2 tbsp lemon juice",
      "2 tbsp tikka masala",
      "1 tsp salt",
      "1 tsp pepper",
      "Skewers (for grilling)"
    ],
    instructions: [
      {
        step: "1",
        text: "Marinate the chicken in yogurt and spices.",
        image: "https://www.foodandwine.com/thmb/4wrUgUeO4SoPtswFQutBjBDSGqA=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/FAW-recipes-yogurt-marinated-grilled-chicken-step-01-dd70bf03c9e942308dd9255e5db8e22b.jpg" // replace with actual image path
      },
      {
        step: "2",
        text: "Skewer the marinated chicken",
        image: "https://savaskitchen.com/wp-content/uploads/2024/01/baked-chicken-kebobs-skewering.jpg." // replace with actual image path
      },
      {
        step: "3",
        text: "Grill the skewers until cooked through.",
        image: "https://untoldrecipesbynosheen.com/wp-content/uploads/2023/05/chicken-tikka-3-scaled.jpg" // replace with actual image path
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
                height="140"
                image={instruction.image} // replace with actual image path
                alt={`Step ${instruction.step}`}
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
};

export default ViewRecipe;
