import React from 'react';
import "./ImageCard.css"

function ImageCard({img, imgDescription, id}) {
    return (
            <section className="image-container" id={id}>
                <article>
                    {<img
                        className="image__resize"
                        src={img}
                        alt={imgDescription}
                    />}
                </article>
            </section>
    );
}

export default ImageCard;