// src/components/RecipeCard.js
import React from "react";
import { Card, CardMedia, CardContent, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

function RecipeCard({ recipe }) {
  return (
    <Card className="recipe-card" sx={{ maxWidth: 345, margin: 'auto' }}>
      <CardMedia
        component="img"
        height="140" // Set height for the image
        image={recipe.image}
        alt={recipe.name}
      />
      <CardContent>
        <Typography variant="h5" component="div">
          {recipe.name}
        </Typography>
        <Button variant="contained" color="primary" fullWidth>
        <Link
    to={
      recipe.name === "Hummus"
        ? "/hummus"
        : recipe.name === "Chicken Shawarma"
        ? "/chicken-shawarma"
        : recipe.name === "Chicken Tikka"
        ? "/chicken-tikka"
        : recipe.name === "Maqlouba"
        ? "/maqlouba"
        : recipe.name === "Fish and Chips"
        ? "/fish-and-chips"
        : recipe.name === "Zaatar Pie"
        ? "/zaatar-pie" // Add this line for Zaatar Pie
        : `/recipe/${recipe.id}`
    }
    style={{ color: 'white', textDecoration: 'none' }}
  >
    View Recipe
  </Link>

        </Button>
      </CardContent>
    </Card>
  );
}

export default RecipeCard;
