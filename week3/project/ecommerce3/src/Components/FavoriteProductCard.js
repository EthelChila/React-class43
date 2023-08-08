import { useNavigate } from "react-router-dom";
const FavoriteProductCard = ({ image, title, productId }) => {
  const navigate = useNavigate();
  const onProductClick = () => {
    navigate(`/product/${productId}`);
  };

  return (
    <div className="product" onClick={() => onProductClick()}>
      <img className="product-image" src={image} alt="product cover" />
      <p className="product-title">{title}</p>
    </div>
  );
};

export default FavoriteProductCard;
