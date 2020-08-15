import React, { useContext } from 'react'
import './Riders.scss'
import HeaderTime from '../HeaderTime/HeaderTime'
import { Link } from 'react-router-dom'
import { RiderContext } from '../context'
import Spinner from '../Spinner/Spinner';
import Faker from 'faker';


const Riders = () =>{

    const { riders, loading } = useContext(RiderContext)
    console.log(riders)

    const renderedRider = riders.map(rider => (
        <div key={rider.id} className="card px-2 py-2 bg-light">
            <div>
                <span>First Name: </span>
                <span className="font-weight-bold">{rider.first_name}</span>
            </div>
            <div>
                <span className="">Last Name: </span>
                <span className="font-weight-bold">{rider.last_name}</span>
            </div>
            <div>
                <span className="">City Of Origin: </span>
                <span className="font-weight-bold">{rider.city}</span>
            </div>

        </div>
    ))

    return (

        <div>
            <HeaderTime />

            <nav className="navbar navbar-expand-sm sticky-top navbar-light bg-light">
                <div className="container">
                    <Link to="/" class="navbar-brand">Boulder Bike Tour</Link>

                    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbar1">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbar1">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to="/photos" className="nav-link" >Photos</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/contest" className="nav-link" >Contest</Link>
                            </li>
                            <li className="nav-item active">
                                <Link to="/riders" className="nav-link" >Riders</Link>
                            </li>
                        </ul>
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item ">
                                <Link to="/location" className="nav-link" >Location</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>


            <div className="container my-5">

                {loading ? <Spinner /> : null}


                <div className="rider-card-container">

                    {/* {renderedRider} */}

                    {/*  */}
                    <div id="main-card">
                        <div class="cover-photo"></div>
                        <div class="photo">
                            <img src={Faker.image.avatar()} alt="" />
                        </div>
                        <div class="content">
                            <h2 class="name">Abdeladhim Abbassi</h2>
                            <h3 class="fullstack">Full stack <br /> web developer</h3>
                           
                        </div>
                        <div class="contact">
                            <ul>
                                <a href="https://www.linkedin.com/in/abdeladhim-abbassi-5026b0120/" target="_blank">
                                    <i class="fa fa-linkedin"></i>
                                </a>
                                <a href="https://github.com/Adhouma" target="_blank">
                                    <i class="fa fa-github"></i>
                                </a>
                                <a href="https://codepen.io/Adhouma/" target="_blank">
                                    <i class="fa fa-codepen"></i>
                                </a>
                            </ul>
                        </div>
                    </div>


                    {/*  */}


                </div>
            </div>

        </div>




    )

}


export default Riders