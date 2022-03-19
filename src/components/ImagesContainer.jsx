import React from "react";

const ImagesContainer = ({ primaryImage }) => {
  return (
    <article className="image-container grid">
      <div className="primary-image">
        <img src={primaryImage} alt="product" />
      </div>
    </article>
  );
};

export default ImagesContainer;
