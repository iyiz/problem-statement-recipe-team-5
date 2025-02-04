import { RecipesContext } from './RecipesContext';

export const useLogout = () => {
  const { dispatch } = RecipesContext();

  const logout = () => {
    // Implement logout functionality
    dispatch({ type: 'LOGOUT' });
  };

  return { logout };
};