import {useRecipeSContext} from '../hooks/useRecipeContext';
import {useAuthContext} from '../hooks/useAuthContext';

//date fns
import formatDistanceToNow from 'date-fns/formatDistanceToNow';

const RecipeDetails = () => {
    const {recipe} = useRecipeSContext();
    const {user} = useAuthContext();
    
    return (
        <div className="recipe-details">
        <h4>{recipe.recipeName}</h4>
        <p><strong>ingredients (kg): </strong>{recipe.ingredients}</p>
        <p><strong>Cooking Instructions: </strong>{recipe.instructions}</p>
        <p><strong>Preparation time:</strong>{recipe.preptime}</p>
        <p><strong>Difficulty level:</strong> {recipe.difficulty}</p>
        <p>{formatDistanceToNow(new Date(workout.createdAt), { addSuffix: true })}</p>
        <span className="material-symbols-outlined" onClick={handleClick}>delete</span>
      </div>
    );
    }

export default RecipeDetails;