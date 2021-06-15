import React from "react";
import './ImageCarousel.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from "react-responsive-carousel";

const ImageCarousel = () => {
    return (
        <div className="page-container">
            <section className="container-carousel">
                <Carousel infiniteLoop autoPlay>
                    <div className="image">
                        <img src={`https://www.iceland.is/images/photos/img_1503---copy.jpg?800x600;crop`} alt="landmannalaugar"/>
                    </div>
                    <div className="image">
                        <img src={`https://www.iceland.is/images/photos/vatnajokull-sony-a9-mai-19--919-pano-2.jpg?800x600;crop`} alt="vatnajökull"/>
                    </div>
                    <div className="image">
                        <img src={`https://www.iceland.is/images/photos/longufjorur-mark-vest-472-3.jpg?800x600;crop`} alt="longufjorur mark vest"/>
                    </div>
                    <div className="image">
                        <img src={`https://www.iceland.is/images/photos/svinafellsjokull-ganga-672_hdr.jpg?800x600;crop`} alt="svinafellsjokull ganga"/>
                    </div>
                    <div className="image">
                        <img src={`https://www.iceland.is/images/photos/halendid-loftmyndir-vetur-17-488.jpg?800x600;crop`} alt="halendid loftmyndir vetur"/>
                    </div>
                </Carousel>

            </section>
        </div>
    );
}

export default ImageCarousel;
