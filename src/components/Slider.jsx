import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Slider.css";

export default function Slider() {
  return (
    <Swiper
      modules={[Autoplay, Pagination, Navigation]}
      loop={true}
      autoplay={{ delay: 3000 }}
      pagination={{ clickable: true }}
      navigation={true}
      className="main-slider"
    >
      <SwiperSlide>
        <img src="/images/slider/slide1.jpg" alt="Slide 1" />
      </SwiperSlide>

      <SwiperSlide>
        <img src="/images/slider/slide2.jpg" alt="Slide 2" />
      </SwiperSlide>
    </Swiper>
  );
}
