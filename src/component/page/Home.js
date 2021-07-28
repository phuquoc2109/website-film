import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import SlidesPhimBo from '../Slides/SlidesPhimBo'
import SlidesPhimChieuRap from '../Slides/SlidesPhimChieuRap'
import SlidesPhimLe from '../Slides/SlidesPhimLe'
import SlidesPhimHoatHinh from '../Slides/SlidesPhimThieuNhi'

export default function Home() {
    return (
        <div>
            <Navbar />
            <SlidesPhimChieuRap />
            <SlidesPhimBo />
            <SlidesPhimLe />
            <SlidesPhimHoatHinh />
            <Footer />
        </div>
    )
}
