import React from 'react';
import Slider from 'react-slick';
import './Home.scss';



class LatestNews extends React.Component{
    render(){
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 2
        };
        return (
            <div style={{ background: '' }} >
                <Slider {...settings}>

                    <figure className="figure-container px-2">
                        <div>
                            <div className="fig-image">
                                <span className=" tag text-light  font-weight-bold">Summer Races</span>

                            </div>
                        </div>
             
                        <figcaption className="figure-caption">
                            <p className="h6 caption-text font-weight-bold">Racing in the summer at Boulder ...</p>
                            <p className="date">10 AUG 2020</p>
                        </figcaption>
                    </figure>

                    <figure className="figure-container px-2">
                        <div className="youth-biking-image">
                            <span className=" tag text-light font-weight-bold">Youth Bike Racing</span>

                        </div>
                        <figcaption className="figure-caption">
                            <p className="h6 caption-text font-weight-bold">Youths sports at a very young age ...</p>
                            <p className="date">12 AUG 2020</p>
                        </figcaption>
                    </figure>

                    <figure className="figure-container px-2">
                        <div className="mascot">
                            <span className=" tag text-light font-weight-bold">Mascots</span>

                        </div>
                        <figcaption className="figure-caption">
                            <p className="h6 caption-text font-weight-bold">The Boulder Bike 2020 mascot will be ...</p>
                            <p className="date">14 AUG 2020</p>
                        </figcaption>
                    </figure>

                    <figure className="figure-container px-2">
                        <div className="olympic">
                            <span className=" tag text-light font-weight-bold">OLYMPIC NEWS</span>

                        </div>
                        <figcaption className="figure-caption">
                            <p className="h6 caption-text font-weight-bold">Boulder Bike 2020 participant at the olympic games ...</p>
                            <p className="date">16 AUG 2020</p>
                        </figcaption>
                    </figure>

                    <figure className="figure-container px-2">
                        <div className="fig-image">
                            <span className=" tag text-light font-weight-bold">OLYMPIC NEWS</span>

                        </div>
                        <figcaption className="figure-caption">
                            <p className="h6 caption-text font-weight-bold">Safer Sport day to reinforce the utmost</p>
                            <p className="date">08 AUG 2020</p>
                        </figcaption>
                    </figure>
                    <figure className="figure-container px-2">
                        <div className="fig-image">
                            <span className=" tag text-light font-weight-bold">OLYMPIC NEWS</span>

                        </div>
                        <figcaption className="figure-caption">
                            <p className="h6 caption-text font-weight-bold">Safer Sport day to reinforce the utmost</p>
                            <p className="date">08 AUG 2020</p>
                        </figcaption>
                    </figure>
                  
                </Slider>
            </div>
        )
    }
}

export default LatestNews;
