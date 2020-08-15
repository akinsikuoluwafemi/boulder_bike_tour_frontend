import React from 'react'
import './Home.scss'
import { Link } from 'react-router-dom'
import HeaderTime from '../HeaderTime/HeaderTime'
import LatestNews from './LatestNews';
import Winners from './Winners';
import FooterContent from './FooterContent';


const Home = () =>{
    return (
        <div>
            <HeaderTime />

            <nav className="navbar navbar-expand-sm sticky-top navbar-light bg-light">
                <div className="container">
                    <Link to="/" className="navbar-brand">Boulder Bike Tour</Link>
                    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbar1">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbar1">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to="/photos" className="nav-link" >Photos</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/contest" className="nav-link" >Contest</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/riders" className="nav-link" >Riders</Link>
                            </li>
                        </ul>
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link to="/location" className="nav-link">Location</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>


            <div className="header-hero">
                <div className="heading-text">
                    <div className=" card-width shadow text-white px-3 py-2 ">
                        <h4 className="">Connect with the world best bikers at the Boulder Bike Tour</h4>

                        <p className="text-white">You're all invited to Our upcoming Bike tour which happens once every decade. Taking place at colorado at the foot of the Rocky Mountains where we host Bikers from all over the globe. Starts on 24 July</p>

                        <a className="btn-hero">
                            <span className="btn-text text-info">Learn More</span>

                            <svg width="38px" height="38px" viewBox="0 0 38 38" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="Lead" stroke="none" stroke-width="1" fill="#fff" fill-rule="evenodd"><g id="DevCircle-Lead" transform="translate(-104.000000, -446.000000)" stroke="#232323"><g id="Managing-a-circle" transform="translate(0.000000, 136.000000)"><g id="Button/Large" transform="translate(105.000000, 311.000000)"><g id="Icon/Button-arrow"><g id="arrow-group-right-link"><circle id="Oval" opacity="0.5" cx="18" cy="18" r="18"></circle><g id="Group-2" opacity="0.828706287" transform="translate(11.000000, 13.000000)" strokeWidth="2"><polyline id="Path-2" strokeLinecap="square" points="8 0 13 5 8 10"></polyline><path d="M0,5 L13,5" id="Path-3"></path></g></g></g></g></g></g></g></svg>

                        </a>
                    </div>
                </div>
                <div className="heading-img">

                </div>
            </div>

            <div className="">
                <section className="show-small container ">
                    <p className="h3 py-4">Latest News</p>

                    <div className="slide-container">
                        <figure className="figure-container">
                            <div className="fig-image">
                                <span className=" tag text-dark font-weight-bold">OLYMPIC NEWS</span>

                            </div>
                            <figcaption className="figure-caption">
                                <p className="h6 caption-text font-weight-bold">Safer Sport day to reinforce the utmost</p>
                                <p className="date">08 AUG 2020</p>
                            </figcaption>
                        </figure>

                        <figure className="figure-container">
                            <div className="fig-image">
                                <span className="tag  text-dark font-weight-bold">OLYMPIC NEWS</span>
                            </div>
                            <figcaption className="figure-caption">
                                <p className="h6 caption-text font-weight-bold">Safer Sport day to reinforce the utmost</p>
                                <p className="date">08 AUG 2020</p>
                            </figcaption>
                        </figure>

                        <figure className="figure-container">
                            <div className="fig-image">
                                <span className="tag text-dark font-weight-bold">OLYMPIC NEWS</span>

                            </div>
                            <figcaption className="figure-caption">
                                <p className="h6 caption-text font-weight-bold ">Safer Sport day to reinforce the utmost</p>
                                <p className="date">08 AUG 2020</p>
                            </figcaption>
                        </figure>

                        <figure className="figure-container">
                            <div className="fig-image">
                                <span className="tag text-dark font-weight-bold">OLYMPIC NEWS</span>

                            </div>
                            <figcaption className="figure-caption">
                                <p className="h6 caption-text font-weight-bold ">Safer Sport day to reinforce the utmost</p>
                                <p className="date">08 AUG 2020</p>
                            </figcaption>
                        </figure>

                        <figure className="figure-container">
                            <div className="fig-image">
                                <span className="tag text-dark font-weight-bold">OLYMPIC NEWS</span>

                            </div>
                            <figcaption className="figure-caption">
                                <p className="h6 caption-text font-weight-bold ">Safer Sport day to reinforce the utmost</p>
                                <p className="date">08 AUG 2020</p>
                            </figcaption>
                        </figure>

                        <figure className="figure-container">
                            <div className="fig-image">
                                <span className="tag text-dark font-weight-bold">OLYMPIC NEWS</span>

                            </div>
                            <figcaption className="figure-caption">
                                <p className="h6 caption-text font-weight-bold ">Safer Sport day to reinforce the utmost</p>
                                <p className="date">08 AUG 2020</p>
                            </figcaption>
                        </figure>



                    </div>
                </section>
            </div>

            <section className="show-big container ">
                <p className="h3 py-3">Latest News</p>

                <LatestNews />

            </section>


            <div className=" my-5">
                <section className="container">
                    <p className="h3 py-3">Past Winners</p>
                    <div className="row">
                        <Winners name="Micah Thomas" text="Some quick example text to build on the card title and make up the bulk of the card's content." contact="Contact Me" />
                        <Winners name="Micah Thomas" text="Some quick example text to build on the card title and make up the bulk of the card's content." contact="Contact Me" />
                        <Winners name="Micah Thomas" text="Some quick example text to build on the card title and make up the bulk of the card's content." contact="Contact Me" />
                        <Winners name="Micah Thomas" text="Some quick example text to build on the card title and make up the bulk of the card's content." contact="Contact Me" />
                        <Winners name="Micah Thomas" text="Some quick example text to build on the card title and make up the bulk of the card's content." contact="Contact Me" />
                        <Winners name="Micah Thomas" text="Some quick example text to build on the card title and make up the bulk of the card's content." contact="Contact Me" />
                    </div>
                </section>
            </div>

            
            <FooterContent/>


            



        </div>
    )
}

export default Home