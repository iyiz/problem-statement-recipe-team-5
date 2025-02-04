<<<<<<< HEAD
//import { BrowserRouter, Routes, Route } from "react-router-dom";
// // import Home from "./pages/Home";
// import Navbar from "./components/Navbar";
//import RecipeList from './components/RecipeList'; 
//import AddRecipeForm from './components/UpdateRecipeForm'; 


=======
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
>>>>>>> 6e67d9438c100fe6f4f53d16f53e5c0260e2be06

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
