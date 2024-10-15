import React from 'react';
import { Box, Typography, Button, Grid, Card, CardMedia, CardContent } from '@mui/material';

const ViewRecipe = () => {
  // Sample data for the recipe
  const recipe = {
    title: "Hummus",
    description: "Creamy and flavorful hummus made with chickpeas.",
    cookingTime: "Prep time: 15 mins | Cook time: 0 mins",
    ingredients: [
      "1 can (400g) chickpeas, drained and rinsed",
      "1/4 cup tahini",
      "1/4 cup olive oil",
      "2 tbsp lemon juice",
      "1 clove garlic, minced",
      "Salt to taste",
      "Paprika for garnish"
    ],
    instructions: [
      {
        step: "1",
        text: "Blend chickpeas, tahini, olive oil, lemon juice, and garlic until smooth.",
        image: "https://cleananddelicious.com/wp-content/uploads/2012/05/5-minute-hummus-process2-1200x800.jpg" // replace with actual image path
      },
      {
        step: "2",
        text: "Taste and add salt as needed.",
        image: "https://staticcookist.akamaized.net/wp-content/uploads/sites/22/2020/12/iStock-1156822822.jpg?im=AspectCrop=(16,9);Resize,width=570;" // replace with actual image path
      },
      {
        step: "3",
        text: "Serve with a drizzle of olive oil and sprinkle paprika on top.",
        image: "https://www.onceuponachef.com/images/2012/07/Hummus-1200x1553.jpg" // replace with actual image path
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

