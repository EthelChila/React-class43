import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import heartRegular from "../assets/heart-regular.svg";
import heartSolid from "../assets/heart-solid.svg";
import { FavoriteContext } from "../utils/FavoriteContext";
const ProductCard = ({ image, title, productId }) => {
  const navigate = useNavigate();
  const [heartIcon, setHeartIcon] = useState(heartRegular);
  const { addNewId } = useContext(FavoriteContext);
  const onProductClick = () => {
    navigate(`/product/${productId}`);
  };

  const onFavoriteClick = () => {
    addNewId(productId);
    setHeartIcon((prevSrc) =>
      prevSrc === heartRegular ? heartSolid : heartRegular
    );
  };
  return (
    <div className="product">
      <img
        className="fav-image"
        onClick={() => onFavoriteClick()}
        src={heartIcon}
        alt="favorite"
      />
      <div onClick={() => onProductClick()}>
        <img className="product-image" src={image} alt="product cover" />
        <p className="product-title">{title}</p>
      </div>
    </div>
  );
};

export default ProductCard;
