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
                                <span className=" tag text-dark font-weight-bold">Summer Races</span>

                            </div>
                        </div>
             
                        <figcaption className="figure-caption">
                            <p className="h6 caption-text font-weight-bold">Find out how the hot weather affects boulder bike racing</p>
                            <p className="date">08 AUG 2020</p>
                        </figcaption>
                    </figure>

                    <figure className="figure-container px-2">
                        <div className="fig-image">
                            <span className=" tag text-dark font-weight-bold">Youth Bike Racing</span>

                        </div>
                        <figcaption className="figure-caption">
                            <p className="h6 caption-text font-weight-bold">Ca</p>
                            <p className="date">08 AUG 2020</p>
                        </figcaption>
                    </figure>

                    <figure className="figure-container px-2">
                        <div className="fig-image">
                            <span className=" tag text-dark font-weight-bold">OLYMPIC NEWS</span>

                        </div>
                        <figcaption className="figure-caption">
                            <p className="h6 caption-text font-weight-bold">Safer Sport day to reinforce the utmost</p>
                            <p className="date">08 AUG 2020</p>
                        </figcaption>
                    </figure>

                    <figure className="figure-container px-2">
                        <div className="fig-image">
                            <span className=" tag text-dark font-weight-bold">OLYMPIC NEWS</span>

                        </div>
                        <figcaption className="figure-caption">
                            <p className="h6 caption-text font-weight-bold">Safer Sport day to reinforce the utmost</p>
                            <p className="date">08 AUG 2020</p>
                        </figcaption>
                    </figure>

                    <figure className="figure-container px-2">
                        <div className="fig-image">
                            <span className=" tag text-dark font-weight-bold">OLYMPIC NEWS</span>

                        </div>
                        <figcaption className="figure-caption">
                            <p className="h6 caption-text font-weight-bold">Safer Sport day to reinforce the utmost</p>
                            <p className="date">08 AUG 2020</p>
                        </figcaption>
                    </figure>
                    <figure className="figure-container px-2">
                        <div className="fig-image">
                            <span className=" tag text-dark font-weight-bold">OLYMPIC NEWS</span>

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
