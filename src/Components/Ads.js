import React from "react";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// Import ads images
import Ad1 from "../assests/coming.png";
import Ad2 from "../assests/witches.png";
import Ad3 from "../assests/special.gif"
import Ad4 from "../assests/hallo.png"
import Ad5 from "../assests/babySheep.png"
import Ad6 from "../assests/shipping.png"
import Ad7 from "../assests/free.png"
import Ad8 from "../assests/new.png"
import Ad9 from "../assests/one.png"

const arr = [
  {
    pic: Ad1,
  },
  {
    pic: Ad2,
  },
  {
    pic: Ad3,
  },
  {
    pic: Ad4,
  },
  {
    pic: Ad5,
  },
  {
    pic: Ad6,
  },
  {
    pic: Ad7,
  },

  {
    pic: Ad8,
  },
  {
    pic: Ad9,
  },
];

export default function Ads() {
  return (
    <div className="bg-pink-300 dark:bg-pink-400 m-4 p-4 rounded">
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={50}
        slidesPerView={2}
        navigation
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {arr.map(({ pic }) => {
          return (
            <SwiperSlide>
              <div>
                <img src={pic} className="object-contain w-50 h-72"></img>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
