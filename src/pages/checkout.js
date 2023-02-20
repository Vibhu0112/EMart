import { loadStripe } from '@stripe/stripe-js'
import axios from 'axios'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import React from 'react'
import { useSelector } from 'react-redux'
import CheckoutProduct from '../components/checkoutProduct'
import Header from '../components/header'
import { selectItems , selectTotal} from '../slices/basketSlice';
const stripePromise = loadStripe(process.env.stripe_public_key);

function Checkout() {

    const items = useSelector(selectItems);
    const total= useSelector(selectTotal);
    // const session = useSession();
    const {data: session} = useSession();
    console.log("total "+total);

    const createCheckoutSession = async () => {
        const stripe = await stripePromise;

        // call the backend to create a checkout session
        const checkoutSession = await axios.post('api/create-checkout-session',{
          items: items,
          // email: session.user.email
          email: session.user.email,
        });

        // redirect user/customer to stripe checkout

        const result = await stripe.redirectToCheckout({
          sessionId: checkoutSession.data.id,
        });

        if(result.error) alert(result.error.message);
        
    };

  return (
    <div className=' bg-gray-100'>
        <Header/>

       <main className=' sm:flex max-w-screen-2xl mx-auto'>
       
       {/*left */}
       
        <div className=' flex-grow ml-5 shadow-sm'>
            <Image src='https://m.media-amazon.com/images/G/31/prime/detail_page/Prime_Detail_Page_PC_VideoLaunch_1344x526._CB630023687_.jpg'
             width={1020} 
             height={250} 
             objectFit="contain"
             />
             <div className=' flex flex-col p-5 space-y-10 bg-white'>
                <h1 className=' text-3xl border-b pb-4'>
                    {items.length == 0 
                    ? "your basket is empty"
                    :"Shopping basket"
                    }
                    </h1>

                    {items.map((item,i) => (
                        <CheckoutProduct 
                          key={i}
                          id = {item.id}
                          title = {item.title}
                          price = {item.price}
                          rating = {item.rating}
                          description = {item.description}
                          category = {item.category}
                          image = {item.image}
                          hasPrime = {item.hasPrime}
                        />
                    ))}
             </div>
        </div>


       {/*right */}
       <div className='flex flex-col bg-white p-10 shadow-md'>
         {items.length > 0 &&(
          <>
           {/* <h2 className=' whitespace-nowrap'>Subtotal({items.length} items)
            : <span className=' font-bold'>
            <Image src='https://th.bing.com/th/id/OIP.9iVFCV0WjPPgCyuaftn7kAHaKf?w=186&h=263&c=7&r=0&o=5&dpr=1.3&pid=1.7' height={10} width={10}/>
            </span>
           </h2> */}


          <h2 className=' whitespace-nowrap'>Subtotal({items.length} items)
           </h2>
           <span className=' font-bold'>
            <Image src='https://th.bing.com/th/id/OIP.9iVFCV0WjPPgCyuaftn7kAHaKf?w=186&h=263&c=7&r=0&o=5&dpr=1.3&pid=1.7' height={10} width={10}/>
            {total} </span>
          
           <button role="link" onClick={createCheckoutSession} disabled={!session} className={`button mt-2 ${!session && 'from-gray-300 to-gray-500 border-gray-200 text-gray-300 cursor-not-allowed'}`}>
            {!session ? "sign in to checkout": "proceed to pay"}
           </button>
          </>
         )}
       </div>
       </main>

    </div>
  )
}

export default Checkout