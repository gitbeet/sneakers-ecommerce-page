import thumbnail1 from "./images/image-product-1-thumbnail.jpg";
import thumbnail2 from "./images/image-product-2-thumbnail.jpg";
import thumbnail3 from "./images/image-product-3-thumbnail.jpg";
import thumbnail4 from "./images/image-product-4-thumbnail.jpg";
import image1 from "./images/image-product-1.jpg";
import image2 from "./images/image-product-2.jpg";
import image3 from "./images/image-product-3.jpg";
import image4 from "./images/image-product-4.jpg";

export const productData = [
  {
    id: 1,
    name: "Fall Limited Edition Sneakers",
    company: "Sneaker Company",
    description: `These low-profile sneakers are your perfect casual wear companion.Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.`,
    price: 250,
    discount: 50,
    images: {
      thumbnail: [thumbnail1, thumbnail2, thumbnail3, thumbnail4],
      full: [image1, image2, image3, image4],
    },
  },
];
