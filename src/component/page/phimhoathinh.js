import React, { useContext } from 'react';
import { FilmContext } from '../../provider/ListFilmProvider';
import ListPhim from '../ListPhim';
import Navbar from '../Navbar';

export default function Phimhoathinh() {
    const film = useContext(FilmContext);
    
    return (
        <div>
            <Navbar />
            {film.map((film, index) => (
                    <ListPhim
                    key={index}
                    limit="10" 
                    film={film.phimhoathinh} 
                    />
                ))}
        </div>
    )
}
