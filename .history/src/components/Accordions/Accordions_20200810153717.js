import React from 'react';
import './Accordions.scss';



export default function Accordions() {
    return (
        <div class="accordion">
            <section class="accordion-item">
                <p>BOULDER BIKE TOUR</p>
                <div class="accordion-item-content">
                    <ul className="list">
                        <li><a style={{color: '#777'}} href="#">ALL BOULDER BIKE TOURS</a></li>
                        <li><a style={{ color: '#777' }} href="#">SUMMER RACES</a></li>
                        <li> <a style={{ color: '#777' }}  href="#" >WINTER RACES</a></li>
                        <li> <a style={{ color: '#777' }}  href="#">YOUTH BIKING RACES</a></li>  
                        <li><a  style={{ color: '#777' }} href="#">RESULTS</a> </li>  

                    </ul>
                </div>
            </section>
            <section class="accordion-item">
                <p>MEDIA</p>
                <div class="accordion-item-content">
                    <ul>
                        <li> <a style={{ color: '#777' }} href="#"> MEDIA RESOURCES </a></li>
                        <li> <a style={{ color: '#777' }} href="#"> LATEST NEWS</a></li>
                        <li> <a style={{ color: '#777' }} href="#"> KEY EVENT CALENDER </a> </li>
                        <li> <a style={{ color: '#777' }} href="#">PUBLICATIONS</a> </li>
                        <li> <a style={{ color: '#777' }} href="#"> DOCUMENTS</a></li>
                        <li> <a style={{ color: '#777' }} href="#">FAQ</a> </li>

                    </ul> 
                </div>
            </section>
            <section class="accordion-item ">
                <p>BEHIND THE GAMES</p>
                <div class="accordion-item-content">
                    <ul>
                        <li><a href="#">MASCOTS</a> </li>
                        <li><a href="#"></a> ACIENT GAMES</li>
                        <li><a href="#"></a> PAST FOOTAGE</li>
                    </ul>
                </div>
            </section>


            <section class="accordion-item">
                <p>PROGRAMMES</p>
                <div class="accordion-item-content">
                    <ul>
                        <li>BOULDER BIKE CLUBS</li>
                        <li>WOMEN IN SPORTS</li>
                        <li>SPORTS FOR JUSTICE</li>
                        <li>YOUTH BIKING RACES</li>
                        <li>BOULDER BIKERS NGO</li>

                    </ul>
                </div>
            </section>


            <section class="accordion-item">
                <p>MANAGEMENT TEAM</p>
                <div class="accordion-item-content">
                    <ul>
                        <li>ALL BOULDER BIKE TOURS</li>
                        <li>THE ORGANISATION</li>
                        <li>OUR MOTTO</li>
                        <li>SPONSORS</li>
                        <li>CAREERS</li>

                    </ul>
                </div>
            </section>

            
            
            
            {/*  */}





        </div>
    )
}
