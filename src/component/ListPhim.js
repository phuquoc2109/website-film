import React, { useState } from 'react'

export default function ListPhim(props) {
    const {film, limit} = props;
    const initDataShow = limit && film ? film.slice(0, Number(limit)) : film;


    const [dataShow, setDataShow] = useState(initDataShow);
    
    let pages = 1;
    let range = [];
    if(limit !== undefined){
        let page = Math.floor(film.length / Number(limit))
        pages = film.length & Number(limit) === 0 ? page : page + 1
        range = [...Array(pages).keys()]
    }

    console.log(dataShow)
    return (
        <div>
            {dataShow.map(phim => (
                <div>{phim.title}</div>
            ))}
            {
                pages > 1 ? (
                    <div className="table__pagination">
                        {
                            range.map((item, index) => (
                                <div className={`table__pagination`}>
                                    {item + 1}
                                </div>
                            ))
                        }
                    </div>
                ) : null
            }
        </div>
    )
}
