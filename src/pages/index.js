import Head from "next/head";
import Banner from "../components/banner";
import Header from "../components/header";
import Productfeed from "../components/productfeed";

export default function Home({products}) {
  return (
    <div className=" bg-gray-100">
      <Head>
        <title>VD mart</title>
      </Head>
      {/* Header */}      
     <Header/>

     <main className=" max-w-screen-2xl mx-auto">
      {/* banner */}
       <Banner />
      {/* product feed */}
      <Productfeed products={products}/>
     </main>
    </div>
  );
}


export async function getServerSideProps(context){
  const products = await fetch("https://fakestoreapi.com/products").then(
    (res)=>res.json()
  );
  return{
    props :{
    products,
  }}
}