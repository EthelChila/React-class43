import CategoriesList from "./Categories";
import ProductsList from "./Products";
import { useState } from "react";
import "./App.css";
const App = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  return (
    <div>
      <h1>Products</h1>
      <CategoriesList setSelectedCategory={setSelectedCategory} />
      <ProductsList category={selectedCategory} />
    </div>
  );
};

export default App;
