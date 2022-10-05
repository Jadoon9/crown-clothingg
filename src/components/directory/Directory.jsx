import React from "react";
import CategoryItem from "../category-item/CategoryItem";
import "./directory.styles.scss";

const Directory = ({ categories }) => {
  return (
    <div className="categories-container">
      {categories?.map((categories) => (
        <CategoryItem categories={categories} />
      ))}
    </div>
  );
};

export default Directory;
