import React from "react";
import ImageCard from "../../components/imageCard/ImageCard";
import "./Home.css";
import kirkjufellsfoss from "../../assets/kirkjufellsfoss.jpg";

function Home() {
    return (
        <>
            <header>
                <h1>Explore Iceland</h1>
            <div className="home-image-container">
                {/*<ImageCard*/}
                {/*    className="image"*/}
                {/*    img={kirkjufellsfoss}*/}
                {/*    imgDescription="kikjufellsfoss"*/}
                {/*/>*/}
            </div>
            </header>
            <main>
                <h1>Lorem ipsum dolor sit amet.</h1>
                <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A dolores labore nihil provident unde. Alias aliquid autem beatae commodi consequuntur delectus deleniti dicta dolor, dolorem est et eum ex excepturi exercitationem facere fugit harum itaque maiores minima molestiae mollitia nam necessitatibus nesciunt nisi nobis optio pariatur quasi qui quibusdam repellendus reprehenderit saepe sapiente sunt vero voluptas voluptatem voluptatibus. Animi at delectus doloribus impedit maiores nisi non, odit, quasi saepe sint ullam veniam voluptates. Alias dolor esse facere ipsa, iure nulla odit perferendis quidem. Cumque debitis earum eligendi error explicabo fugiat in maiores minima nihil optio, quibusdam quo recusandae ut vel.
                </div>
            </main>
        </>
    );
}

export default Home;