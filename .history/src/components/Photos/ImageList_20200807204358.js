import React, { useState, useEffect, useRef, useCallback } from 'react'
import './Photos.scss'
import HeaderTime from '../HeaderTime/HeaderTime'
import { Link } from 'react-router-dom'
import Spinner from '../Spinner/Spinner'
import ImageCard from './ImageCard'


const ImageList = () =>{

    const [pictures, setPictures] = useState([])
    const [query, setQuery] = useState('bike')
    const [perPage, setPerPage] = useState(3)
    const [page, setPage] = useState(1)
    const [totalPages, setTotalPages] = useState(null)
    const [loading, setLoading] = useState(true);
    const [lastPicture, setLastPicture] = useState(null)
    let scrollListener;

    useEffect(() =>{
        loadPictures()
        const scrollListener = window.addEventListener('scroll', e => handleScroll(e)) 
    }, [])


    const loadPictures = () =>{

        const flickrapikey = '162e01778853d65e29516a0b540192d9'
        // const flickrsecret = 'fd337bc310818cbb'
        fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${flickrapikey}&tags=${query}&per_page=${perPage}&page=${page}&format=json&nojsoncallback=1`)
            .then(response => response.json())
            .then((data) =>{
                let { pages, photo } = data.photos
                let pics = photo.map((pic,index) =>{
                    let srcPath = `https://farm${pic.farm}.staticflickr.com/${pic.server}/${pic.id}_${pic.secret}.jpg`;
                        return <ImageCard key={srcPath} alt="" src={srcPath} />

                })
                setPictures([...pictures, ...pics])
                setLoading(false)                
                setTotalPages(pages)
                setLastPicture(pics[pics.length - 1])
                // setPerPage(perPage + 5)
                setPage(page + 1)
                console.log(page)
                console.log(perPage)
                console.log(lastPicture) 
                console.log(pictures)
            }).catch(err => {
                console.log(err)
                setLoading(true)
            })

    }
  





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
                                <Link to="/" class="nav-link" >Home</Link>
                            </li>
                            <li class="nav-item active">
                                <Link to="/photos" class="nav-link" >Photos</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/contest" class="nav-link" >Contest</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/riders" class="nav-link" >Riders</Link>
                            </li>
                        </ul>
                        <ul class="navbar-nav ml-auto">
                            <li class="nav-item">
                                <Link to="/location" class="nav-link" href="#">Location</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>


            <div className=" container">
                <div className="m-auto image-list">
                    {pictures}

                </div>
            </div>

            {loading ? <Spinner /> : null}

            {totalPages < 1 ? <div>There are no more pictures to load</div> :

                <button onClick={loadPictures} className="btn btn-info">LoadMore</button>

            }
        </div>
    )



}

export default ImageList