import React from 'react';
import {Carousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Banner() {
  return (
    <div className='relative '>
        <div className=' absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20'/>
        <Carousel 
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={3000} 
        >
            <div>
            <img loading='lazy' src='https://m.media-amazon.com/images/G/31/prime/detail_page/Prime_Detail_Page_PC_Benefits_Delivery_1344x526._CB653891553_.jpg' alt=''/>
            </div>
            <div>
            <img loading='lazy' src='https://m.media-amazon.com/images/G/31/prime/detail_page/Prime_Detail_Page_PC_VideoLaunch_1344x526._CB630023687_.jpg' alt=''/>
            </div>
            <div>
            <img loading='lazy' src='https://m.media-amazon.com/images/G/31/Pay/CBCC/BOX._CB433739796_.png' alt=''/>
            </div>
           
        </Carousel>
      
    </div>
  )
}

export default Banner