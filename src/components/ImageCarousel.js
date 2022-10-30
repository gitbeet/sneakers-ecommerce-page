import React, { useEffect, useState } from "react";
import { useShoppingCart } from "../context/ShoppingCartContext";
import arrowLeft from "../images/icon-previous.svg";
import arrowRight from "../images/icon-next.svg";
import NavigationArrow from "./NavigationArrow";
import ImageCarouselActiveImage from "./ImageCarouselActiveImage";
import ImageCarouselThumbnailList from "./ImageCarouselThumbnailList";
import "../css/ImageCarousel.css";

function ImageCarousel({
  toggleImageModal,
  modal = false,
  initialActiveImage = 0,
}) {
  const { product } = useShoppingCart();
  const [activeImage, setActiveImage] = useState(initialActiveImage);

  useEffect(() => {
    function keyDownFn(e) {
      if (e.key === "ArrowLeft") {
        setActiveImage((prev) =>
          prev < 1 ? product.images.full.length - 1 : prev - 1
        );
      }
      if (e.key === "ArrowRight") {
        setActiveImage((prev) =>
          prev > product.images.full.length - 2 ? 0 : prev + 1
        );
      }
    }
    document.addEventListener("keydown", keyDownFn);
    return () => document.removeEventListener("keydown", keyDownFn);
  }, []);

  function changeImage(direction) {
    if (direction === "previous") {
      if (activeImage < 1) {
        setActiveImage(0);
      } else {
        setActiveImage((prev) => prev - 1);
      }
    }
    if (direction === "next") {
      if (activeImage > product.images.full.length - 2) {
        setActiveImage(product.images.full.length - 1);
      } else {
        setActiveImage((prev) => prev + 1);
      }
    }
  }
  return (
    <div className={`image-carousel ${modal ? "image-carousel-modal" : ""}`}>
      <NavigationArrow
        onClick={() => changeImage("previous")}
        direction="left"
        image={arrowLeft}
        modal={modal}
      />
      <NavigationArrow
        onClick={() => changeImage("next")}
        direction="right"
        image={arrowRight}
        modal={modal}
      />
      <ImageCarouselActiveImage
        modal={modal}
        product={product}
        activeImage={activeImage}
        onClick={toggleImageModal}
      />
      <ImageCarouselThumbnailList
        modal={modal}
        activeImage={activeImage}
        onClick={setActiveImage}
        product={product}
      />
    </div>
  );
}

export default ImageCarousel;
