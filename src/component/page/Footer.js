import React from 'react';
import '../scss/Footer.css';

export default function Footer() {
    return (
        <div className="footer">
            <div className="footer-title">Phim Hay PQ</div>
            <ul className="footer-description">
                <div>Thông tin liên hệ</div>
                <li>Email: Quocduongphu@gmail.com</li>
                <li>SDT: 0916 904 140</li>
                <li>Địa chỉ: Tôn Thất Tùng - Nam Phước - Duy Xuyên - Quảng Nam</li>
            </ul>
            <ul className="footer-contact-icon">
                <li><a href="https://www.facebook.com/phu.quoocs/"><i class="fab fa-facebook"></i></a></li>
                <li><a href="https://www.instagram.com/__phuquoc"><i class="fab fa-instagram"></i></a></li>
                <li><a href="https://twitter.com/quoc14391560"><i class="fab fa-twitter"></i></a></li>
            </ul>
        </div>
    )
}