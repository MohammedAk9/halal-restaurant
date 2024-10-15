// src/components/FishAndChips.js

import React from 'react';
import { Box, Typography, Button, Grid, Card, CardMedia, CardContent } from '@mui/material';

const ViewRecipe = () => {
  // Sample data for the recipe
  const recipe = {
    title: "Fish and Chips",
    description: "Crispy fried fish served with golden fries, a classic British dish.",
    cookingTime: "Prep time: 20 mins | Cook time: 15 mins",
    ingredients: [
      "2 large white fish fillets (like cod or haddock)",
      "1 cup all-purpose flour",
      "1 tsp baking powder",
      "1/2 tsp salt",
      "1 cup cold sparkling water",
      "Oil for frying",
      "4 large potatoes, cut into fries",
      "Salt and pepper to taste",
      "Lemon wedges for serving"
    ],
    instructions: [
      {
        step: "1",
        text: "Preheat the oil in a deep fryer or large pot.",
        image: "https://www.thechoppingblock.com/hs-fs/hubfs/Blog/deep%20frying.png?width=1200&name=deep%20frying.png" // replace with actual image path
      },
      {
        step: "2",
        text: "In a bowl, mix flour, baking powder, and salt. Gradually add sparkling water to make a batter.",
        image: "https://www.bhg.com/thmb/eevliqTLllXVSvmP06hhXnBX7HM=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/make-well-mix-dry-ingredients-spatula-59QitfMh4lJB32_kenYo5V-56d742251f064aeeaed7fc82e6dad0f9.jpg" // replace with actual image path
      },
      {
        step: "3",
        text: "Dip the fish fillets into the batter and carefully place them in the hot oil.",
        image: "https://themacphersondiaries.co.nz/wp-content/uploads/2022/10/Beer-Batter-Fish-prep-2-1098x1536.jpg" // replace with actual image path
      },
      {
        step: "4",
        text: "Fry the fish for 4-5 minutes until golden brown. Remove and drain on paper towels.",
        image: "https://i0.wp.com/elicitfolio.com/wp-content/uploads/2023/01/Southern-Style-Fried-Fish-Recipe-by-Elicit-Folio-5.jpg?w=1500&ssl=1" // replace with actual image path
      },
      {
        step: "5",
        text: "In the same oil, fry the potato fries until golden and crispy. Season with salt and pepper.",
        image: "https://tiffycooks.com/wp-content/uploads/2022/03/FullSizeRender-157-1536x2048.jpg" // replace with actual image path
      },
      {
        step: "6",
        text: "Serve the fish with fries and lemon wedges on the side.",
        image: "https://images.themodernproper.com/billowy-turkey/production/posts/2022/FishandChips_11.jpg?w=1200&q=82&auto=format&fit=crop&dm=1672266407&s=a887e112d17bb684da212d50a2189366" // replace with actual image path
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
