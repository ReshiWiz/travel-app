import React from "react";

import Slider from "react-slick";
import Ava01 from "../../assets/images/ava-1.jpg";
import Ava02 from "../../assets/images/ava-2.jpg";
import Ava03 from "../../assets/images/ava-3.jpg";

const settings = {
  dots: true,
  infinity: true,
  autoPlay: true,
  speed: 1000,
  swipeToSlide: true,
  autoplaySpeed: 2000,
//   slidesToShow: 3,

  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinity: true,
        dots: true,
      },
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const Testimonial = () => {
  return (
    <Slider {...settings}>
      <div className="testimonial py-4 px-3">
        <p>
          "I recently went on a tour with 'Travel world' and it was an amazing
          experience.The tour guid was knowledgeable and made the experience
          enjoyable. "
        </p>

        <div className="d-flex align-items-center gap-4 mt-3">
          <img
            src={Ava01}
            alt="img-not-found"
            className="w-25 h-25 rounded-2"
          />

          <div>
            <h6 className="mb-0 mt-3">wilson mike</h6>
            <p>Customer</p>
          </div>
        </div>
      </div>
      <div className="testimonial py-4 px-3">
        <p>
          "I recently went on solo tour with this company and felt safe and
          well-informed throughout the entire experience. The tour guid was
          friendly and accommodating about the destination, I would recommend
          this tour company to anyone"
        </p>

        <div className="d-flex align-items-center gap-4 mt-3">
          <img
            src={Ava02}
            alt="img-not-found"
            className="w-25 h-25 rounded-2"
          />

          <div>
            <h6 className="mb-0 mt-3">Siya</h6>
            <p>Customer</p>
          </div>
        </div>
      </div>
      <div className="testimonial py-4 px-3">
        <p>
          "I took the family on a tour with Travel world company and we all had
          a blast. The tour was well-organized and the sights were breathtaking.
          I wound definitely use this company again for future tours "
        </p>

        <div className="d-flex align-items-center gap-4 mt-3">
          <img
            src={Ava03}
            alt="img-not-found"
            className="w-25 h-25 rounded-2"
          />

          <div>
            <h6 className="mb-0 mt-3">Ram</h6>
            <p>Customer</p>
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default Testimonial;
