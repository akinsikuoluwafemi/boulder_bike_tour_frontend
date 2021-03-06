import React from 'react';
import './Accordions.scss';



export default function Accordions() {
    return (
        <div class="accordion">
            <section class="accordion-item">
                <p>BOULDER BIKE TOUR</p>
                <div class="accordion-item-content">
                    <ul className="list">
                        <li>ALL BOULDER BIKE TOURS</li>
                        <li>SUMMER RACES</li>
                        <li>WINTER RACES</li>
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
                    </ul>
                </div>
            </section>


            <section class="accordion-item">
                <p> Why has Facebook created this program?</p>
                <div class="accordion-item-content">
                    <ul>
                        <li>Facebook is a company that grew from the developer community, and Developer Circles is a program aimed at making local developers stronger at a global scale. The Developer Community has always been one of Facebook’s most important partners.</li>
                        <li>Through programs like Developer Circles, we give back to this community by helping them collaborate, learn, and code with other local developers. Today, we’re continuing that support through our newest developer program—Developer Circles & Andela: #BuildforSDG Challenge.</li>
                    </ul>
                </div>
            </section>


            <section class="accordion-item">
                <p> What is the duration of the program?</p>
                <div class="accordion-item-content">
                    <ul>
                        <li>Each cohort will run for three(3) months throughout the year. Cohort 1 begins on the 20th of April 2020 and Cohort 3 ends in November 2020. The Innovation phase of each Cohort will run for 6 weeks.</li>
                    </ul>
                </div>
            </section>

            
            
            
            {/*  */}





        </div>
    )
}
