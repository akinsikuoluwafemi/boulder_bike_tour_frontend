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
                        <li >WINTER RACES</li>
                        <li>YOUTH BIKING RACES</li>  
                        <li>RESULTS</li>  

                    </ul>
                </div>
            </section>
            <section class="accordion-item">
                <p>MEDIA</p>
                <div class="accordion-item-content">
                    <ul>
                        <li>MEDIA RESOURCES.</li>
                        <li>LATEST NEWS</li>
                        <li>KEY EVENT CALENDER</li>
                        <li>PUBLICATIONS</li>
                        <li>DOCUMENTS</li>
                        <li>FAQ</li>

                    </ul> 
                </div>
            </section>
            <section class="accordion-item ">
                <p>BEHIND THE GAMES</p>
                <div class="accordion-item-content">
                    <ul>
                        <li>MASCOTS</li>
                        <li>ACIENT GAMES</li>
                        <li>PAST FOOTAGE</li>
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
