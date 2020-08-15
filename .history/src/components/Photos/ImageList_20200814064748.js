// import React, { useState, useEffect } from 'react'
// import './Photos.scss'
// import HeaderTime from '../HeaderTime/HeaderTime'
// import { Link } from 'react-router-dom'
// import Spinner from '../Spinner/Spinner'
// import ImageCard from './ImageCard'


// const ImageList = () =>{

//     const [pictures, setPictures] = useState([])
//     const [query] = useState('cyclist')
//     const [perPage] = useState(40)
//     const [page, setPage] = useState(1)
//     const [totalPages, setTotalPages] = useState(null)
//     const [loading, setLoading] = useState(true);
//     const [lastPicture, setLastPicture] = useState(null)
//     let [isVisible, setIsVisible] = useState(false);

    


//     useEffect(() =>{
//         loadPictures()
      
//     }, [])


//     const loadPictures = () =>{

//         const flickrapikey = '162e01778853d65e29516a0b540192d9'
//         // const flickrsecret = 'fd337bc310818cbb'
//         fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${flickrapikey}&tags=${query}&per_page=${perPage}&page=${page}&format=json&nojsoncallback=1`)
//             .then(response => response.json())
//             .then((data) =>{
//                 let { pages, photo } = data.photos
//                 let pics = photo.map((pic, index) =>
//                 {
//                     let srcPath = `https://farm${pic.farm}.staticflickr.com/${pic.server}/${pic.id}_${pic.secret}.jpg`;
//                     return (
//                         <ImageCard key={srcPath} alt="" src={srcPath} />

//                     )

//                 })
//                 setPictures([...pictures, ...pics])
//                 setLoading(false)
//                 setTotalPages(pages)
//                 setLastPicture(pics[pics.length - 1])
//                 // setPerPage(perPage + 5)
//                 setPage(page + 1)
//                 console.log(page)
//                 console.log(perPage)
//                 console.log(lastPicture)
//                 console.log(pictures)
//             }).catch(err =>
//             {
//                 console.log(err)
//                 setLoading(true)
//             })

//     }





//     return (
//         <div className="py-4">
//             <HeaderTime />

//             <nav class="navbar navbar-expand-sm sticky-top navbar-light bg-light">
//                 <div class="container">
//                     <Link to="/" class="navbar-brand">Boulder Bike Tour</Link>
//                     <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbar1">
//                         <span class="navbar-toggler-icon"></span>
//                     </button>
//                     <div class="collapse navbar-collapse" id="navbar1">
//                         <ul class="navbar-nav">
//                             <li class="nav-item active">
//                                 <Link to="/photos" class="nav-link" >Photos</Link>
//                             </li>
//                             <li class="nav-item">
//                                 <Link to="/contest" class="nav-link" >Contest</Link>
//                             </li>
//                             <li class="nav-item">
//                                 <Link to="/riders" class="nav-link" >Riders</Link>
//                             </li>
//                         </ul>
//                         <ul class="navbar-nav ml-auto">
//                             <li class="nav-item">
//                                 <Link to="/location" class="nav-link" href="#">Location</Link>
//                             </li>
//                         </ul>
//                     </div>
//                 </div>
//             </nav>

//             <div className="bg-info bg-hero-photo">
//                 <div className="container">
//                     <div className="photo-hero-container">
//                         <h1 className="photo-hero-text text-white ">
                            
                            
//                             The best free stock photos of builder bike tour
                            
                            
//                         </h1>

//                     </div>

//                 </div>
//             </div>


//             <div className="container py-5">
//                 <div align="center" className="m-auto image-list">

//                     {pictures}

//                 </div>
//                 <div align="center">
//                     {loading ? <Spinner /> : null}

//                     {totalPages < page ? <div align="center">There are no more pictures to load</div> :


//                         <div onClick={loadPictures} className="button_cont mt-5" align="center"><a class="example_d" rel="nofollow noopener">Load More</a></div>
//                     }
//                 </div>
//             </div>


           
          

//         </div>
//     )



// }

// export default ImageList











// import React, {useRef, useState, useEffect, useCallback } from 'react'
// import './Photos.scss'
// import HeaderTime from '../HeaderTime/HeaderTime'
// import { Link } from 'react-router-dom'
// import Spinner from '../Spinner/Spinner'
// import ImageCard from './ImageCard'


// const ImageList = () =>{

//     let [pictures, setPictures] = useState([])
//     let [pageNumber, setPageNumber] = useState(1)
//     let [perPage, setPerPage] = useState(20);
//     let [lastPicture, setLastPicture] = useState(null);
//     let [isVisible, setIsVisible] = useState(false);
//     let [observePictures, setObservePictures] = useState([]);
//     let [loading, setLoading] = useState(true);
//     const [page, setPage] = useState(1)
//     const [totalPages, setTotalPages] = useState(null)
//     const [query] = useState('cyclist')

//     const imageRef = useRef();



//     useEffect(() =>{
//         LoadMorePictures()
//     }, [])


    
//     const LoadMorePictures = async ()=> {
//         const flickrapikey = '162e01778853d65e29516a0b540192d9';
//         const flickrsecret = 'fd337bc310818cbb'


//         let response = await fetch('https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=' + flickrapikey + `&tags=${query}&per_page=${perPage}&page=${pageNumber}&format=json&nojsoncallback=1`)
        
//         let data = await response.json()

//         let { pages, photo } = data.photos
        

//         let pics = photo.map((pic) =>{
//             var srcPath = 'https://farm' + pic.farm + '.staticflickr.com/' + pic.server + '/' + pic.id + '_' + pic.secret + '.jpg'
//             return (
//                 <img ref={imageRef} alt="" src={srcPath} />
//             )
//         })
//         let newPicturesArray = [...pictures, ...pics]
//         setPictures(newPicturesArray)
//         setPageNumber(pageNumber + 1)
//         setTotalPages(pages)

//         // setLastPicture(pics[pics.length - 1])
//         console.log(newPicturesArray)
//         console.log(pageNumber)
//         console.log(totalPages)
//         // console.log(imageRef.current);
//         setLastPicture(imageRef.current)
//         observer.observe(imageRef.current)

//     }

   


//     let observer = new IntersectionObserver((entries) =>{
//         entries.forEach(entry => {
//             console.log(entry);
//             if (entry.isIntersecting && entry.target){
//                 setIsVisible(entry.isIntersecting);
//                 console.log('visible')
//                 console.log(entry.isIntersecting)
//                 console.log(entry.target)
//                 setLastPicture(entry.target)
//                 console.log(lastPicture)
//                 console.log('new pictures firing')
//                 LoadMorePictures()
//                 imageRef.current = entry.target
//             }else {
//                 setIsVisible(entry.isIntersecting);
//                 console.log(entry.isIntersecting)
                
//                 console.log('not visible')
                
                
//             }
//         })


//     })



//     return (
//         <div className="py-4">
//             <HeaderTime />

//             <nav class="navbar navbar-expand-sm sticky-top navbar-light bg-light">
//                 <div class="container">
//                     <Link to="/" class="navbar-brand">Boulder Bike Tour</Link>
//                     <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbar1">
//                         <span class="navbar-toggler-icon"></span>
//                     </button>
//                     <div class="collapse navbar-collapse" id="navbar1">
//                         <ul class="navbar-nav">
//                             <li class="nav-item active">
//                                 <Link to="/photos" class="nav-link" >Photos</Link>
//                             </li>
//                             <li class="nav-item">
//                                 <Link to="/contest" class="nav-link" >Contest</Link>
//                             </li>
//                             <li class="nav-item">
//                                 <Link to="/riders" class="nav-link" >Riders</Link>
//                             </li>
//                         </ul>
//                         <ul class="navbar-nav ml-auto">
//                             <li class="nav-item">
//                                 <Link to="/location" class="nav-link" href="#">Location</Link>
//                             </li>
//                         </ul>
//                     </div>
//                 </div>
//             </nav>

//             <div className="bg-info bg-hero-photo">
//                 <div className="container">
//                     <div className="photo-hero-container">
//                         <h1 className="photo-hero-text text-white ">


//                             The best free stock photos of builder bike tour


//                         </h1>

//                     </div>

//                 </div>
//             </div>


//             <div>
//                 <div>
//                     {pictures}
//                     {pictures.length}

//                 </div>
//                 <div  onClick={LoadMorePictures} className="text-center m-auto example_d">LOAD MORE</div>
//             </div>





//         </div>
//     )



// }

// export default ImageList





import React, {useRef, useState, useEffect, useCallback } from 'react'
import './Photos.scss'
import HeaderTime from '../HeaderTime/HeaderTime'
import { Link } from 'react-router-dom'
import Spinner from '../Spinner/Spinner'
import ImageCard from './ImageCard'


const ImageList = () =>{

    let [pictures, setPictures] = useState([])
    let [pageNumber, setPageNumber] = useState(1)
    let [perPage, setPerPage] = useState(20);
    let [lastPicture, setLastPicture] = useState(null);
    let [isVisible, setIsVisible] = useState(false);
    let [observePictures, setObservePictures] = useState([]);
    let [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1)
    const [totalPages, setTotalPages] = useState(null)
    const [query] = useState('cyclist')

    const imageRef = useRef();



    useEffect(() =>{
        LoadMorePictures()
    }, [])


    
    const LoadMorePictures = async ()=> {
        const flickrapikey = '162e01778853d65e29516a0b540192d9';
        const flickrsecret = 'fd337bc310818cbb'


        let response = await fetch('https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=' + flickrapikey + `&tags=${query}&per_page=${perPage}&page=${pageNumber}&format=json&nojsoncallback=1`)
        
        let data = await response.json()

        let { pages, photo } = data.photos
        

        let pics = photo.map((pic) =>{
            var srcPath = 'https://farm' + pic.farm + '.staticflickr.com/' + pic.server + '/' + pic.id + '_' + pic.secret + '.jpg'
            return (
                <img ref={imageRef} alt="" src={srcPath} />
            )
        })
        let newPicturesArray = [...pictures, ...pics]
        setPictures(newPicturesArray)
        setPageNumber(pageNumber + 1)
        setTotalPages(pages)

        // setLastPicture(pics[pics.length - 1])
        console.log(newPicturesArray)
        console.log(pageNumber)
        console.log(totalPages)
        // console.log(imageRef.current);
        setLastPicture(imageRef.current)
        observer.observe(imageRef.current)

    }

   


    let observer = new IntersectionObserver((entries) =>{
        entries.forEach(entry => {
            console.log(entry);
            if (entry.isIntersecting && entry.target){
                setIsVisible(entry.isIntersecting);
                console.log('visible')
                console.log(entry.isIntersecting)
                console.log(entry.target)
                setLastPicture(entry.target)
                console.log(lastPicture)
                console.log('new pictures firing')
                LoadMorePictures()
                imageRef.current = entry.target
            }else {
                setIsVisible(entry.isIntersecting);
                console.log(entry.isIntersecting)
                
                console.log('not visible')
                
                
            }
        })


    })



    return (
        <div className="py-4">
            <HeaderTime />

            <nav class="navbar navbar-expand-sm sticky-top navbar-light bg-light">
                <div class="container">
                    <Link to="/" class="navbar-brand">Boulder Bike Tour</Link>
                    <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbar1">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbar1">
                        <ul class="navbar-nav">
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

            <div className="bg-info bg-hero-photo">
                <div className="container">
                    <div className="photo-hero-container">
                        <h1 className="photo-hero-text text-white ">


                            The best free stock photos of builder bike tour


                        </h1>

                    </div>

                </div>
            </div>


            <div>
                <div>
                    {pictures}
                    {pictures.length}

                </div>
                <div  onClick={LoadMorePictures} className="text-center m-auto example_d">LOAD MORE</div>
            </div>





        </div>
    )



}

export default ImageList