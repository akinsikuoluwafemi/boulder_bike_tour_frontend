import React, { useRef, useEffect, useState } from 'react';


 const ImageCard = ({src}) => {
     
     const [spans, setSpans] = useState(0)
     
     const imageRef = useRef();

     useEffect(() => {
         imageRef.current.addEventListener('load', setSpans)
     })

    const setSpans = () => {
        const height = imageRef.current.clientHeight

        const spans = Math.ceil(height / 10)

        setSpans(spans)

    }

     
     return (
         <div className="image-container" style={{ gridRowEnd: `span ${spans}` }}>
             <img ref={imageRef} alt={src} src={src} />
             <div class="tags   badge badge-success">
                 <span>#BoulderBikeTour</span> &nbsp;
                    <span>#bikerace</span>
             </div>


         </div>
     )
 }

 export const Image