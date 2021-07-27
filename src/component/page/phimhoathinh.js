import React, { useContext } from 'react';
import { FilmContext } from '../../provider/ListFilmProvider';
import Footer from '../Footer';
import ListPhim from '../ListPhim';
import Navbar from '../Navbar';

export default function Phimhoathinh() {
    const film = useContext(FilmContext);
    
    return (
        <div>
            <Navbar />
            <div style={{padding: '30px 45px', fontSize: '32px', fontWeight: 'bold',color: "orange"}}>Phim hoạt hình</div>
            {film.map((film, index) => (
                    <ListPhim
                    key={index}
                    limit="8" 
                    film={film.phimhoathinh} 
                    />
                ))}
            <Footer />
        </div>
    )
}
