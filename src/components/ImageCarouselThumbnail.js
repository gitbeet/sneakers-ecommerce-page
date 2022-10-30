import "../css/ImageCarouselThumbnail.css";

export default function ImageCarouselThumbnail({
  id,
  activeImage,
  modal,
  onClick,
  image,
}) {
  return (
    <div
      className={`${
        id === activeImage ? "image-border" : "image-border-invisible"
      } ${modal && id !== activeImage ? "modal-hover-bg" : ""}`}
    >
      <img
        onClick={() => onClick(id)}
        className={`carousel-thumbnail ${
          id !== activeImage ? "" : "image-mute"
        } ${modal && id !== activeImage ? "modal-hover" : ""}`}
        src={image}
        alt="carousel thumbnail"
      />
    </div>
  );
}
