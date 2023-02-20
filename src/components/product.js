import React, { useState } from 'react';
import Image from "next/image";
import {StarIcon} from "@heroicons/react/solid";
import { useDispatch } from 'react-redux';
import {addToBasket} from "../slices/basketSlice";

const MAX_RATING=5;
const MIN_RATING=1;

const MAX_PRICE=100;
const MIN_PRICE=50;


function Product({id,title,price,description,category,image}) {
  const dispatch = useDispatch();
  
  const [rating]=useState(
    Math.floor(Math.random()*(MAX_RATING-MIN_RATING+1))+MIN_RATING
  );
  
  const [hasPrime]= useState(Math.random() < 0.5)
   price = useState(Math.floor(Math.random()*(MAX_PRICE-MIN_PRICE)+MIN_PRICE))

  const addItemToBasket = () =>{
    const product = {
      id,
      title,
      price,
      rating,
      description,
      category,
      image,
      hasPrime,
    };

    // sending the product as an action to the redux store... the basket slice
 
    dispatch(addToBasket(product))
  };

    return (
        
       <div className=' relative flex-col m-7 mt-4 bg-white z-30 p-5'>
        <p className=' absolute top-2 right-2 text-xs italic text-gray-700'>{category}</p>
        <div  className=" text-center">
        <Image src={image} height={200} width={200} objectFit='contain'/>
        </div>
        <h4 className='my-3'>{title}</h4>
        <div className='flex'>
            {Array(rating)
            .fill()
            .map((_,i)=>(
                
              <StarIcon  className=" h-4 text-red-400"/>
    
            ))}
        </div>
        {/* {hasPrime && <p>Has Prime Delivary</p>} */}

     <p className=' text-xs my-2 line-clamp-2'>{description}</p>
     <div className=' mb-5'>
        <Image quantity={price} src='https://th.bing.com/th/id/OIP.9iVFCV0WjPPgCyuaftn7kAHaKf?w=186&h=263&c=7&r=0&o=5&dpr=1.3&pid=1.7' height={10} width={10}/>
        {price} </div>
     {hasPrime && (
       <div className=' flex  items-center space-x-2 -mt-5'>
        <img src='https://th.bing.com/th/id/OIP.BoQhxPjBLl8FZzblYBxOVwHaBu?w=320&h=81&c=7&r=0&o=5&dpr=1.3&pid=1.7' alt='' className=' h-4 w-10'/>
        <p className=' text-xs text-gray-500'>FREE DELIVARY</p>
       </div>
     )}
     <div className=' text-center mt-3 '>
     <button onClick={addItemToBasket} className='  button'>Add to Cart</button>
    </div>
    </div>
  )
}

export default Product