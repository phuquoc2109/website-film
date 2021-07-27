import React, { useContext } from 'react'
import { FilmContext } from '../../provider/ListFilmProvider'
import Navbar from '../Navbar'
import PageWatchPhim from '../PageWatchPhim';

export default function XemPhim() {
    const film = useContext(FilmContext);
    const phim = film[0].phimbo[5];
    return (
        <div>
            <Navbar />
            {film.map((film, index) => (
                    <PageWatchPhim
                    // key={index}
                    // limit="12" 
                    // film={film.phimchieurap} 
                    phim = {phim}
                    />
                ))}
        </div>
    )
}
