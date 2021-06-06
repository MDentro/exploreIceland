import React from "react";
import "./South.css";
import ImageCard from "../../components/imageCard/ImageCard";
import mapSouth from "../../assets/map-south.JPG";


function South() {
    return (
        <div className="container-south">
            <article className="title" id="container-south__item-a">
                <h1 className="container-south__h1">Regio Zuid</h1>
                <p className="subtitle">Lorem ipsum dolor sit amet</p>
            </article>

            <img src={mapSouth} alt="map-south" id="container-south__item-b"/>

            <article className="item-text" id="container-south__item-c">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur assumenda dignissimos
                    exercitationem maiores quas. Aspernatur aut consectetur cupiditate deleniti, doloribus esse in
                    incidunt minus omnis repellendus rerum tenetur, veniam voluptas.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias assumenda autem consequuntur cum
                    deleniti ea enim eos eveniet excepturi exercitationem, explicabo facilis fugiat harum id illum
                    impedit in labore libero molestias necessitatibus nemo, nisi non nulla optio pariatur perferendis
                    provident quae quia sapiente soluta sunt vero voluptas voluptate voluptates voluptatibus?</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus odio quaerat quasi voluptas? Est
                    eveniet harum officiis omnis! Autem dolorem doloribus explicabo id inventore pariatur quos unde?
                    Aperiam culpa debitis, deserunt dolore enim explicabo modi nobis quaerat quibusdam repudiandae?
                    Recusandae.</p>
            </article>

            <div className="image-container-right" id="container-south__item-d">
                <ImageCard
                    img={`https://www.iceland.is/images/photos/rvk-jolastemning-snjor-vetur-2011-291-2.jpg?800x600;crop`}
                    imgDescription="hallgrimskirkja"
                />
            </div>

            <article className="item-text" id="container-south__item-e">
                <h2>Lorem ipsum dolor sit amet, consectetur. </h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur assumenda dignissimos
                    exercitationem maiores quas. Aspernatur aut consectetur cupiditate deleniti, doloribus esse in
                    incidunt minus omnis repellendus rerum tenetur, veniam voluptas.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias assumenda autem consequuntur cum
                    deleniti ea enim eos eveniet excepturi exercitationem, explicabo facilis fugiat harum id illum
                    impedit in labore libero molestias necessitatibus nemo, nisi non nulla optio pariatur perferendis
                    provident quae quia sapiente soluta sunt vero voluptas voluptate voluptates voluptatibus?</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus odio quaerat quasi voluptas? Est
                    eveniet harum officiis omnis! Autem dolorem doloribus explicabo id inventore pariatur quos unde?
                    Aperiam culpa debitis, deserunt dolore enim explicabo modi nobis quaerat quibusdam repudiandae?
                    Recusandae.</p>
            </article>

            <ImageCard
                img={`https://www.iceland.is/images/photos/lundi-003-2.jpg?800x600;crop`}
                imgDescription="puffins"
                id="container-south__item-f"
            />

            <div className="quote-container" id="container-south__item-g">
                <article className="container-south__item-quote">
                    <h3>"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, voluptate!"</h3>
                </article>
            </div>

            <ImageCard
                img={`https://www.iceland.is/images/photos/untitled-497.jpg?800x600;crop`}
                imgDescription="reynisdrangar"
                id="container-south__item-h"
            />

            <div className="image-container-right" id="container-south__item-i">
                <ImageCard
                    img={`https://www.iceland.is/images/photos/svartifoss-aug09-108_09_10-2.jpg?800x600;crop`}
                    imgDescription="svartifoss"
                />
            </div>

            <article className="item-text" id="container-south__item-j">
                <h2>Lorem ipsum dolor sit amet. </h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur assumenda dignissimos
                    exercitationem maiores quas. Aspernatur aut consectetur cupiditate deleniti, doloribus esse in
                    incidunt minus omnis repellendus rerum tenetur, veniam voluptas.</p>
            </article>

            <article className="item-text" id="container-south__item-k">
                <h2>Lorem ipsum dolor sit. </h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur assumenda dignissimos
                    exercitationem maiores quas. Aspernatur aut consectetur cupiditate deleniti, doloribus esse in
                    incidunt minus omnis repellendus rerum tenetur, veniam voluptas.</p>
            </article>

            <footer id="container-south__item-l">© 2021 Explore Iceland</footer>
        </div>
    );
}

export default South;