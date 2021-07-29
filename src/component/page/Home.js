import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import SlidesPhimBo from '../Slides/SlidesPhimBo'
import SlidesPhimChieuRap from '../Slides/SlidesPhimChieuRap'
import SlidesPhimLe from '../Slides/SlidesPhimLe'
import SlidesPhimHoatHinh from '../Slides/SlidesPhimThieuNhi';
import '../../App.css'


export default function Home(props) {
    return (
        <div>
            <Navbar clickSearch={props.clickSearch} />
            <div className= "slide-animation">
                <SlidesPhimChieuRap />
                <SlidesPhimBo />
                <SlidesPhimLe />
                <SlidesPhimHoatHinh />
            </div>
            <Footer />
        </div>
    )
}
