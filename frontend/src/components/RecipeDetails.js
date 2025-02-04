import { useRecipesContext } from '../hooks/useRecipeContext';
import { useAuthContext } from '../hooks/useAuthContext';

// date-fns
import formatDistanceToNow from 'date-fns/formatDistanceToNow';

const RecipeDetails = ({ recipe }) => {
    const { dispatch } = useRecipesContext(); // Get dispatch function
    const { user } = useAuthContext();

    // Define handleClick function
    const handleClick = async () => {
        if (!user) {
            alert("You must be logged in to delete a recipe!");
            return;
        }

        const response = await fetch(`/api/recipes/${recipe._id}`, {
            method: 'DELETE',
            headers: { 
                'Authorization': `Bearer ${user.token}` 
            },
        });

        if (response.ok) {
            dispatch({ type: 'DELETE_RECIPE', payload: recipe._id });
        }
    };

    return (
        <div className="recipe-details">
            <h4>{recipe.recipeName}</h4>
            <p><strong>Ingredients (kg): </strong>{recipe.ingredients}</p>
            <p><strong>Cooking Instructions: </strong>{recipe.instructions}</p>
            <p><strong>Preparation time: </strong>{recipe.preptime}</p>
            <p><strong>Difficulty level: </strong>{recipe.difficulty}</p>
            <p>{formatDistanceToNow(new Date(recipe.createdAt), { addSuffix: true })}</p>
            <span className="material-symbols-outlined" onClick={handleClick}>delete</span>
        </div>
    );
};

export default RecipeDetails;
