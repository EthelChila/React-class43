import CategoriesList from "../Components/CategoriesList";
import ProductList from "../Components/ProductList";
import Navbar from "../Components/Navbar";
import { useState } from "react";
const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const onSelectCategory = (category) => {
    if (selectedCategory === category) {
      setSelectedCategory("");
    } else {
      setSelectedCategory(category);
    }
  };
  return (
    <div>
      <h1>Products</h1>
      <Navbar />
      <CategoriesList
        selectedCategory={selectedCategory}
        onSelectCategory={onSelectCategory}
      />
      <ProductList category={selectedCategory} />
    </div>
  );
};

export default Home;
