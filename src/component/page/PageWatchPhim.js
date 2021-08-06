import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FilmContext } from '../../provider/ListFilmProvider';
import "../scss/PageWatchPhim.css";
import Footer from './Footer';
import Navbar from './Navbar';

export default function PageWatchPhim({clickSearch}) {
    const { id } = useParams();
    
    const film = useContext(FilmContext);
    const [phimbo, setPhimbo] = useState(film[0].phimbo);
    const [phimle, setPhimle] = useState(film[0].phimle);
    const [phimchieurap, setPhimchieurap] = useState(film[0].phimchieurap);
    const [phimhoathinh, setPhimhoathinh] = useState(film[0].phimhoathinh);
    const [watch, setWatch] = useState([]);
    const [detail, setDetail] =useState([]);

    const [currPage, setCurrPage] = useState(0);
    const tapPage = 1;
    const tapVisited = currPage * tapPage;


    const getDetail = () => {
        const movieurl =[];
        phimbo.forEach(p => {
            if (id.includes(p.imageUrl.slice(58, 75))) {
                setDetail(p)
                p.episode.map(i => {
                    movieurl.push(i.url)
                    setWatch(movieurl);
                })
            }        
        });
        phimle.forEach(p => {
            if (id.includes(p.imageUrl.slice(58, 75))) {
                setDetail(p)
                p.episode.map((i, index) => {
                    movieurl.push(i.url)

                    setWatch(movieurl)
                })
            }
        });
        phimchieurap.forEach(p => {
            if (id.includes(p.imageUrl.slice(58, 75))) {
                setDetail(p)
                p.episode.map(i => {
                    movieurl.push(i.url)

                    setWatch(movieurl)
                })
            }
        });
        phimhoathinh.forEach(p => {
            if (id.includes(p.imageUrl.slice(58, 75))) {
                setDetail(p)
                p.episode.map(i => {
                    movieurl.push(i.url)
                    setWatch(movieurl)
                })
            }
        });
    }
    useEffect(() => {
        getDetail()
     
    }, [phimbo, phimle, phimchieurap, phimhoathinh])

    const limit  = 1;
    const pageCount = Math.round(watch.length / limit);
    let range = [];
    if(limit !== undefined){
        var pages = Math.round(watch.length / Number(limit))
        range = [...Array(pages).keys()]
    }

    const selectPage = page => {
        setCurrPage(page)
    }

    return (
        <>
            <Navbar clickSearch={clickSearch} />
            <div className="watchphim">
                <div className="listfilm">
                    <div className="film-card">
                        <img src={detail.imageUrl} alt="Hình ảnh có thể bị lỗi khi cập nhật" />
                    </div>
                    <div className ="watchphim-name">
                        <div>Tên phim: {detail.title}</div>
                        <div>Thể loại: {detail.category}</div>
                        <div>{pageCount == 1 ? '' : `Số tập: ${pageCount}`}</div>
                    </div>
                </div>
                <div className="watchphim-video">
                    
                    {
                        watch.slice(tapVisited, tapVisited + tapPage).map((item, i) => (
                                <iframe src={item} title={detail.title} allowFullScreen key={i}></iframe>
                            ))
                    }   
                </div>
                <div >
                        <div className='h3'>
                            <h3>{pageCount == 1 ? '' : 'Chọn tập phim'}</h3>
                        </div>
                    {
                    pages != 1 ? (
                        <div className="table__pagination">
                            {
                                range.map((item, index) => (
                                    <div key={index} className={`table__pagination-item ${currPage === index? 'active' : ''}`} onClick={() => selectPage(index)}>
                                        {item + 1}
                                    </div>
                                ))
                            }
                        </div>
                    ) : null
                }
                        
                </div>
                <Footer />
            </div>
        </>
    )
}
