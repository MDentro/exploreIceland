import React from 'react';
import "./Image.css"

function Image({img, imgDescription}) {
    return (
        <section className="image-container">
            <article>
                {<img
                    className="image"
                    src={img}
                    alt={imgDescription}
                />}
            </article>
        </section>
    );
}

export default Image;