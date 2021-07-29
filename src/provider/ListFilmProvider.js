import React, { createContext, useEffect, useState } from 'react';
import  RotateCircleLoading  from 'react-loading';
import '../App.css'


export const FilmContext = createContext();
export default function ListFilmProvider( { children }) {

    const [film, setFilm] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getFilm();
      }, []);
    
    const getFilm = async () => {
        const response = await fetch('https://api.apify.com/v2/key-value-stores/QubTry45OOCkTyohU/records/LATEST?fbclid=IwAR3emNshs8WMPDHO8IJKt0QvnYY0X9J3jJhvSei7RSzUwv0mpmo1vIjyq6w');
        const data = await response.json();
        setFilm([data.phim]);
        setIsLoading(false);
    }
    

    return (
        <FilmContext.Provider value = { film }>
            { isLoading ?
                <RotateCircleLoading 
                    type="spinningBubbles" 
                    width= {50}
                    height= {100}
                    color="violet"
                    className ="loading"
                    />  
                : children }
        </FilmContext.Provider>
    )
}
