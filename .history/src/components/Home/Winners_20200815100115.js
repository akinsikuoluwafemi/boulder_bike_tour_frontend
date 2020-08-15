import React from 'react';

const Winners = ({name,text,contact,image}) =>{
    return (
        <div className="col-lg-4 col-md-6 col-12 py-3">
            <div className="card profile-card-5">
                <div className="card-img-block">
                    <img src={image} className="card-img-top" alt="Card image cap" />
                </div>
                <div className="card-body pt-0">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{text}</p>
                    <div href="#" className="btn btn-primary">{contact}</div>
                </div>
            </div>
        </div>



    )
}

export default Winners