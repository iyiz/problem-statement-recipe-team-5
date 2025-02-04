import React, { useEffect, useState } from 'react';
import axios from 'axios';
import UpdateRecipeForm from './UpdateRecipeForm';

const RecipeList = () => {
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipeId, setSelectedRecipeId] = useState(null);

  useEffect(() => {
    const fetchRecipes = async () => {
      const response = await axios.get('/api/recipes');
      setRecipes(response.data);
    };

    fetchRecipes();
  }, []);

  const handleUpdateClick = (id) => {
    setSelectedRecipeId(id);
  };

  const handleUpdateComplete = () => {
    setSelectedRecipeId(null);
    // Optionally refresh the recipe list
    const fetchRecipes = async () => {
      const response = await axios.get('/api/recipes');
      setRecipes(response.data);
    };
    fetchRecipes();
  };

  return (
    <div>
      <h1>Recipe List</h1>
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe._id}>
            <h3>{recipe.name}</h3>
            <button onClick={() => handleUpdateClick(recipe._id)}>Update</button>
          </li>
        ))}
      </ul>
      {selectedRecipeId && (
        <UpdateRecipeForm recipeId={selectedRecipeId} onUpdate={handleUpdateComplete} />
      )}
    </div>
  );
};

export default RecipeList;