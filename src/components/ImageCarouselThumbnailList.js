import ImageCarouselThumbnail from "./ImageCarouselThumbnail";
import { v4 as uuid } from "uuid";
import "../css/ImageCarouselThumbnailList.css";

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
          <ImageCarouselThumbnail
            key={uuid()}
            image={image}
            id={index}
            modal={modal}
            onClick={onClick}
            activeImage={activeImage}
          />
        );
      })}
    </div>
  );
}
