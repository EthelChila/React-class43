import categories from "./fake-data/all-categories";
import { useState } from "react";
const Categories = (props) => {
  const [active, setActive] = useState(false);

  function onSelect(category) {
    const value = category.replace("FAKE: ", "");
    props.setSelectedCategory(value);
    setActive(!active);
  }
  return (
    <div className="categories">
      {categories.map((category, index) => (
        <div
          key={index}
          onClick={() => onSelect(category)}
          className={
            active
              ? "categories-item categories-item-selected"
              : "categories-item"
          }
        >
          {category}
        </div>
      ))}
    </div>
  );
};

export default Categories;
