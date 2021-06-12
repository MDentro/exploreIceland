import React from "react";
import "./ImageCardCircle.css"

function ImageCardCircle({img, imgDescription, id, title}) {
    return (
        <section className="image-container--circle" id={id}>
            <article>
                {<img
                    className="image__resize--circle"
                    src={img}
                    alt={imgDescription}
                />}
                <p className="image-container--circle-title">{title}</p>
            </article>
        </section>
    );
}

export default ImageCardCircle;