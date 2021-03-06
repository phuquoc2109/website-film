import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../scss/Navbar.css';

export default function Navbar(props) {
    const {clickSearch} = props;
    const [click, setClick] = useState(false);
    const handleClick = () => {
        setClick(!click);
    }

    return (
        <div>
            <nav className="navbar">
                <div className="navbar-container">
                    <div className="navabar-container-logo">
                        <Link to="/" className="navbar-logo" onClick={handleClick}><i style={{marginRight:"5px", fontSize:"30px"}} className="fas fa-film"></i>Phim Hay PQ</Link> 
                    </div>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? "navbar-container-menu active" : "navbar-container-menu"}>
                        <li>
                            <Link 
                            className="navbar-menu-li" 
                            to="/" 
                            onClick={handleClick}
                            >
                            Home
                            </Link>
                        </li>
                        <li>
                            <Link 
                            className="navbar-menu-li" 
                            to="/phimbo" 
                            onClick={handleClick}
                            >
                            Phim bộ
                            </Link>
                        </li>
                        <li>
                            <Link 
                            className="navbar-menu-li" 
                            to="/phimle" 
                            onClick={handleClick}
                            >
                                Phim lẻ
                            </Link>
                        </li>
                        <li>
                            <Link 
                            className="navbar-menu-li" 
                            to="/phimchieurap" 
                            onClick={handleClick}
                            >
                                Phim chiếu rạp
                            </Link>
                        </li>
                        <li>
                            <Link 
                            className="navbar-menu-li" 
                            to="/phimhoathinh" 
                            onClick={handleClick}
                            >
                                Phim hoạt hình
                            </Link>
                        </li>
                    </ul>
                    <a onClick={() => clickSearch()}><i className="fas fa-search" /></a>
                </div>
            </nav>
        </div>
    )
}
