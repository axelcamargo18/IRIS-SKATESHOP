import React from "react";
import Carousel from "react-bootstrap/Carousel";
import p1 from "../slider-images/tyshawn-01-1254w.mp4";
import p2 from "../slider-images/Tyshawn-og-low.jpeg";
import p3 from "../slider-images/Baker4_Andrew_photo2_1500px_2x.jpeg";

export function slider() {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <video
            className="d-block w-100"
            src={p1}
            alt="Tyshawn mp4"
            autoPlay
            loop
          />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={p2} alt="Second slide" />

          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={p3} alt="Third slide" />

          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default slider;
