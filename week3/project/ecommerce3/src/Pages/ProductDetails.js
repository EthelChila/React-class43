import { useParams } from "react-router-dom";
import useFetch from "../utils/useFetch";
import Navbar from "../Components/Navbar";
const ProductDetails = () => {
  const { id } = useParams();
  const url = `https://fakestoreapi.com/products/${id}`;
  const { data, loading, error } = useFetch(url);
  return (
    <div>
      <Navbar />
      {error ? (
        <div>Could not load the product</div>
      ) : loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          <h1> {data.title} </h1>
          <div className="product-details">
            <img
              className="product-details-image"
              src={data.image}
              alt="product"
            />
            <p className="product-details-description">{data.description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
