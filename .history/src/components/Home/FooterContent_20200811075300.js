import React from 'react';
import './Home.scss';
import Accordion from '../Accordions/Accordions';


export default function FooterContent(){
    return (
        <div>
            <div className="show-big" style={{ background: '#DDDDDD' }}>
                <div className="container">
                    <div className="footer-container">

                        <div className="footer-content">
                            <h6 className="footer-heading-text py-3">Boulder Bike Tour</h6>
                            <ul className="footer-list">
                                <li className="footer-list-item pb-2"><a style={{ color: '#777' }} href="#">All Boulder Bike tours</a></li>
                                <li className="footer-list-item pb-2"><a style={{ color: '#777' }} href="#">Summer races</a></li>
                                <li className="footer-list-item pb-2"><a style={{ color: '#777' }} href="#">Winter races</a></li>
                                <li className="footer-list-item pb-2"><a style={{ color: '#777' }} href="#">Youth biking races</a></li>
                                <li className="footer-list-item"><a style={{ color: '#777' }} href="#">Results</a></li>
                            </ul>
                        </div>

                        <div className="footer-content">
                            <h6 className="footer-heading-text py-3">Media</h6>
                            <ul className="footer-list">
                                <li className="footer-list-item pb-2"><a style={{ color: '#777' }} href="#">Media Resources</a></li>
                                <li className="footer-list-item pb-2"><a style={{ color: '#777' }} href="#">Latest News</a></li>
                                <li className="footer-list-item pb-2"><a style={{ color: '#777' }} href="#">Key event calender</a></li>
                                <li className="footer-list-item pb-2"><a style={{ color: '#777' }} href="#">publications</a></li>
                                <li className="footer-list-item pb-2"><a style={{ color: '#777' }} href="#">Documents</a></li>
                                <li className="footer-list-item"><a style={{ color: '#777' }} href="#">Faq</a></li>

                            </ul>
                        </div>

                        <div className="footer-content">
                            <h6 className="footer-heading-text py-3">Behind the games</h6>
                            <ul className="footer-list">
                                <li className="footer-list-item pb-2"><a style={{ color: '#777' }} href="#">Mascots</a></li>
                                <li className="footer-list-item pb-2"><a style={{ color: '#777' }} href="#">acient games</a></li>
                                <li className="footer-list-item pb-2"><a style={{ color: '#777' }} href="#">Past footage</a></li>
                            </ul>
                        </div>

                        <div className="footer-content">
                            <h6 className="footer-heading-text py-3">PROGRAMMES</h6>
                            <ul className="footer-list">
                                <li className="footer-list-item pb-2"><a style={{ color: '#777' }} href="#">Boulder Bike Clubs</a></li>
                                <li className="footer-list-item pb-2"><a style={{ color: '#777' }} href="#">women in sports</a></li>
                                <li className="footer-list-item pb-2"><a style={{ color: '#777' }} href="#">sports for justice</a></li>
                                <li className="footer-list-item pb-2"><a style={{ color: '#777' }} href="#">Youth biking races</a></li>
                                <li className="footer-list-item"><a style={{ color: '#777' }} href="#">Boulder Bikers NGO</a></li>
                            </ul>
                        </div>

                        <div className="footer-content">
                            <h6 className="footer-heading-text py-3">Management Team</h6>
                            <ul className="footer-list">
                                <li className="footer-list-item pb-2"><a style={{ color: '#777' }} href="#">All Boulder Bike tours</a></li>
                                <li className="footer-list-item pb-2"><a style={{ color: '#777' }} href="#">The Organisation</a></li>
                                <li className="footer-list-item pb-2"><a style={{ color: '#777' }} href="#">Our Motto</a></li>
                                <li className="footer-list-item pb-2"><a style={{ color: '#777' }} href="#">Sponsors</a></li>
                                <li className="footer-list-item"><a style={{ color: '#777' }} href="#">Careers</a></li>
                            </ul>
                        </div>



                    </div>
                </div>

            </div>


            <div className="show-small" style={{ background: '#DDDDDD' }}>
                <div className="container py-5">
                    <Accordion />
                </div>
            </div>



        </div>
    )
}
