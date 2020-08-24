import React from 'react'
import './Contest.scss'
import { Link } from 'react-router-dom'
import HeaderTime from '../HeaderTime/HeaderTime'
import Form from './Form/Form'
// import Alert from '@material-ui/lab/Alert';
import {AlertC}



const Contest = () =>{
    
    

    
    return (
        <div>
            <HeaderTime />

            <nav class="navbar navbar-expand-sm sticky-top navbar-light bg-light">
                <div class="container">
                    <Link to="/" class="navbar-brand">Boulder Bike Tour</Link> 
                    <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbar1">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbar1">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <Link to="/photos" class="nav-link" >Photos</Link>
                            </li>
                            <li class="nav-item active">
                                <Link to="/contest" class="nav-link" >Contest</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/riders" class="nav-link" >Riders</Link>
                            </li>
                        </ul>
                        <ul class="navbar-nav ml-auto">
                            <li class="nav-item ">
                                <Link to="/location" class="nav-link">Location</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            

            {/*  */}

            <div className="bg-contest">
                <div className="container py-3">
                    <h2 className="text-center contest-heading-text text-white">Come up with a slogan for the boulder bike tour and win a free sponsorship from us.</h2>
                    
                   
                    {/* <Alert severity={severity}>{alertText}</Alert> */}


                    <div className="px-3 py-3 form-center">
                        <Form />

                    </div>
                </div>
            </div>
            


           
            {/*  */}



        </div>
    )
}

export default Contest