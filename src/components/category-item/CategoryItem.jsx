import React from "react";
import "./category-item.styles.scss";

const CategoryItem = ({ categories }) => {
  return (
    <div className="category-container" key={categories.id}>
      <div
        className="background-image"
        style={{ backgroundImage: `url(${categories.imageUrl})` }}
      />
      <div className="category-body-container">
        <h2>{categories.title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
};

export default CategoryItem;
