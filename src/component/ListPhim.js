import React, { useState } from 'react';
import './Listphim.css';
import {Link} from 'react-router-dom'

export default function ListPhim(props) {
    const {film, limit, handleClick} = props;
    const initDataShow = limit && film ? film.slice(0, Number(limit)) : film;


    const [dataShow, setDataShow] = useState(initDataShow);
    
    let pages = 1;
    let range = [];
    if(limit !== undefined){
        let page = Math.floor(film.length / Number(limit))
        pages = film.length % Number(limit) === 0 ? page : page + 1
        range = [...Array(pages).keys()]
    }

    const [currPage, setCurrPage] = useState(0);
    const selectPage = page => {
        const start = Number(limit) * page;
        const end = start + Number(limit)
        setDataShow(film.slice(start, end))
        setCurrPage(page);
    }
    console.log(film)
    
    return (
        <div className="listfilm-main">
            <div className="listfilm">
            {dataShow.map((phim,index) => (
                <div key={index} className="film-card">
                    <img src={phim.imageUrl} alt="" />
                    <div className="listfilm-des">
                        <div className="listfilm-title">{phim.title}</div>
                        <Link to={`/xemphim/${phim.imageUrl.slice(58,75)}`} ><button className="listfilm-btn">Xem Phim</button></Link>
                        <div className="listfilm-category">{phim.category}</div>
                    </div>
                </div>
            ))}
            </div>
            <div>
            {
                pages > 1 ? (
                    <div className="table__pagination">
                        {
                            range.map((item, index) => (
                                <div className={`table__pagination-item ${currPage === index? 'active' : ''}`} onClick={(index) => selectPage(index)}>
                                    {item + 1}
                                </div>
                            ))
                        }
                    </div>
                ) : null
            }
            </div>
        </div>
    )
}
