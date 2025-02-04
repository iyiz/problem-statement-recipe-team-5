<<<<<<< HEAD
import { RecipesContext } from './RecipesContext';

export const useLogout = () => {
  const { dispatch } = RecipesContext();
=======
import { useAuthContext } from './useAuthContext'
import { useRecipesContext } from './useRecipeContext'

export const useLogout = () => {
  const { dispatch } = useAuthContext()
  const { dispatch: dispatchWorkouts } = useRecipesContext()
>>>>>>> aed30cf7f92137b20bd8a77d86ac801488bad49f

  const logout = () => {
    // Implement logout functionality
    dispatch({ type: 'LOGOUT' });
  };

  return { logout };
};