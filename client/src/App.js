import { storage } from "./firebase";
import './App.css';
import Header from "./components/Header";
import RecipePreview from "./components/RecipePreview";



function App() {
  return (
    <div className="bg-oatmeal App">
      
      <Header />
      <RecipePreview />
    </div>
  );
}

export default App;
