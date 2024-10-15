import React from 'react';
import { Container, Grid } from '@mui/material';
import RecipeCard from './RecipeCard';
import { useNavigate } from 'react-router-dom';

const MakeRecipe = () => {
  const navigate = useNavigate();
  
  const recipeData = [
    {
      name: "Chicken Tikka",
      image: "https://sinfullyspicy.com/wp-content/uploads/2014/03/1200-by-1200-images-2.jpg",
      details: "Juicy, marinated chicken pieces grilled to perfection. Chicken Tikka is a South Asian favorite, seasoned with spices and served with fresh naan or rice.",
      id: 1
    },
    {
      name: "Fish and Chips",
      image: "https://popmenucloud.com/ndlfytsi/53efe563-28a2-43b7-a053-fa1688da7693.jpg",
      details: "A classic British dish featuring crispy battered fish served with golden fries. Perfect for seafood lovers and best enjoyed with a side of tartar sauce or malt vinegar.",
      id: 2
    },
    {
      name: "Maqlouba",
      image: "https://images.deliveryhero.io/image/menu-import-gateway-prd/regions/ME/chains/HS-MAQ/25b64b3d4f950556c534ba9e6223fd26.jpeg",
      details: "A Middle Eastern rice dish made with layers of fried vegetables, meat, and fragrant rice, flipped upside down before serving. Maqluba is a hearty meal, often shared during family gatherings.",
      id: 3
    },
    {
      name: "Chicken Shawarma",
      image: "https://falasteenifoodie.com/wp-content/uploads/2022/11/Authentic-Middle-Eastern-Chicken-Shawarma.jpg",
      details: "A flavorful Middle Eastern dish made with marinated chicken wrapped in pita bread and served with garlic sauce and fresh vegetables.",
      id: 4
    },
    {
      name: "Hummus",
      image: "https://images.getrecipekit.com/20230523113422-butter-20bean-20hummus-20web-20pic.png?width=650&quality=90&",
      details: "A smooth and creamy dip made from blended chickpeas, tahini, garlic, and lemon juice, perfect for dipping vegetables or pita bread.",
      id: 5
    },
    {
      name: "Zaatar Pie",
      image: "https://www.hungrypaprikas.com/wp-content/uploads/2021/03/Manakish-Cheese-Zaatar-4.jpg",
      details: "A delicious Middle Eastern flatbread topped with a mixture of za'atar spices, olive oil, and sesame seeds, often enjoyed as a snack or appetizer.",
      id: 6
    }
  ];

  // Define the handleRecipeClick function
  const handleRecipeClick = (index) => {
    navigate(`/recipe/${index}`); // Navigate to the recipe detail page
  };

  // Ensure that the return statement is inside the function
  return (
    <Container>
      <Grid container spacing={3}>
        {recipeData.map((recipe) => (
          <Grid item xs={12} sm={6} md={4} key={recipe.id}>
            <RecipeCard
              recipe={recipe}
              onClick={() => handleRecipeClick(recipe.id)}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default MakeRecipe;


