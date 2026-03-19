import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow'; 

const Feedback = () => {
  
  const testimonials = [
    { name: "Sarah M.", text: "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I ve bought has exceeded my expectations." },
    { name: "Alex K.", text: "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions." },
    { name: "James L.", text: "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends." },
    { name: "Meryem A.", text: "Müştəri xidməti əla idi! Mənə uyğun ölçünü tapmaqda kömək etdilər və çatdırılma gözlədiyimdən çox daha sürətli oldu." },
    { name: "Nərgiz M.", text: "Parçaların keyfiyyəti əladır. Bir neçə dəfə yuyulmasına baxmayaraq rəngi solmayıb. Çox məmnunam." },
  ];

  return (
    <section className="bg-white py-16 px-4 md:px-20 font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-3xl md:text-5xl font-[900] text-black tracking-tighter uppercase leading-none">
            Müştəri Rəylərimiz
          </h2>
          
          <div className="flex gap-4">
            <button className="prev-btn p-2 hover:opacity-50 transition-all duration-200 cursor-pointer z-10 relative">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>
            </button>
            <button className="next-btn p-2 hover:opacity-50 transition-all duration-200 cursor-pointer z-10 relative">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </button>
          </div>
        </div>

        <Swiper
          modules={[Navigation, Pagination, EffectCoverflow]}
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'} 
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={{ clickable: true, dynamicBullets: true }}
          navigation={{
            prevEl: '.prev-btn',
            nextEl: '.next-btn',
          }}
          className="pb-16 pt-10 mySwiper" 
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index} className="max-w-[400px] w-full h-auto">
              <div className="border border-gray-100 rounded-[20px] p-7 md:p-8 flex flex-col gap-3 shadow-sm h-full bg-white transition-transform duration-300">
                <div className="flex gap-1 text-[#FFC633]">
                  {[...Array(5)].map((_, i) => <span key={i}>★</span>)}
                </div>
                
                <div className="flex items-center gap-1.5">
                  <span className="font-bold text-lg md:text-xl text-black">{item.name}</span>
                  <div className="bg-[#01AB31] text-white rounded-full w-[18px] h-[18px] flex items-center justify-center flex-shrink-0">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  </div>
                </div>
                
                <p className="text-black/60 leading-relaxed text-[15px] md:text-base">
                  "{item.text}"
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Feedback;