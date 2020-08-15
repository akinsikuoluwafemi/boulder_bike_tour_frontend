import React from 'react';
import './Accordions.scss';



export default function Accordions() {
    return (
        <div className="accordion">
            <section className="accordion-item">
                <p>BOULDER BIKE TOUR</p>
                <div className="accordion-item-content">
                    <ul className="list">
                        <li><a style={{color: '#fff'}} href="#htt">ALL BOULDER BIKE TOURS</a></li>
                        <li><a style={{ color: '#fff' }} href="#htt">SUMMER RACES</a></li>
                        <li> <a style={{ color: '#fff' }} href="#htt" >WINTER RACES</a></li>
                        <li> <a style={{ color: '#fff' }} href="#htt">YOUTH BIKING RACES</a></li>  
                        <li><a style={{ color: '#fff' }} href="#htt">RESULTS</a> </li>  

                    </ul>
                </div>
            </section>
            <section className="accordion-item">
                <p>MEDIA</p>
                <div className="accordion-item-content">
                    <ul>
                        <li> <a style={{ color: '#fff' }} href="#http"> MEDIA RESOURCES </a></li>
                        <li> <a style={{ color: '#fff' }} href="#http"> LATEST NEWS</a></li>
                        <li> <a style={{ color: '#fff' }} href="#http"> KEY EVENT CALENDER </a> </li>
                        <li> <a style={{ color: '#fff' }} href="#http">PUBLICATIONS</a> </li>
                        <li> <a style={{ color: '#fff' }} href="#http"> DOCUMENTS</a></li>
                        <li> <a style={{ color: '#fff' }} href="#http">FAQ</a> </li>

                    </ul> 
                </div>
            </section>
            <section className="accordion-item ">
                <p>BEHIND THE GAMES</p>
                <div className="accordion-item-content">
                    <ul>
                        <li><a style={{ color: '#fff' }} href="#http">MASCOTS</a> </li>
                        <li><a style={{ color: '#fff' }} href="#http">ACIENT GAMES</a></li>
                        <li><a style={{ color: '#fff' }} href="#http">PAST FOOTAGE</a></li>
                    </ul>
                </div>
            </section>


            <section className="accordion-item">
                <p>PROGRAMMES</p>
                <div className="accordion-item-content">
                    <ul>
                        <li><a style={{ color: '#fff' }} href="#http">BOULDER BIKE CLUBS</a></li>
                        <li><a style={{ color: '#fff' }} href="#http"> WOMEN IN SPORTS</a></li>
                        <li><a style={{ color: '#fff' }} href="#http">SPORTS FOR JUSTICE</a> </li>
                        <li><a style={{ color: '#fff' }} href="#http">YOUTH BIKING RACES</a> </li>
                        <li><a style={{ color: '#fff' }} href="#http"> BOULDER BIKERS NGO</a></li>

                    </ul>
                </div>
            </section>


            <section className="accordion-item">
                <p>MANAGEMENT TEAM</p>
                <div className="accordion-item-content">
                    <ul>
                        <li><a style={{ color: '#fff' }} href="#http">ALL BOULDER BIKE TOURS</a> </li>
                        <li><a style={{ color: '#fff' }} href="#http">THE ORGANISATION</a> </li>
                        <li><a style={{ color: '#fff' }} href="#http">OUR MOTTO</a> </li>
                        <li><a style={{ color: '#fff' }} href="#http">SPONSORS</a> </li>
                        <li><a style={{ color: '#fff' }} href="#http">CAREERS</a> </li>

                    </ul>
                </div>
            </section>

            
            
            
            {/*  */}





        </div>
    )
}
