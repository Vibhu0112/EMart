import React from 'react'
import Product from './product'

function Productfeed({products}) {
  return (
    <div className=' grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-52 mx-auto'>
    {products.slice(0,4)
    .map(({id,title,price,description,category,image})=>(
        <Product 
         key={id}
         id={id}
         title={title}
         price={price}
         description={description}
         category={category}
         image={image}
        />
    ))}
  
   <img className=' md:col-span-full h-52 w-full ml-5 mr-7' 
   src='https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/4bb228120705693.60b70f428bd19.jpg' alt='' 
   />
  
  <div className=' md:col-span-2'>
  {products.slice(4,5)
    .map(({id,title,price,description,category,image})=>(
        <Product 
         key={id}
         id={id}
         title={title}
         price={price}
         description={description}
         category={category}
         image={image}
        />
    ))}
  </div>

  {products.slice(5,products.length)
    .map(({id,title,price,description,category,image})=>(
        <Product 
         key={id}
         id={id}
         title={title}
         price={price}
         description={description}
         category={category}
         image={image}
        />
    ))}
  </div>
)}

export default Productfeed