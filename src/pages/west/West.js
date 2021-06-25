import React from "react";
import "./West.css"
import Image from "../../components/image/Image";
import mapWest from "../../assets/map-west.JPG";

function West() {
    return (
        <div className="container-west">
            <h1 className="container-west__title">Regio Snaefellsnes en Westfjorden</h1>
            <main>
                <article className="container-west__top">
                    <Image
                        img={`https://www.iceland.is/images/photos/kirkjufellsfoss-nordurljos-27.jpg?800x600;crop`}
                        imgDescription="kirkjufellsfoss"
                    />
                    <section className="container-west__display-right">
                        <h2>Lorem ipsum</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, culpa delectus deserunt
                            dolor
                            excepturi, illo incidunt minus nostrum optio, porro quibusdam quod ut vel vero voluptatem.
                            Accusamus
                            accusantium animi architecto aspernatur, at atque aut consectetur cumque, cupiditate dolores
                            in
                            ipsa
                            labore laudantium modi nesciunt nisi obcaecati perspiciatis porro praesentium quas quisquam
                            quos
                            ratione
                            sunt, temporibus vero? Accusantium aspernatur assumenda commodi, consequatur corporis
                            cupiditate
                            dicta
                            est et expedita fuga inventore laborum magnam modi nesciunt officia perferendis possimus
                            praesentium.
                        </p>
                    </section>
                </article>

                <article className="container-west__bottom">
                    <section className="container-west__display-left">
                        <h2>Lorem ipsum</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, culpa delectus deserunt
                            dolor excepturi, illo incidunt minus nostrum optio, porro quibusdam quod ut vel vero
                            voluptatem.
                            Accusamus accusantium animi architecto aspernatur, at atque aut consectetur cumque,
                            cupiditate dolores
                            in ipsa labore laudantium modi nesciunt nisi obcaecati perspiciatis porro praesentium quas
                            quisquam
                            quos ratione sunt, temporibus vero? Accusantium aspernatur assumenda commodi, consequatur
                            corporis
                            cupiditate dicta est et expedita fuga inventore laborum magnam modi nesciunt officia
                            perferendis possimus
                            praesentium.
                        </p>
                    </section>
                    <Image
                        img={`https://www.iceland.is/images/photos/lundi-003-2.jpg?800x600;crop`}
                        imgDescription="puffins"
                    />
                </article>
                <img src={mapWest} alt="map-west" id="container-west__map-west"/>
            </main>
            <footer>© 2021 Explore Iceland</footer>
        </div>
    );
}

export default West;