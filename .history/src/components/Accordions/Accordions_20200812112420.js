import React from 'react';
import './Accordions.scss';



export default function Accordions() {
    return (
        <div className="accordion">
            <section className="accordion-item">
                <p>BOULDER BIKE TOUR</p>
                <div className="accordion-item-content">
                    <ul className="list">
                        <li><a style={{color: '#777'}} href="#htt">ALL BOULDER BIKE TOURS</a></li>
                        <li><a style={{ color: '#777' }} href="#htt">SUMMER RACES</a></li>
                        <li> <a style={{ color: '777' }} href="#htt" >WINTER RACES</a></li>
                        <li> <a style={{ color: '#777' }} href="#htt">YOUTH BIKING RACES</a></li>  
                        <li><a style={{ color: '#777' }} href="#htt">RESULTS</a> </li>  

                    </ul>
                </div>
            </section>
            <section className="accordion-item">
                <p>MEDIA</p>
                <div className="accordion-item-content">
                    <ul>
                        <li> <a style={{ color: '#777' }} href="#http"> MEDIA RESOURCES </a></li>
                        <li> <a style={{ color: '#777' }} href="#http"> LATEST NEWS</a></li>
                        <li> <a style={{ color: '#777' }} href="#http"> KEY EVENT CALENDER </a> </li>
                        <li> <a style={{ color: '#777' }} href="#http">PUBLICATIONS</a> </li>
                        <li> <a style={{ color: '#777' }} href="#http"> DOCUMENTS</a></li>
                        <li> <a style={{ color: '#777' }} href="#http">FAQ</a> </li>

                    </ul> 
                </div>
            </section>
            <section className="accordion-item ">
                <p>BEHIND THE GAMES</p>
                <div className="accordion-item-content">
                    <ul>
                        <li><a style={{ color: '#777' }} href="#http">MASCOTS</a> </li>
                        <li><a style={{ color: '#777' }} href="#http">ACIENT GAMES</a></li>
                        <li><a style={{ color: '#777' }} href="#http">PAST FOOTAGE</a></li>
                    </ul>
                </div>
            </section>


            <section className="accordion-item">
                <p>PROGRAMMES</p>
                <div className="accordion-item-content">
                    <ul>
                        <li><a style={{ color: '#777' }} href="#http">BOULDER BIKE CLUBS</a></li>
                        <li><a style={{ color: '#777' }} href="#http"> WOMEN IN SPORTS</a></li>
                        <li><a style={{ color: '#777' }} href="#http">SPORTS FOR JUSTICE</a> </li>
                        <li><a style={{ color: '#777' }} href="#http">YOUTH BIKING RACES</a> </li>
                        <li><a style={{ color: '#777' }} href="#http"> BOULDER BIKERS NGO</a></li>

                    </ul>
                </div>
            </section>


            <section className="accordion-item">
                <p>MANAGEMENT TEAM</p>
                <div className="accordion-item-content">
                    <ul>
                        <li><a style={{ color: '#777' }} href="#http">ALL BOULDER BIKE TOURS</a> </li>
                        <li><a style={{ color: '#777' }} href="#http">THE ORGANISATION</a> </li>
                        <li><a style={{ color: '#777' }} href="#http">OUR MOTTO</a> </li>
                        <li><a style={{ color: '#777' }} href="#http">SPONSORS</a> </li>
                        <li><a style={{ color: '#777' }} href="#">CAREERS</a> </li>

                    </ul>
                </div>
            </section>

            
            
            
            {/*  */}





        </div>
    )
}
