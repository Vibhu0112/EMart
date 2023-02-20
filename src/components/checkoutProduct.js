import { StarIcon } from '@heroicons/react/solid'
import Image from 'next/image'
import React from 'react'
import { useDispatch } from 'react-redux'
import { addToBasket , removeFromBasket } from '../slices/basketSlice'

function CheckoutProduct({
   id,
   title,
   price,
   rating,
   description,
   category,
   image,
   hasPrime, 
}) {

  const dispatch = useDispatch();
 
  const addItemToBasket = ()=>{
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

      //push item into redux
      dispatch (addToBasket(product));
  };

  const removeItemFromBasket = () =>{
    //remove items fro redux
    dispatch(removeFromBasket({id}))
  }

  return (
    <div className=' flex grid-cols-5'>

      {/*left */}
      <Image src={image} height={150} width={200} objectFit="contain"/>
    

    {/* middle */}
    <div className=' col-span-3 ml-5 mx-5 mb-5'>
         <p>{title}</p>
         <div className='flex'>

            {Array(rating)
            .fill()
            .map((_,i)=>(
                
              <StarIcon key={i} className=" h-4 text-red-400"/>
    
            ))}
         </div>

         <p className=' text-xs my-2 line-clamp-2'>{description}</p>
    
         <Image quantity={price} src='https://th.bing.com/th/id/OIP.9iVFCV0WjPPgCyuaftn7kAHaKf?w=186&h=263&c=7&r=0&o=5&dpr=1.3&pid=1.7' height={10} width={10}/>
         {price}

         {hasPrime && (
            <div className=' flex  items-center space-x-2 mt-5'>
            <img src='https://th.bing.com/th/id/OIP.BoQhxPjBLl8FZzblYBxOVwHaBu?w=320&h=81&c=7&r=0&o=5&dpr=1.3&pid=1.7' alt='' className=' h-4 w-10'/>
            <p className=' text-xs text-gray-500'>FREE DELIVARY</p>
            </div>      
   )}
    </div>


   {/*right */}
    <div className=' flex flex-col space-y-2 my-auto  justify-self-end'>
       <button className='button' onClick={addItemToBasket}>Add to cart</button>
       <button className='button mt-3' onClick={removeItemFromBasket}>Remove</button>

    </div>

    </div>
  )
}

export default CheckoutProduct