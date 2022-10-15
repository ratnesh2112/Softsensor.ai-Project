import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import InfiniteScroll from "react-infinite-scroll-component"

import Styles from './style.module.css'

const Home = () => {
    const [product , setProduct] = useState([])

    //function which fetch the data from API

    const getProduct =  async () =>{
        let data = await fetch("https://fakestoreapi.com/products")
        data = await data.json()
        setProduct(data)
    }

    //calling the function inside useeffect

    useEffect(()=>{
        getProduct()
    },[])

    //function to implement infinite scroll

    const moreData = async () =>{
        let data = await fetch("https://fakestoreapi.com/products")
        data = await data.json()

        //time interval after data load again

        setTimeout(() => {
            setProduct(product.concat(data))
        },2500);
    }

    //calling the function inside useeffect

    useEffect(()=>{
        moreData()
    },[])

    //function which trigger after clicking add to cart button


    const handleClick = (data) =>{
        console.log(data)
    }
    
  return (
    <div>

        <InfiniteScroll 
            dataLength={product.length}
            next={moreData}
            hasMore={true}
            loader={<h2>Loading More Data Please Wait...</h2>}
        >
        {/* mapping the product data */}

        {product.length==0 ? <h2 className={Styles.head}>Please Wait...</h2> : product.map((item,i)=>(
            <div className={Styles.product} key={i}>
                <div className={Styles.image}> 
                  <img src={item.image}/>
                </div>
                <div className={Styles.data}>
                    <h3>Category : {item.category}</h3>
                    <p>{item.title}</p>
                    <h3>Cost : ₹{item.price}</h3>
                    {/* linking to the cart page */}
                    <Link to="/cart">
                      <button className={Styles.btn} onClick={()=>handleClick(item)}>Add To Cart</button>
                    </Link>
                </div>
            </div>
        ))}
        </InfiniteScroll>
    </div>
  )
}

export default Home