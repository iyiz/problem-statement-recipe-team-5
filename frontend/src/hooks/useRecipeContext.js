import { WorkoutsContext } from '../context/RecipesContext'
import { useContext } from 'react'

export const useRecipesContext = () => {
  const context = useContext(RecipesContext)

  if (!context) {
    throw Error('useRecipesContext must be used inside an RecipesContextProvider')
  }

  return context
}