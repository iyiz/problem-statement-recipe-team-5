import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UpdateRecipeForm = ({ recipeId, onUpdate }) => {
  const [recipe, setRecipe] = useState({
    name: '',
    ingredients: '',
    instructions: '',
    preparationTime: '',
    difficulty: ''
  });

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await axios.get(`/api/recipes/${recipeId}`);
        setRecipe({
          name: response.data.name,
          ingredients: response.data.ingredients.join(', '), // Assuming ingredients are stored as an array
          instructions: response.data.instructions,
          preparationTime: response.data.preparationTime,
          difficulty: response.data.difficulty
        });
      } catch (error) {
        console.error('Error fetching recipe:', error);
      }
    };

    fetchRecipe();
  }, [recipeId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRecipe({ ...recipe, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.patch(`/api/recipes/${recipeId}`, {
        ...recipe,
        ingredients: recipe.ingredients.split(',').map(item => item.trim()) // Convert input back to array
      });
      console.log('Recipe updated:', response.data);
      onUpdate(); // Call a function to refresh the recipe list or handle the UI update
    } catch (error) {
      console.error('Error updating recipe:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Update Recipe</h2>
      
      <label>
        Recipe Name:
        <input
          type="text"
          name="name"
          value={recipe.name}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Ingredients (comma-separated):
        <input
          type="text"
          name="ingredients"
          value={recipe.ingredients}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Cooking Instructions:
        <textarea
          name="instructions"
          value={recipe.instructions}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Preparation Time:
        <input
          type="text"
          name="preparationTime"
          value={recipe.preparationTime}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Difficulty Level:
        <select
          name="difficulty"
          value={recipe.difficulty}
          onChange={handleChange}
          required
        >
          <option value="">Select...</option>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
      </label>

      <button type="submit">Update Recipe</button>
    </form>
  );
};

export default UpdateRecipeForm;