import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules"; // Use the correct path
import "swiper/css";
import "swiper/css/pagination";
import "./ClientSection.css"; // Custom styles for the section
import Belimo from "../assets/client.png";
import cit from "../assets/client1.png";
import gra from "../assets/client2.png";
import Lg from "../assets/client3.png";
import lil from "../assets/client4.png";
import myob from "../assets/client5.png";
import old from "../assets/client6.png";
import tru from "../assets/client7.png";

const ClientsSection = () => {
  return (
    <section id="clients" className="clients section light-background">
      <div className="container" data-aos="zoom-in">
        <div className="swiper-container">
          <Swiper
            modules={[Autoplay, Pagination]} // Correct module usage
            loop={true}
            speed={600}
            autoplay={{ delay: 5000 }}
            pagination={{ clickable: true }}
            breakpoints={{
              320: { slidesPerView: 2, spaceBetween: 40 },
              480: { slidesPerView: 3, spaceBetween: 60 },
              640: { slidesPerView: 4, spaceBetween: 80 },
              992: { slidesPerView: 5, spaceBetween: 120 },
              1200: { slidesPerView: 6, spaceBetween: 120 },
            }}
          >
            <SwiperSlide>
              <img src={Belimo} alt="Client 1" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={cit} alt="Client 2" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={gra} alt="Client 3" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Lg} alt="Client 4" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={lil} alt="Client 5" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={myob} alt="Client 6" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={old} alt="Client 7" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={tru} alt="Client 8" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
