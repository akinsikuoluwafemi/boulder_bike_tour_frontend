import React, { useState, useEffect } from 'react'
import './Photos.scss'
import HeaderTime from '../HeaderTime/HeaderTime'
import { Link } from 'react-router-dom'
import Spinner from '../Spinner/Spinner'
import ImageCard from './ImageCard'


const ImageList = () =>{

    const [pictures, setPictures] = useState([])
    const [query] = useState('bike-race')
    const [perPage] = useState(40)
    const [page, setPage] = useState(1)
    const [totalPages, setTotalPages] = useState(null)
    const [loading, setLoading] = useState(true);


    useEffect(() =>{
          
        loadPictures()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const loadPictures = () =>{

        const flickrapikey = '162e01778853d65e29516a0b540192d9'
        // const flickrsecret = 'fd337bc310818cbb'
        fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${flickrapikey}&tags=${query}&per_page=${perPage}&page=${page}&format=json&nojsoncallback=1`)
            .then(response => response.json())
            .then((data) =>{
                let { pages, photo } = data.photos

                // let pics = photo.map((pic, index) =>{
                //     let srcPath = `https://farm${pic.farm}.staticflickr.com/${pic.server}/${pic.id}_${pic.secret}.jpg`;
                //     return (
                //         <ImageCard key={srcPath} alt="" src={srcPath} />

                //     )

                // })

                let pics = photo.map((pic) => {
                  var srcPath =
                    "https://farm" +
                    pic.farm +
                    ".staticflickr.com/" +
                    pic.server +
                    "/" +
                    pic.id +
                    "_" +
                    pic.secret +
                    ".jpg";
                  return (
                    <>
                      {/* <span>#BoulderBikeTour</span> */}
                      <img alt="" src={srcPath} />
                    </div>
                  );
                });


                setPictures([...pictures, ...pics])
                setLoading(false)
                setTotalPages(pages)
                
                setPage(prevPage => prevPage + 1)
                
            }).catch(err =>{
                console.log(err)
                setLoading(true)
            })

    }
    

    return (
      <div className="py-4">
        <HeaderTime />

        <nav className="navbar navbar-expand-sm sticky-top navbar-light bg-light">
          <div className="container">
            <Link to="/" className="navbar-brand">
              Boulder Bike Tour
            </Link>
            <button
              className="navbar-toggler navbar-toggler-right"
              type="button"
              data-toggle="collapse"
              data-target="#navbar1"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbar1">
              <ul className="navbar-nav">
                <li className="nav-item active">
                  <Link to="/photos" className="nav-link">
                    Photos
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/contest" className="nav-link">
                    Contest
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/riders" className="nav-link">
                    Riders
                  </Link>
                </li>
              </ul>
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link to="/location" className="nav-link" href="#">
                    Location
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="bg-info bg-hero-photo">
          <div className="container">
            <div className="photo-hero-container">
              <h1 className="photo-hero-text text-white ">
                The best free stock photos of builder bike tour
              </h1>
            </div>
          </div>
        </div>

        <div className="container py-5">
          <div align="center" className="m-auto image-list">
            {pictures}
          </div>
          <div align="center">
            {loading ? <Spinner /> : null}

            {totalPages < page ? (
              <div align="center">There are no more pictures to load</div>
            ) : (
              <div
                onClick={loadPictures}
                className="button_cont mt-5"
                align="center"
              >
                <span class="example_d" rel="nofollow noopener">
                  Load More
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    );

}

export default ImageList




