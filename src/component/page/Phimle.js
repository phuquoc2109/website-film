import React, { useContext } from 'react';
import { FilmContext } from '../../provider/ListFilmProvider';
import Footer from '../Footer';
import ListPhim from '../ListPhim';
import Navbar from '../Navbar';

export default function Phimle() {
    const film = useContext(FilmContext);
    
    return (
        <div>
            <Navbar />
            <div style={{padding: '30px 45px', fontSize: '32px', fontWeight: 'bold',color: "orange"}}>Phim lẻ</div>
            {film.map((film, index) => (
                    <ListPhim
                    key={index}
                    limit="16" 
                    film={film.phimle} 
                    />
                ))}
            <Footer />
        </div>
    )
}
