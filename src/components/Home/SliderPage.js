import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderPage = () => {
  const settings = {
    //dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  return (
    <div className="mb-5">
      <Slider {...settings}>
        <div className="  !flex items-center mt-12 ">
          <div className="">
            <p className="text-4xl font-semibold">Heaven of Electronic</p>
            <p className="text-2xl ">
              Play all your games with the new generation notebooks
            </p>
          </div>
          <img
            src="https://blogs.glowscotland.org.uk/nl/public/muirhouseps/uploads/sites/23280/2018/11/online-devices.jpg"
            className=" object-cover mx-auto rounded-md "
          />
        </div>

        <div className="!flex items-center mt-12 ">
          <div>
            <p className="text-4xl font-semibold">Heaven of Electronic</p>
            <p className="text-2xl ">
              Play all your games with the new generation notebooks
            </p>
          </div>
          <img
            src="https://d32ex7notsszg6.cloudfront.net/uploads/blogs/Popular%20Turkish%20Clothing%20Brands.jpg"
            className=" object-cover mx-auto rounded-md w-[800px] h-[350px]"
          />
        </div>
      </Slider>
    </div>
  );
};

export default SliderPage;
