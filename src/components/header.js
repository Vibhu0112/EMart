import React from 'react'
import Image from "next/image";
import {
    MenuIcon,
    SearchIcon,
    ShoppingCartIcon,
} from "@heroicons/react/outline"; 
import { signIn , signOut, useSession } from "next-auth/react";
import {useRouter} from "next/router";
import { useSelector } from 'react-redux';
import { selectItems } from '../slices/basketSlice';


function Header() {
  // const [session]= useSession();
  const {data: session} = useSession();
  const router = useRouter();
  const items = useSelector(selectItems) ;

  return (
    <header>
        {/* top nav */}
       <div className='flex items-center bg-amazon_blue p-1 flex-grow '>
         <div className=' mt-2 flex items-center flex-grow sm:flex-grow-0'>
            <Image 
            onClick={()=> router.push("/")}
            src='https://d24v5oonnj2ncn.cloudfront.net/wp-content/uploads/2018/10/16030301/Amazon-Logo-Black.jpg' alt=''
             width={100}
             height={60}
             objectFit="contain"
             className=' cursor-pointer ml-5'
            />
         </div>
         {/* search section */}
         <div className=' hidden sm:flex items-center h-10 flex-grow cursor-pointer rounded-md bg-yellow-400 hover:bg-yellow-500'>
            <input className='p-2 h-full w-6 flex-grow flex-shrink rounded-l-md' type="text"/>
            <SearchIcon className=" h-12 p-4"/>
         </div>
         {/* right */}
         <div className=' text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap'>
            <div onClick={!session ? signIn : signOut} className='link'>
             <p className=' hover:underline'>
              {session ? 'hello, ${session.user.name}' : "Sign In"}
             </p>
             <p className=' font-extrabold md:text-sm'>Accounts & lists</p>
            </div>
            <div className='link' onClick={()=>router.push("options/order&return")}>
                <p className=' font-extrabold md:text-sm'>Returns</p>
                <p className=' font-extrabold md:text-sm'>& Orders</p>
            </div>
            <div onClick={()=>router.push("/checkout")} className=' link relative flex items-center'>
                <span className=' absolute top-0 right-0 md:right-6 h-4 w-4 rounded-full text-black font-bold text-center bg-yellow-300'>
                  {items.length}
                </span>
              <ShoppingCartIcon className='h-10' />
              <p className=' hidden md:inline font-extrabold md:text-sm mt-2'>cart</p>
            </div>
         </div>
       </div>
         {/* bottom nav */}
       <div className=' flex items-center space-x-3 p-2 pl-6 bg-amazon_blue text-white'>
        <p className=' link flex items-center'>
            <MenuIcon className=" h-6 mr-1"/>
            All
        </p>
        <p className='link' onClick={()=>router.push("https://www.primevideo.com/?ref_=dvm_pds_amz_in_as_s_gm_16_mkw_symCJqBmk-dc&mrntrk=pcrid_610141119783_slid__pgrid_84577172528_pgeo_1007751_x__adext__ptid_kwd-339065342343&gclid=EAIaIQobChMIwpqv2oTo_AIVx5FmAh3CqAU5EAAYASAAEgJqyfD_BwE")}>Prime Video</p>
        <p className='link'>Amazon Business</p>
        <p className='link'>Today's Deals</p>
        <p className='link hidden lg:inline-flex'>Electronics </p>
        <p className='link hidden lg:inline-flex'>Food & Grocery</p>
        <p className='link hidden lg:inline-flex'>Prime</p>
        <p className='link hidden lg:inline-flex'>Buy Again</p>
        <p className='link hidden lg:inline-flex'>Shopper Toolkit</p>
        <p className='link hidden lg:inline-flex'>Health & Personal Care</p>

       </div>
    </header>
  )
}

export default Header