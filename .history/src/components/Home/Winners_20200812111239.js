import React from 'react';
import winnerOne from '../../images/winner-one.jpg';

const Winners = ({name,text,contact}) =>{
    return (
        <div class="col-lg-4 col-md-6 col-12 py-3">
            <div class="card profile-card-5">
                <div class="card-img-block">
                    <img src={winnerOne} className="card-img-top" alt="Card image cap" />
                </div>
                <div classn="card-body pt-0">
                    <h5 classn="card-title">{name}</h5>
                    <p classn="card-text">{text}</p>
                    <a href="#" classn="btn btn-primary">{contact}</a>
                </div>
            </div>
        </div>



    )
}

export default Winners