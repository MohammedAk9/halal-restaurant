// src/components/ZaatarPie.js

import React from 'react';
import { Box, Typography, Button, Grid, Card, CardMedia, CardContent } from '@mui/material';

const ViewRecipe= () => {
  // Sample data for the recipe
  const recipe = {
    title: "Zaatar Pie",
    description: "A delicious and aromatic pie topped with zaatar and olive oil.",
    cookingTime: "Prep time: 20 mins | Cook time: 30 mins",
    ingredients: [
      "2 cups all-purpose flour",
      "1/2 cup olive oil",
      "1/2 tsp salt",
      "1/2 cup water",
      "1/2 cup zaatar",
      "1/2 cup feta cheese, crumbled",
      "Olive oil for drizzling"
    ],
    instructions: [
      {
        step: "1",
        text: "In a bowl, mix flour, salt, and olive oil. Gradually add water until a dough forms.",
        image: "https://cdn.loveandlemons.com/wp-content/uploads/2023/12/foccacia-bread.jpg" // replace with actual image path
      },
      {
        step: "2",
        text: "Knead the dough on a floured surface until smooth. Let it rest for 15 minutes.",
        image: "https://www.thespruceeats.com/thmb/8jK9HrIxjLqG-eLu5VomGDK02hU=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/close-up-of-hands-kneading-dough-550409903-582f98bc5f9b58d5b1f61c55.jpg" // replace with actual image path
      },
      {
        step: "3",
        text: "Roll out the dough into a thin circle and place it in a pie dish.",
        image: "https://www.thechoppingblock.com/hs-fs/hubfs/Blog/pie%20dough%20rolled%20out.jpg?width=1200&name=pie%20dough%20rolled%20out.jpg" // replace with actual image path
      },
      {
        step: "4",
        text: "Spread the zaatar mixture over the dough and sprinkle feta cheese on top.",
        image: "https://farm4.static.flickr.com/3052/2322219787_95201699e2_b.jpg" // replace with actual image path
      },
      {
        step: "5",
        text: "Bake in a preheated oven at 375°F (190°C) for 25-30 minutes or until golden.",
        image: "https://maureenabood.com/wp-content/uploads/2013/02/Manoushe-2-Maureen-Abood.jpg" // replace with actual image path
      },
      {
        step: "6",
        text: "Remove from oven and drizzle with olive oil before serving.",
        image: "https://www.munatycooking.com/wp-content/uploads/2022/01/Manakeesh-or-Manakish-1.jpg" // replace with actual image path
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
