import React, { useContext } from "react";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination } from 'swiper/core';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/swiper.min.css";
import { FilmContext } from "../../provider/ListFilmProvider";
import "../scss/SlidesFilm.css";
import { Link } from 'react-router-dom'; 




// install Swiper modules
SwiperCore.use([Pagination,Navigation]);


export default function SlidesPhimLe() {

  const film = useContext(FilmContext);

  return (
    <>
    <div className="title"> Phim lẻ mới nhất </div>
    <Swiper 
    slidesPerView={3} 
    spaceBetween={100}
    slidesPerGroup={3}  
    navigation={true} 
    className="mySwiper">
        {film.map((film , index) => (
                    <div key={index}>
                        {film.phimle.map((phimle, index) =>(
                        <SwiperSlide key={index} className="film-img">
                            <img src={phimle.imageUrl} alt="" />
                            <div className="film-description">
                                <div className="film-title">{phimle.title}</div>
                                <Link to={`/xemphim/${phimle.imageUrl.slice(58,75)}`} ><button className="film-btn">Xem Phim</button></Link>
                                <div className="film-category">{phimle.category}</div>
                            </div>
                        </SwiperSlide>
                        ))}
                        </div>
                    ))}
  </Swiper>
    </>
  )
}