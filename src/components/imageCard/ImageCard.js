import React from 'react';
import "./ImageCard.css"

function ImageCard({label, img, imgDescription, id}) {
    return (
        <div className={label}>
            <section className="image-container">
                <article>
                    {<img
                        className="image__resize"
                        src={img}
                        alt={imgDescription}
                        id={id}
                    />}
                </article>
            </section>
        </div>
    );
}

export default ImageCard;