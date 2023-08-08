import ProductCard from "./ProductCard";
import useFetch from "../utils/useFetch";
const ProductList = ({ category }) => {
  let url = "";
  if (category !== "") {
    url = `https://fakestoreapi.com/products/category/${category}`;
  } else {
    url = "https://fakestoreapi.com/products";
  }
  const { data, loading, error } = useFetch(url);
  return (
    <div>
      {error ? (
        <div className="centering error">Something went wrong: {error}</div>
      ) : loading ? (
        <div className="centering">Loading...</div>
      ) : (
        <ul className="products">
          {data.map((product) => (
            <li key={product.id} className="products-item">
              <ProductCard
                productId={product.id}
                image={product.image}
                title={product.title}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ProductList;
