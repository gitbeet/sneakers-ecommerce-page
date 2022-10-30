import "../css/ImageCarouselActiveImage.css";

export default function ImageCarouselActiveImage({
  modal,
  product,
  onClick,
  activeImage,
}) {
  return (
    <div className={`active-image ${modal ? "carousel-image-modal" : ""}`}>
      {product.images.full.map((image, index) => {
        return (
          <img
            onClick={() => onClick(activeImage)}
            key={index}
            className={`carousel-image ${index === activeImage ? "" : "hide"}`}
            src={image}
            alt="carousel img"
          />
        );
      })}
    </div>
  );
}
