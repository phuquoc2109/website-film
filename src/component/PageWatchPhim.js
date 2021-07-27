import React from 'react';
import "./PageWatchPhim.css";
import ReactPlayer from 'react-player/lazy'

export default function PageWatchPhim(props) {
    const {phim} = props;
    console.log(phim.episode[0].url)
    return (
        <div className="watchphim">
            <div className="watchphim-des">
                <div className="watchphim-img">
                    <img src={phim.imageUrl} alt="Hình ảnh có thể bị lỗi khi cập nhật" />
                </div>
                <div className ="watchphim-name">
                    <div>{phim.title}</div>
                    <div>{phim.category}</div>
                </div>
            </div>
            <div className="watchphim-video">
                <iframe  width="50%" height="500px" src={phim.episode[0].url} allowFullScreen></iframe>
            {/* <ReactPlayer controls url={phim.episode[0].url} /> */}
            </div>
        </div>
    )
}
