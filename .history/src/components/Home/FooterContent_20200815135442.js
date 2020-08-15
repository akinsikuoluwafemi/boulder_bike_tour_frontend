import React from 'react';
import './Home.scss';
import Accordion from '../Accordions/Accordions';


export default function FooterContent(){
    return (
        <div>
            <div className="show-big" style={{ background: '#663399' }}>
                <div className="container">
                    <div className="footer-container">

                        <div className="footer-content">
                            <h6 className="footer-heading-text py-3">Boulder Bike Tour</h6>
                            <ul className="footer-list">
                                <li className="footer-list-item  pb-2"><a style={{ color: '#fff' }} href="#htt">All Boulder Bike tours</a></li>
                                <li className="footer-list-item pb-2"><a style={{ color: '#fff' }} href="#htt">Summer races</a></li>
                                <li className="footer-list-item pb-2"><a style={{ color: '#fff' }} href="#htt">Winter races</a></li>
                                <li className="footer-list-item pb-2"><a style={{ color: '#fff' }} href="#htt">Youth biking races</a></li>
                                <li className="footer-list-item"><a style={{ color: '#fff' }} href="#htt">Results</a></li>
                            </ul>
                        </div>

                        <div className="footer-content">
                            <h6 className="footer-heading-text py-3">Media</h6>
                            <ul className="footer-list">
                                <li className="footer-list-item pb-2"><a style={{ color: '#fff' }} href="#77">Media Resources</a></li>
                                <li className="footer-list-item pb-2"><a style={{ color: '#fff' }} href="#77">Latest News</a></li>
                                <li className="footer-list-item pb-2"><a style={{ color: '#fff' }} href="#77">Key event calender</a></li>
                                <li className="footer-list-item pb-2"><a style={{ color: '#fff' }} href="#77">publications</a></li>
                                <li className="footer-list-item pb-2"><a style={{ color: '#fff' }} href="#77">Documents</a></li>
                                <li className="footer-list-item"><a style={{ color: '#fff' }} href="#77">Faq</a></li>

                            </ul>
                        </div>

                        <div className="footer-content">
                            <h6 className="footer-heading-text py-3">Behind the games</h6>
                            <ul className="footer-list">
                                <li className="footer-list-item pb-2"><a style={{ color: '#fff' }} href="#77">Mascots</a></li>
                                <li className="footer-list-item pb-2"><a style={{ color: '#fff' }} href="#77">acient games</a></li>
                                <li className="footer-list-item pb-2"><a style={{ color: '#fff' }} href="#77">Past footage</a></li>
                            </ul>
                        </div>

                        <div className="footer-content">
                            <h6 className="footer-heading-text py-3">PROGRAMMES</h6>
                            <ul className="footer-list">
                                <li className="footer-list-item pb-2"><a style={{ color: '#fff' }} href="#">Boulder Bike Clubs</a></li>
                                <li className="footer-list-item pb-2"><a style={{ color: '#fff' }} href="#">women in sports</a></li>
                                <li className="footer-list-item pb-2"><a style={{ color: '#fff' }} href="#">sports for justice</a></li>
                                <li className="footer-list-item pb-2"><a style={{ color: '#fff' }} href="#">Youth biking races</a></li>
                                <li className="footer-list-item"><a style={{ color: '#fff' }} href="#">Boulder Bikers NGO</a></li>
                            </ul>
                        </div>

                        <div className="footer-content">
                            <h6 className="footer-heading-text py-3">Management Team</h6>
                            <ul className="footer-list">
                                <li className="footer-list-item pb-2"><a style={{ color: '#fff' }} href="#">All Boulder Bike tours</a></li>
                                <li className="footer-list-item pb-2"><a style={{ color: '#fff' }} href="#">The Organisation</a></li>
                                <li className="footer-list-item pb-2"><a style={{ color: '#fff' }} href="#">Our Motto</a></li>
                                <li className="footer-list-item pb-2"><a style={{ color: '#fff' }} href="#">Sponsors</a></li>
                                <li className="footer-list-item"><a style={{ color: '#fff' }} href="#">Careers</a></li>
                            </ul>
                        </div>



                    </div>
                </div>

            </div>


            <div className="show-small" style={{ background: '#663399' }}>
                <div className="container py-5">
                    <Accordion />
                </div>
            </div>

            



        </div>
    )
}
