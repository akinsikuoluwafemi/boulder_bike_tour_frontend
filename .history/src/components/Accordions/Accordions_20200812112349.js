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
                        <li> <a style={{ color: '#777' }} href="#">FAQ</a> </li>

                    </ul> 
                </div>
            </section>
            <section className="accordion-item ">
                <p>BEHIND THE GAMES</p>
                <div className="accordion-item-content">
                    <ul>
                        <li><a style={{ color: '#777' }} href="#">MASCOTS</a> </li>
                        <li><a style={{ color: '#777' }} href="#">ACIENT GAMES</a></li>
                        <li><a style={{ color: '#777' }} href="#">PAST FOOTAGE</a></li>
                    </ul>
                </div>
            </section>


            <section className="accordion-item">
                <p>PROGRAMMES</p>
                <div className="accordion-item-content">
                    <ul>
                        <li><a style={{ color: '#777' }} href="#">BOULDER BIKE CLUBS</a></li>
                        <li><a style={{ color: '#777' }} href="#"> WOMEN IN SPORTS</a></li>
                        <li><a style={{ color: '#777' }} href="#">SPORTS FOR JUSTICE</a> </li>
                        <li><a style={{ color: '#777' }} href="#">YOUTH BIKING RACES</a> </li>
                        <li><a style={{ color: '#777' }} href="#"> BOULDER BIKERS NGO</a></li>

                    </ul>
                </div>
            </section>


            <section className="accordion-item">
                <p>MANAGEMENT TEAM</p>
                <div className="accordion-item-content">
                    <ul>
                        <li><a style={{ color: '#777' }} href="#">ALL BOULDER BIKE TOURS</a> </li>
                        <li><a style={{ color: '#777' }} href="#">THE ORGANISATION</a> </li>
                        <li><a style={{ color: '#777' }} href="#">OUR MOTTO</a> </li>
                        <li><a style={{ color: '#777' }} href="#">SPONSORS</a> </li>
                        <li><a style={{ color: '#777' }} href="#">CAREERS</a> </li>

                    </ul>
                </div>
            </section>

            
            
            
            {/*  */}





        </div>
    )
}
