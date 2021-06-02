import React from 'react';
import "./ImageCard.css"

function ImageCard({label, img, imgDescription}) {
    return (
        <section className={label}>
            <article>
                {<img className="image__resize" src={img} alt={imgDescription}/>}
            </article>
        </section>
    );
}

export default ImageCard;