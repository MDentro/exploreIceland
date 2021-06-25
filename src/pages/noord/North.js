import React from "react";
import ImageCardCircle from "../../components/imageCardCircle/imageCardCircle";
import "./North.css";
import ImageCard from "../../components/imageCard/ImageCard";
import mapNorth from "../../assets/map-north.JPG";

function North() {
    return (
        <div className="container-north">
            <h1 className="container-north-title">Regio Noord</h1>

            <section className="container-north__introduction-container">
            <p className="container-north__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad asperiores consequatur corporis ea eaque
                fugiat quibusdam rem? Est, nesciunt, sed? Adipisci blanditiis consequatur dicta earum quisquam sapiente
                sit velit? Animi beatae dolores fugiat modi numquam ratione reiciendis sapiente tempore voluptates
                voluptatibus. Aliquam aperiam aspernatur consequuntur deserunt, distinctio dolore, dolores excepturi
                harum incidunt ipsum maiores minima neque optio perferendis, porro quis similique suscipit temporibus
                ullam unde. Ipsa nemo odit unde? Ab ad et iste, magnam modi perspiciatis rem reprehenderit vero!
                Accusantium aliquid architecto aspernatur cumque deleniti dignissimos dolor dolorem doloremque est fuga
                inventore labore laudantium magni molestiae necessitatibus non numquam officia perferendis placeat quae
                quaerat quasi quis quisquam ratione, sed ullam ut vero. Accusamus adipisci aliquid aspernatur assumenda
                atque consectetur, deleniti deserunt dolorum ducimus eaque eius explicabo facere fugit hic id illo, iure
                laboriosam laudantium magnam molestias nobis perferendis placeat quaerat quis quo reiciendis rem
                reprehenderit sed similique sint sit sunt vero vitae! Ab aspernatur beatae commodi, ducimus, expedita.
                </p>
            </section>

            <section className="container-north__circle-image-container">
                <ImageCardCircle
                    img={`https://www.iceland.is/images/photos/namaskard-hverir-ferdamenn-29_30_31-1.jpg?300x300;crop`}
                    imgDescription="myvatn"
                    title="Lorem ipsum dolor sit amet"/>


                <ImageCardCircle
                    img={`https://www.iceland.is/images/photos/heimskautsgerdi-raufarhofn-jan-2019-57-pano-copy.jpg?300x300;crop`}
                    imgDescription="arctic henge raufahofn"
                    title="Lorem ipsum dolor"/>

                <ImageCardCircle
                    img={`https://www.iceland.is/images/photos/raggi-th-mynd-vatn-hestar.jpg?300x300;crop`}
                    imgDescription="horses"
                    title="Lorem ipsum dolor sit"/>
            </section>
            <h2>Lorem ipsum dolor sit amet, consectetur adipisicing</h2>
            <p className="container-north__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad asperiores consequatur corporis ea eaque
                fugiat quibusdam rem? Est, nesciunt, sed? Adipisci blanditiis consequatur dicta earum quisquam sapiente
                sit velit? Animi beatae dolores fugiat modi numquam ratione reiciendis sapiente tempore voluptates
                voluptatibus. Aliquam aperiam aspernatur consequuntur deserunt, distinctio dolore, dolores excepturi
                harum incidunt ipsum maiores minima neque optio perferendis, porro quis similique suscipit temporibus
                ullam unde. Ipsa nemo odit unde? Ab ad et iste, magnam modi perspiciatis rem reprehenderit vero!
                Accusantium aliquid architecto aspernatur cumque deleniti dignissimos dolor dolorem doloremque est fuga
                inventore labore laudantium magni molestiae necessitatibus non numquam officia perferendis placeat quae
                quaerat quasi quis quisquam ratione, sed ullam ut vero. Accusamus adipisci aliquid aspernatur assumenda
                atque consectetur, deleniti deserunt dolorum ducimus eaque eius explicabo facere fugit hic id illo, iure
                laboriosam laudantium magnam molestias nobis perferendis placeat quaerat quis quo reiciendis rem
                reprehenderit sed similique sint sit sunt vero vitae! Ab aspernatur beatae commodi, ducimus, expedita
                fugiat impedit itaque iusto minus, nam non nulla placeat praesentium quisquam sunt. Illo in incidunt
                laborum maiores nam natus nemo quas soluta ullam voluptatibus? Architecto consequatur dolores explicabo
                facilis harum hic illum iste laboriosam magni, mollitia, non optio quisquam reprehenderit sint
                veniam?</p>

            <section className="container-north__bottom-image-container">
            <ImageCard
                img={`https://www.iceland.is/images/photos/laufaskirkja-nordurland-sumar-2012-4-edit.jpg?800x600;crop`}
                imgDescription="akureyri"
                id="container-north__akureyri"
            />

            <ImageCard
                img={`https://www.iceland.is/images/photos/akureyri-haust-17-698-hdr-pano.jpg?800x600;crop`}
                imgDescription="ejafjordur"
                id="container-north__ejafjordur"
            />
            </section>
            <img src={mapNorth} alt="map-north" id="container-north__map-north"/>

            <footer>© 2021 Explore Iceland</footer>
        </div>
    );
}

export default North;