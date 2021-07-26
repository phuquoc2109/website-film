import React from 'react'
import Footer from '../Footer'
import Navbar from '../Navbar'
import SlidesPhimBo from '../SlidesPhimBo'
import SlidesPhimChieuRap from '../SlidesPhimChieuRap'
import SlidesPhimLe from '../SlidesPhimLe'
import SlidesPhimHoatHinh from '../SlidesPhimThieuNhi'

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
