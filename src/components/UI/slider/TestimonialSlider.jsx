import React from "react";
import Slider from "react-slick";
import ava01 from "../../../assets/images/ava-1.jpg";
import ava02 from "../../../assets/images/ava-2.jpg";
import ava03 from "../../../assets/images/ava-3.jpg";

import "../../../styles/slider.css";

const TestimonialSlider = () => {
  const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 1000,
    autoplaySpeed: 3000,
    swipeToSlide: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div>
        <p className="review_text">
          I recently made my first purchase on your store, and I have to say,
          I’m really impressed! The shopping experience was seamless, and I
          found everything I needed easily. The product quality is top-notch,
          and the delivery was faster than expected. I will definitely be coming
          back for more shopping soon!
        </p>
        <div className="slider_content d-flex align-items-center gap-3">
          <img src={ava01} alt="avatar" className="rounded" />
          <h6>Jhon Doe</h6>
        </div>
      </div>
      <div>
        <p className="review_text">
          I’ve been using your store for over a year now, and I’ve had an
          excellent experience every time. The quality of your products is
          consistent, and I’m always impressed by the variety you offer.
          Customer service is always helpful, and delivery times are great. Keep
          up the fantastic work!
        </p>
        <div className="slider_content d-flex align-items-center gap-3">
          <img src={ava02} alt="avatar" className="rounded" />
          <h6>Mitchell Marsh</h6>
        </div>
      </div>
      <div>
        <p className="review_text">
          I’m excited about the upcoming update to your platform! I hope the new
          version brings even more user-friendly features and a smoother
          shopping experience. I’d love to see faster checkout options and
          perhaps a wishlist feature. Keep up the good work, and I’m looking
          forward to the improvements!
        </p>
        <div className="slider_content d-flex align-items-center gap-3">
          <img src={ava03} alt="avatar" className="rounded" />
          <h6>Steven crock</h6>
        </div>
      </div>
    </Slider>
  );
};

export default TestimonialSlider;
