import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AuthContext, AuthContextProvider } from './context/AuthContext';
import { RecipesContextProvider } from './context/RecipeContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <RecipesContextProvider>
        <App />
      </RecipesContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);

// If you wan
