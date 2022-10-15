import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import Styles from './style.module.css'

const Cart = () => {

  let data = useSelector(state=>state.data)

  if(data.length==0)
  {
    return (
      <div>

        <h1 className={Styles.head1}>Cart-Section</h1>

        <h2 className={Styles.head2}>Cart Empty!!!!!</h2>

        <h1 className={Styles.head2}>Please Add Item's in Cart</h1>

        <Link to="/">

        <button className={Styles.btn}>Back</button>

        </Link>

       </div>
    )
  }
  else{
    return (
      <div className={Styles.cart}>
        <div>
            <h1 className={Styles.head3}>Cart Section</h1>
        </div>
        <Link to="/">
          <button className={Styles.btn}>Back</button>
        </Link>
        <div className={Styles.cartData}>
  
          <div className={Styles.image}> 
  
            <img src={data.image}/>
  
          </div>
  
          <div className={Styles.data}>
  
            <h3>Category : {data.category}</h3>
  
            <p>{data.title}</p>
  
            <h3>Cost : ₹{data.price}</h3>
  
          </div>
  
        </div>
      </div>
    )
  }
  
}

export default Cart