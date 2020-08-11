import React, { Component, useState } from 'react'
import './Location.scss'
import { Link } from 'react-router-dom'
import HeaderTime from '../HeaderTime/HeaderTime'
import { GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow } from 'react-google-maps'
import { RiderContext } from '../context'
import mapStyles from './mapStyles'
import Spinner from '../Spinner/Spinner';


class Location extends Component {
    
    static contextType = RiderContext
   
    render() {
        
        const { loading } = this.context

        return (
            <div>
                <HeaderTime />

                <nav className="navbar navbar-expand-sm sticky-top navbar-light bg-light">
                    <div className="container">
                        <Link to="/" className="navbar-brand">Boulder Bike Tour</Link>
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
                                <li className="nav-item">
                                    <Link to="/riders" className="nav-link" >Riders</Link>
                                </li>
                            </ul>
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item active">
                                    <Link to="/location" className="nav-link" >Location</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            
            
                
                {/* google map start */}
                
                <div style={{width: '100vw', height: '100vh'}}>

                    {loading ? <Spinner /> : 
                    

                    <WrappedMap
                        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyBniFhD5gyPyOrEm212cVIAYVythPk2JcE`}

                        // googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_KEY}`}
                        loadingElement={<div style={{ height: "100%" }} />}
                        containerElement={<div style={{ height: "100%" }} />}
                        mapElement={<div style={{ height: "100%" }} />}
                        
                        />

                    }
                    
                </div>

                
                {/* google map end */}
            
            </div>
        )
    }
}

export default Location;



class Map extends Component {
    
    state = {
        selectedRider: null
    }

    static contextType = RiderContext


   render(){
       const { riders, loading } = this.context
        console.log(riders)
       const { selectedRider } = this.state
       
       return (
           
           <div>
             <GoogleMap
                defaultZoom={10}
                defaultCenter={{ lat: 40.016869, lng: -105.279617 }}
                    defaultOptions={{styles: mapStyles}}>

                
                {riders.map(rider => (
                    <Marker
                        key={rider.id}
                        position={{
                            lat: parseFloat(rider.lat),
                            lng: parseFloat(rider.lng) 
                        }}
                            onClick={() => {
                                this.setState({selectedRider:rider})
                            }}
                        
                    />
                ))}

                {selectedRider && (
                    <InfoWindow
                        position={{
                            lat: parseFloat(selectedRider.lat),
                            lng: parseFloat(selectedRider.lng)
                        }}     
                        onCloseClick={() => {
                            this.setState({
                                selectedRider: null

                            })
                        }}
                    >
                        
                        <div>
                               <p><span className="font-weight-bold">Name:</span> {selectedRider.first_name + ' - ' + selectedRider.last_name}</p>
                               <p style={{ color: "#777" }}><span className="font-weight-bold">City:</span> {selectedRider.city}</p>
                            <p style={{ color: "#777" }}><span></span> {selectedRider.state}</p>
                        </div>
                        
                        </InfoWindow>
                )}

                </GoogleMap>
               
           </div>
               
       )
   }
}


const WrappedMap = withScriptjs(withGoogleMap(Map))
