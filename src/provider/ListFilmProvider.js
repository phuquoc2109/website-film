import React, { createContext, useEffect, useState } from 'react';


export const FilmContext = createContext();
export default function ListFilmProvider( { children }) {

    const [film, setFilm] = useState([]);

    useEffect(() => {
        getFilm();
      }, []);
    
    const getFilm = async () => {
        const response = await fetch('https://api.apify.com/v2/key-value-stores/QubTry45OOCkTyohU/records/LATEST?fbclid=IwAR3emNshs8WMPDHO8IJKt0QvnYY0X9J3jJhvSei7RSzUwv0mpmo1vIjyq6w');
        const data = await response.json();
    setFilm([data.phim]);
    }
    console.log(film)

    return (
        <FilmContext.Provider value = { film }>
            { children }
        </FilmContext.Provider>
    )
}
