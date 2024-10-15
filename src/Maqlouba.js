// src/components/Maqlouba.js

import React from 'react';
import { Box, Typography, Button, Grid, Card, CardMedia, CardContent } from '@mui/material';

const Maqlouba = () => {
  // Sample data for the recipe
  const recipe = {
    title: "Maqlouba",
    description: "A delicious upside-down rice dish with layers of eggplant, chicken, and spices.",
    cookingTime: "Prep time: 30 mins | Cook time: 60 mins",
    ingredients: [
      "1 kg chicken, cut into pieces",
      "2 cups rice, soaked for 30 minutes",
      "1 large eggplant, sliced",
      "1 large tomato, sliced",
      "1 onion, chopped",
      "4 cups chicken broth",
      "2 tsp allspice",
      "Salt and pepper to taste",
      "Vegetable oil for frying"
    ],
    instructions: [
      {
        step: "1",
        text: "Fry the eggplant slices in oil until golden brown.",
        image: "https://www.allrecipes.com/thmb/VbQObnTGcEHeC-KrMvh7SQdQ2gc=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/AR-222448-easy-fried-eggplant-DDMFS-Step-3-ea4fbaa0834e4c1d9f1195c6c0e90393.jpg" // replace with actual image path
      },
      {
        step: "2",
        text: "In a pot, layer the chicken, fried eggplant, and soaked rice.",
        image: "https://www.seriouseats.com/thmb/UGUyPPK4gbYQZVXbujF-HpedDSw=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/202250621-Maqulbeh-Mai-Kakish-Step-8-761a06998d0a4cb89e79e0995cb5d6c0.JPG"
      },
      {
        step: "3",
        text: "Pour chicken broth over the layers and cook until rice is done.",
        image: "https://www.hotpankitchen.com/wp-content/uploads/2019/10/6-pouring-chicken-broth-over-rice-instant-pot.jpg" // replace with actual image path
      },
      {
        step: "4",
        text: "Once cooked, flip the pot onto a serving dish and serve hot.",
        image: "https://feelgoodfoodie.net/wp-content/uploads/2023/12/Maqluba-16.jpg" // replace with actual image path
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

export default Maqlouba;
