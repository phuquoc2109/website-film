import React, { useContext } from 'react';
import { FilmContext } from '../../provider/ListFilmProvider';
import Footer from './Footer';
import ListPhim from './ListPhim';
import Navbar from './Navbar';

export default function Phimchieurap({clickSearch}) {
    const film = useContext(FilmContext);

    return (
        <div>
            <Navbar clickSearch={clickSearch} />
            <div style={{padding: '30px 45px', fontSize: '32px', fontWeight: 'bold',color: "orange"}}>Phim chiếu rạp</div>
            {film.map((film, index) => (
                    <ListPhim
                    key={index}
                    limit="12" 
                    film={film.phimchieurap}
                    />
                ))}
            <Footer />
        </div>
    )
}
