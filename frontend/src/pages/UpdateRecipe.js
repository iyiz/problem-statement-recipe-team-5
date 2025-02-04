import React from 'react';
import UpdateRecipeForm from '../components/UpdateRecipeForm';

const UpdateRecipe = ({ match }) => {
    const { id } = match.params; // Get the recipe ID from the URL

    return (
        <div>
            <h2>Update Recipe</h2>
            <UpdateRecipeForm recipeId={id} />
        </div>
    );
};

export default UpdateRecipe;