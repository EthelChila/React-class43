import { useContext } from "react";
import Navbar from "../Components/Navbar";
import { FavoriteContext } from "../utils/FavoriteContext";
import useFetches from "../utils/useFetches";
import FavoriteProductCard from "../Components/FavoriteProductCard";
const FavoriteProducts = () => {
  const { ids } = useContext(FavoriteContext);
  const { data, loading, error } = useFetches(ids);
  return (
    <div>
      <h1>Favorite page</h1>
      <Navbar />
      <div>
        {error ? (
          <div className="centering error">
            Sorry, something went wrong: {error}
          </div>
        ) : loading ? (
          <div className="centering">Loading...</div>
        ) : (
          <ul>
            {data.map((product) => (
              <li key={product.id} className="products-item">
                <FavoriteProductCard
                  productId={product.id}
                  image={product.image}
                  title={product.title}
                />
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default FavoriteProducts;
