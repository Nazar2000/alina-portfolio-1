import alinaTop from "./assets/alina-head.jpg";
import {Component} from "react";
import photo1 from "./assets/photo1.jpeg";
import photo2 from "./assets/photo2.jpeg";
import photo3 from "./assets/photo3.jpeg";
import photo4 from "./assets/photo4.jpg";
import photo5 from "./assets/photo5.jpeg";
import photo6 from "./assets/photo6.jpg";
import photo7 from "./assets/photo7.jpg";
import photo8 from "./assets/photo8.jpeg";
import photo9 from "./assets/photo9.jpeg";
import photo10 from "./assets/photo10.jpeg";
import photo11 from "./assets/photo11.JPG";
import photo12 from "./assets/photo12.JPG";
import photo13 from "./assets/photo13.jpeg";
import photo14 from "./assets/photo14.jpeg";
import photo15 from "./assets/photo15.jpeg";
import photo16 from "./assets/photo16.jpeg";
import photo17 from "./assets/photo17.jpeg";
import photo18 from "./assets/photo18.jpg";
import photo19 from "./assets/photo19.jpg";
import photo20 from "./assets/photo20.jpg";
import photo21 from "./assets/photo21.jpeg";
import photo22 from "./assets/photo22.JPG";
import photo24 from "./assets/photo24.jpeg";
import photo25 from "./assets/photo25.jpeg";
import './App.scss';

export class Landing extends Component {

    render() {
        const images = [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8, photo9, photo10, photo11, photo12, photo13, photo14, photo15, photo16, photo17, photo18, photo19, photo20, photo21, photo22, photo24, photo25];
        const listItems = images.map((img, i) => <img src={img} alt="" key={i} id={'section-' + i}/>);

        return (
            <div>
                <div className="alina-portfolio__top">
                    <div className="alina-portfolio__about">
                        <h3>
                            Hi, I'm Alina. <br/>
                            And I am an artist, I like to draw. <br/>
                            This is my personal website portfolio, where I will share my pictures.
                        </h3>
                    </div>
                    <img src={alinaTop} alt=""/>
                </div>

                <div className="alina-portfolio__works">
                    {listItems}
                </div>
            </div>
        )
    }
}
