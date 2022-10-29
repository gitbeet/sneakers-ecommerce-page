import React from "react";

export default function NavigationArrow({ onClick, modal, image, direction }) {
  return (
    <div
      onClick={onClick}
      className={`navigation-arrow navigation-arrow-${direction} ${
        modal ? `arrow-modal arrow-modal-${direction}` : ""
      }`}
    >
      <img src={image} alt={`arrow {direction}`} />
    </div>
  );
}
