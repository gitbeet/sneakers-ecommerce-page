import React from "react";

export default function ImageCarouselThumbnailList({
  product,
  modal,
  activeImage,
  onClick,
}) {
  return (
    <div
      className={`image-carousel-thumbnails ${
        modal ? "modal-carousel-thumbnails" : ""
      }`}
    >
      {product.images.thumbnail.map((image, index) => {
        return (
          <div
            className={`${
              index === activeImage ? "image-border" : "image-border-invisible"
            } ${modal && index !== activeImage ? "modal-hover-bg" : ""}`}
          >
            <img
              onClick={() => onClick(index)}
              key={index}
              className={`carousel-thumbnail ${
                index !== activeImage ? "" : "image-mute"
              } ${modal && index !== activeImage ? "modal-hover" : ""}`}
              src={image}
              alt="carousel thumbnail"
            />
          </div>
        );
      })}
    </div>
  );
}
