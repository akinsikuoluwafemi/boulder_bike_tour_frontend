import React from 'react';
import winnerOne from '../../images/winner-one.jpg';

const Winners = () =>{
    return (
        <div class="col-lg-4 col-md-6 col-12 ">
            <div class="card profile-card-5">
                <div class="card-img-block">
                    <img src={winnerOne} class="card-img-top" alt="Card image cap" />
                </div>
                <div class="card-body pt-0">
                    <h5 class="card-title">Florence Garza</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>



    )
}

export default Winners