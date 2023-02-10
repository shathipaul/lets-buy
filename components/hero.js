// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from "swiper"

// Import Swiper styles
import 'swiper/css';
import Slide from "./_child/slide";

function Hero() {
    SwiperCore.use([Autoplay])
    const bg = {
        background: "url('/public/images/img1.jpg') no-repeat",
        backgroundPosition: "right"
    }
    return (
        <section className="pt-20" style={bg}>
            <div className="container mx-auto md:px-20">

                <Swiper
                    slidesPerView={1}
                    loop={true}
                    autoplay={{
                        delay: 2000
                    }}
                >
                    <SwiperSlide><Slide /></SwiperSlide>
                    <SwiperSlide><Slide /></SwiperSlide>
                    <SwiperSlide><Slide /></SwiperSlide>
                    <SwiperSlide><Slide /></SwiperSlide>

                </Swiper>

            </div>
        </section>
    )
}

export default Hero;

