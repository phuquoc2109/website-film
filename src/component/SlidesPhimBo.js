import React, { useContext, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"

import "./SlidesFilm.css";


// import Swiper core and required modules
import SwiperCore, {
  Pagination,Navigation
} from 'swiper/core';
import { FilmContext } from "../provider/ListFilmProvider";

// install Swiper modules
SwiperCore.use([Pagination,Navigation]);


export default function SlidesPhimBo() {

  const film = useContext(FilmContext);

  return (
    <>
    <div className="title"> Phim bộ mới nhất </div>
    <Swiper 
    slidesPerView={3} 
    spaceBetween={100}
    slidesPerGroup={3}  
    navigation={true} 
    className="mySwiper">
        {film.map((film) => (
                    <div>
                        {film.phimbo.map((phimbo) =>(
                        <SwiperSlide className="film-img">
                        <img src={phimbo.imageUrl} alt="" />
                        <div className="film-description">
                            <div className="film-title">{phimbo.title}</div>
                            <button className="film-btn">Xem Phim</button>
                            <div className="film-category">{phimbo.category}</div>
                        </div>
                    </SwiperSlide>
                        ))}
                    </div>
                    ))}
  </Swiper>
    </>
  )
}