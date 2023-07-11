import products from "./fake-data/all-products";
const Products = (props) => {
  const selectedItems = products.filter(
    (product) => product.category === props.category
  );
  const items = selectedItems.length !== 0 ? selectedItems : products;
  return (
    <div className="product-container">
      {items.map((product) => (
        <ul className="products">
          <li key={product.id} className="products-item">
            <div className="product">
              <img
                className="product-img"
                src={product.image}
                alt="product cover"
              />
              <p className="product-title">{product.title}</p>
            </div>
          </li>
        </ul>
      ))}
    </div>
  );
};

export default Products;
