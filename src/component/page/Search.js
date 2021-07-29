import { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { FilmContext } from "../../provider/ListFilmProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Search = ({clickSearch}) => {
    
    const film = useContext(FilmContext);
    const [phimbo, setPhimbo] = useState(film[0].phimbo);
    const [phimle, setPhimle] = useState(film[0].phimle);
    const [phimchieurap, setPhimchieurap] = useState(film[0].phimchieurap);
    const [phimhoathinh, setPhimhoathinh] = useState(film[0].phimhoathinh);
    const [phimSearch, setPhimSearch] = useState([])
    const [valueSearch, setValueSearch] = useState('');

    
    const handleSearch = (e) => {
      setValueSearch(e.target.value);
    }

    const onSubmit = () => {
      let movie = []
      if (valueSearch) {
        phimbo.filter(p => {
          if (p.title.toLowerCase().includes(valueSearch.toLowerCase()))  {
            movie.push(p)
          }
  
        });
        phimle.filter(p => {
           if (p.title.toLowerCase().includes(valueSearch.toLowerCase())) {
            movie.push(p)
          }
  
        });
        phimchieurap.filter(p => {
          if (p.title.toLowerCase().includes(valueSearch.toLowerCase())) {
            movie.push(p)
          }
  
        });
        phimhoathinh.filter(p => {
          if (p.title.toLowerCase().includes(valueSearch.toLowerCase())) {
            movie.push(p)
          }
  
        });
        if(movie == 0){
            toast.info('Không tìm thấy phim bạn cần tìm!!!')
            setPhimSearch([]);
          }
        else{
            setPhimSearch(movie);
            toast.success('Phim của bạn đây!!!');
        }
        setValueSearch('')
      }}
  
      toast.configure();
    return (

        <div className='search' >
            
            <div className="form-search">
                <input type='text'
                    value={valueSearch}
                    onChange={handleSearch}
                    placeholder='Tên phim...'
                />
                <button onClick={() => onSubmit()}>Tìm kiếm</button>
            </div>
            <div className="phim-search">
            {               
                phimSearch.slice(0, 4).map((item) => (
                    <div className='card-search' key={item.imageUrl}>
                        <img src={item.imageUrl} alt='' />
                        <div className='search-box'>
                            <h4>{item.title}</h4>
                            <h5>{item.category}</h5>
                           <Link to={`/xemphim/${item.imageUrl.slice(58, 75)}`} onClick={() => clickSearch()} > <button>Xem phim</button></Link>
                        </div>
                    </div>
                ))  
            }
            </div>
            <div className='scroll-top'>
                <i className="fas fa-chevron-circle-up" onClick={() => clickSearch()} />
            </div>
        </div>
    )
}

export default Search