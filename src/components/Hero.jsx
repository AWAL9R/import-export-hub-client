import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Hero = ()=> {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000 }}
      loop
      className="w-full h-[50vw] max-h-[600px] rounded-md "
    >
      <SwiperSlide className="bg-[url('/connect.jpg')] bg-no-repeat bg-cover p-3">
        <h1 className="text-4xl font-bold text-black">Connecting Markets, Empowering Trade.</h1>
      </SwiperSlide>
      <SwiperSlide className="bg-[url('/improve.png')] bg-no-repeat bg-cover p-3">
        <h1 className="text-4xl font-bold text-black">Import. Export. Excel.</h1>
      </SwiperSlide>
      <SwiperSlide className="bg-[url('/global.jpg')] bg-no-repeat bg-cover p-3">
        <h1 className="text-4xl font-bold text-white">Seamless Logistics. Global Reach.</h1>
      </SwiperSlide>
    </Swiper>
  );
}

export default  Hero;
