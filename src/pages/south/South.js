import React from "react";
import "./South.css";
import ImageCard from "../../components/imageCard/ImageCard";
import puffins from "../../assets/south/puffins.jpg";
import hallgrimskirkja from "../../assets/south/hallgrimskirkja.jpg";
import mapSouth from "../../assets/south/map-south.JPG";
import reynisdrangar from "../../assets/south/reynisdrangar.jpg";
import svartifoss from "../../assets/south/svartifoss.jpg";


function South() {
    return (
        <div className="container-south">
            <h1 className="item-text" id="item-a">Regio Zuid (under construction)</h1>
            <p className="item-empty"> </p>
            <img src={mapSouth} alt="map-south" className="item map" id="item-b"/>
            <article className="item-text" id="item-c">
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
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus odio quaerat quasi voluptas? Est
                    eveniet harum officiis omnis! Autem dolorem doloribus explicabo id inventore pariatur quos unde?
                    Aperiam culpa debitis, deserunt dolore enim explicabo modi nobis quaerat quibusdam repudiandae?
                    Recusandae.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur assumenda dignissimos
                    exercitationem maiores quas. Aspernatur aut consectetur cupiditate deleniti, doloribus esse in
                    incidunt minus omnis repellendus rerum tenetur, veniam voluptas.</p>
            </article>
            <ImageCard
                img={hallgrimskirkja}
                imgDescription="hallgrimskirkja"
                id="item-d"
            />
            <article className="item-text" id="item-e">
                <h3>Lorem ipsum dolor sit amet, consectetur. </h3>
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
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus odio quaerat quasi voluptas? Est
                    eveniet harum officiis omnis! Autem dolorem doloribus explicabo id inventore pariatur quos unde?
                    Aperiam culpa debitis, deserunt dolore enim explicabo modi nobis quaerat quibusdam repudiandae?
                    Recusandae.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur assumenda dignissimos
                    exercitationem maiores quas. Aspernatur aut consectetur cupiditate deleniti, doloribus esse in
                    incidunt minus omnis repellendus rerum tenetur, veniam voluptas.</p>
            </article>

            <ImageCard
                img={puffins}
                imgDescription="puffins"
                id="item-f"
            />

             <article className="item-quote" id="item-g">
                 <h3>"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, voluptate!"</h3>
             </article>

            <ImageCard
                img={reynisdrangar}
                imgDescription="reynisdrangar"
                id="item-h"
            />

            <ImageCard
                img={svartifoss}
                imgDescription="svartifoss"
                id="item-i"
            />

            <article className="item-text" id="item-j">
                <h3>Lorem ipsum dolor sit amet. </h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur assumenda dignissimos
                    exercitationem maiores quas. Aspernatur aut consectetur cupiditate deleniti, doloribus esse in
                    incidunt minus omnis repellendus rerum tenetur, veniam voluptas.</p>
            </article>

            <article className="item-text" id="item-k">
                <h3>Lorem ipsum dolor sit. </h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur assumenda dignissimos
                    exercitationem maiores quas. Aspernatur aut consectetur cupiditate deleniti, doloribus esse in
                    incidunt minus omnis repellendus rerum tenetur, veniam voluptas.</p>
            </article>
            <footer id="item-l">© 2021 Explore Iceland</footer>
        </div>
    );
}

export default South;