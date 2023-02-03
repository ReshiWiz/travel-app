import React from "react";

import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

import galleryImgs from "./Imagegallery";
const MasonryImageGallery = () => {
  return (
    <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 768: 3, 992: 4 }}>
      <Masonry gutter="1rem">
        {galleryImgs.map((items, idx) => (
          <img
          className="masonry-img"
            key={idx}
            src={items}
            alt="img_not_found "
            style={{ width: "100%", display: "block", borderRadius: "10px" }}
          />
        ))}
      </Masonry>
    </ResponsiveMasonry>
  );
};

export default MasonryImageGallery;

