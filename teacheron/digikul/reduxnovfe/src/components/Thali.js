import React from 'react'
import { useSelector } from 'react-redux'; 

const Thali = () => {

  const thali=useSelector(state=>state.counter.thali)

    
  return (
    <div>
      <h3>{thali.length}</h3>

<img src="https://img.icons8.com/external-icongeek26-outline-gradient-icongeek26/64/000000/external-cart-ecommerce-icongeek26-outline-gradient-icongeek26.png"/>
    </div>
  )
}

export default Thali