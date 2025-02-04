import React, { useState } from 'react';
import axios from 'axios';
 
const RecipeForm = () => {
  const [recipeName, setRecipeName] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');
  const [prepTime, setPrepTime] = useState('');
  const [difficulty, setDifficulty] = useState('');
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newRecipe = {
      recipeName,
      ingredients,
      instructions,
      prepTime,
      difficulty,
    };
 
    try {
      await axios.post('https://your-backend-api-url/recipes', newRecipe);
      alert('Recipe added successfully!');
    } catch (error) {
      console.error('There was an error adding the recipe!', error);
    }
  };
 
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Recipe Name:</label>
        <input
          type="text"
          value={recipeName}
          onChange={(e) => setRecipeName(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Ingredients:</label>
        <textarea
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Instructions:</label>
        <textarea
          value={instructions}
          onChange={(e) => setInstructions(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Preparation Time:</label>
        <input
          type="text"
          value={prepTime}
          onChange={(e) => setPrepTime(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Difficulty Level:</label>
        <select
          value={difficulty}
          onChange={(e) => setDifficulty(e.target.value)}
          required
        >
          <option value="">Select</option>
          <option value="Easy">Easy</option>
          <option value="Medium">Medium</option>
          <option value="Hard">Hard</option>
        </select>
      </div>
      <button type="submit">Add Recipe</button>
    </form>
  );
};
 
export default RecipeForm;