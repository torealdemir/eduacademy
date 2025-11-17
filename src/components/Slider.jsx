import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Slider.css";
import slide1 from "../assets/slider/slide1.jpg";
import slide2 from "../assets/slider/slide2.jpg";



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
        <div className="slide-item">
          <img src={slide1} alt="Slide 1" />
          <div className="slide-content">
            <h2>Geleceğin Şehirlerini Planlıyoruz</h2>
            <p>Sürdürülebilir kalkınma ve akıllı şehir çözümleriyle...</p>
            <button className="slide-btn">Daha Fazla Bilgi</button>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="slide-item">
          <img src={slide2} alt="Slide 2" />
          <div className="slide-content">
            <h2>Doğayla Uyumlu Yaşam Alanları</h2>
            <p>Yeşil alanlar, yenilenebilir enerji ve modern tasarım bir arada.</p>
            <button className="slide-btn">Projelerimizi Gör</button>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
