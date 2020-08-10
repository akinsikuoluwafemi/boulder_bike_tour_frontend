import React from 'react';
import winnerOne from '../../images/winner-one.jpg';

const Winners = ({name,text,contact}) =>{
    return (
        <div class="col-lg-4 col-md-6 col-12 py-3">
            <div class="card profile-card-5">
                <div class="card-img-block">
                    <img src={winnerOne} class="card-img-top" alt="Card image cap" />
                </div>
                <div class="card-body pt-0">
                    <h5 class="card-title">{name}</h5>
                    <p class="card-text">{text}</p>
                    <a href="#" class="btn btn-primary">{contact}</a>
                </div>
            </div>
        </div>



    )
}

export default Winners